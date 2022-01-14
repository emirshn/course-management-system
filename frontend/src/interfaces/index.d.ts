export interface ICategory {
    id: string;
    title: string;
}

export interface IGrade {
    grade: number;
}

export interface IPost {
    id: string;
    title: string;
    content: string;
    status: "published" | "draft" | "rejected";
    createdAt: string;
    category: ICategory;
}

export interface ICourse {
    courseid: string;
    coursename: string;
    isactive: number;
    grade: number;
    shortname: string;
    displayname: string;
}

export interface IClass {
    classid: string;
    classname: string;
    classsize: number;
    classcapacity: number;
    classgrade: number;
    semester: number;
    section: number;
}

export interface IStudent {
    studentid: string;
    school: string;
    grade: number;
    section: string;
    userid: number;
    class: number;
}

export interface IUser {
    userid: string;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    phonenumber: string;
    address: string;
    lastlogin: string;
    registerdate: string;
    birthdate: string;
    age: number;
    isconfirmed: number;
    isactive: number;
    usertype: string;
}

export interface ICourseSchedule {
    classid: number
    courseid: number
    coursehour: number
    courseday: number
}

export interface IParent {
    parentid: string
    firstname: string
    lastname: string
    email: string
    phone: string
    address: string
    birthdate: string
}

export interface ITeacher {
    teacherid: string
    firstname: string
    lastname: string
    email: string
    phone: string
    address: string
    birthdate: string
}

export interface ISchool {
    id: string
    name: string
}

export interface ISemester {
    semesterid: string
    semesterdescription: string
    startingdate: string
    endingdate: string
    isactive: number
}

export interface ISection {
    id: string
    name: string
    shortname: string
}

export interface ICourseTeacher {
    teacherid: string
    courseid: string
    coursename: string
    grade: number
    teachername: string
}

export interface IExamResult {
    resultid: string
    studentid: number
    courseid: number
    grade: number
    date: string
}

export interface IStudentParent {
    studentid: string
    parentid: string
    studentname: string
    parentname: string
    pk: string
}

export interface IGrade {
    grade: string
}

export interface IAttendance {
    studentid: number
    courseid: number
    isattended: boolean
    date: string
}