import React from "react";
import {AppProps} from "next/app";

import {AuthProvider, Refine} from "@pankod/refine";
import routerProvider from "@pankod/refine-nextjs-router";

import "@pankod/refine/dist/styles.min.css";
import dataProvider from "@pankod/refine-simple-rest";

const API_URL = "http://localhost:8000";
//const API_URL = "https://api.fake-rest.refine.dev";

import {PostList, PostCreate, PostEdit, PostShow} from "@components/posts";
import {CourseCreate, CourseEdit, CourseList, CourseShow} from "@components/courses";
import {ClassCreate, ClassEdit, ClassList, ClassShow} from "@components/classes";
import {StudentCreate, StudentEdit, StudentList, StudentShow} from "@components/students";
import {ScheduleCreate, ScheduleEdit, ScheduleList, ScheduleShow} from "@components/schedule"
import {ParentCreate, ParentEdit, ParentList, ParentShow} from "@components/parents"
import {Login} from "src/pages/login";
import "src/pages/login/styles.css";

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    const authProvider: AuthProvider = {
        login: async ({email, password, remember}) => {
            var formdata = new FormData();
            formdata.append("email", email);
            formdata.append("password", password);

            const requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            const response = await fetch("http://localhost:8000/login?email=" + email + "&password=" + password, requestOptions)
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
            resources={[
                {
                    name: "posts",
                    list: PostList,
                    create: PostCreate,
                    edit: PostEdit,
                    show: PostShow,
                },
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
                    name: "parent",
                    list: ParentList,
                    create: ParentCreate,
                    edit: ParentEdit,
                    show: ParentShow,
                },
            ]}
        >
            <Component {...pageProps} />
        </Refine>
    );
}

export default MyApp;
