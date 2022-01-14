import React from "react";
import {AppProps} from "next/app";
import {AuthProvider, Refine} from "@pankod/refine";
import routerProvider, {Link} from "@pankod/refine-nextjs-router";

import "@pankod/refine/dist/styles.min.css";
import dataProvider from "@pankod/refine-simple-rest";

const API_URL = "http://localhost:8000";
//const API_URL = "https://api.fake-rest.refine.dev";

import {PostList, PostCreate, PostEdit, PostShow} from "@components/posts";
import {CourseCreate, CourseEdit, CourseList, CourseShow} from "@components/courses";
import {ClassCreate, ClassEdit, ClassList, ClassShow} from "@components/classes";
import {StudentCreate, StudentEdit, StudentList, StudentShow} from "@components/students";
import {ScheduleCreate, ScheduleEdit, ScheduleList, ScheduleShow} from "@components/schedule"
import {SemesterCreate, SemesterEdit, SemesterList, SemesterShow} from "@components/semester"
import {ParentCreate, ParentEdit, ParentList, ParentShow} from "@components/parents"
import {TeacherCreate, TeacherEdit, TeacherList, TeacherShow} from "@components/teachers"
import {ExamResultCreate, ExamResultEdit, ExamResultList, ExamResultShow} from "@components/exam-results"
import {SectionCreate, SectionEdit, SectionList, SectionShow} from "@components/sections"
import {SchoolCreate, SchoolEdit, SchoolList, SchoolShow} from "@components/schools"
import {CourseTeacherCreate, CourseTeacherEdit, CourseTeacherList, CourseTeacherShow} from "@components/course-teachers"
import {StudentParentCreate, StudentParentEdit, StudentParentList, StudentParentShow} from "@components/student-parents"
import {AttendanceCreate, AttendanceEdit, AttendanceList, AttendanceShow} from "@components/attendances"
import {Login} from "src/pages/login";
import "src/pages/login/styles.css";

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    const authProvider: AuthProvider = {
        login: async ({email, password, remember}) => {
            var formdata = new FormData();
            formdata.append("email", email);
            formdata.append("password", password);

            const response = await fetch("http://localhost:8000/login?email=" + email + "&password=" + password, {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            })

            const data = await response.text();

            if (data === "true") {
                localStorage.setItem("email", email);
                return Promise.resolve();
            }

            return Promise.reject();
        },
        logout: () => {
            localStorage.removeItem("email");
            return Promise.resolve();
        },
        checkError: () => Promise.resolve(),
        checkAuth: () =>
            localStorage.getItem("email")
                ? Promise.resolve()
                : Promise.reject(),
        getPermissions: () => Promise.resolve(["admin"]),
    };

    return (
        <Refine
            authProvider={authProvider}
            LoginPage={Login}
            routerProvider={routerProvider}
            dataProvider={dataProvider(API_URL)}
             Title={({ collapsed }) => (
                <Link href="/">
                    {collapsed ? (
                        <img
                            src="/logo.svg"
                            alt="CMS"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "12px 24px",
                            }}
                        />
                    ) : (
                        <img
                            src="/logo.svg"
                            alt="CMS"
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                width: "100px",
                                padding: "12px 24px",
                            }}
                        />
                    )}
                </Link>
            )}
            resources={[
                {
                    name: "course",
                    list: CourseList,
                    create: CourseCreate,
                    edit: CourseEdit,
                    show: CourseShow,
                },
                {
                    name: "class",
                    list: ClassList,
                    create: ClassCreate,
                    edit: ClassEdit,
                    show: ClassShow,
                },
                {
                    name: "schedule",
                    list: ScheduleList,
                    create: ScheduleCreate,
                    edit: ScheduleEdit,
                    show: ScheduleShow,
                },
                {
                    name: "student",
                    list: StudentList,
                    create: StudentCreate,
                    edit: StudentEdit,
                    show: StudentShow,
                },
                {
                    name: "semester",
                    list: SemesterList,
                    create: SemesterCreate,
                    edit: SemesterEdit,
                    show: SemesterShow,
                },
                {
                    name: "parent",
                    list: ParentList,
                    create: ParentCreate,
                    edit: ParentEdit,
                    show: ParentShow,
                },
                {
                    name: "teacher",
                    list: TeacherList,
                    create: TeacherCreate,
                    edit: TeacherEdit,
                    show: TeacherShow,
                },
                {
                    name: "course-teacher",
                    list: CourseTeacherList,
                    create: CourseTeacherCreate,
                    edit: CourseTeacherEdit,
                    show: CourseTeacherShow,
                },
                {
                    name: "exam-result",
                    list: ExamResultList,
                    create: ExamResultCreate,
                    edit: ExamResultEdit,
                    show: ExamResultShow,
                },
                {
                    name: "section",
                    list: SectionList,
                    create: SectionCreate,
                    edit: SectionEdit,
                    show: SectionShow,
                },
                {
                    name: "school",
                    list: SchoolList,
                    create: SchoolCreate,
                    edit: SchoolEdit,
                    show: SchoolShow,
                },
                {
                    name: "student-parent",
                    list: StudentParentList,
                    create: StudentParentCreate,
                    edit: StudentParentEdit,
                    show: StudentParentShow,
                },
                {
                    name: "attendance",
                    list: AttendanceList,
                    create: AttendanceCreate,
                    edit: AttendanceEdit,
                    show: AttendanceShow,
                },

            ]}
        >
            <Component {...pageProps} />
        </Refine>
    );
}

export default MyApp;
