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
    section: number;
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
    classid: int
    courseid: int
    coursehour: int
    courseday: int
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
    schoolid: int
    schoolname: str
}

export interface ISemester{
    semesterid:int
    semesterdescription: str
    startingdate: str
    endingdate: str
    isactive: number
}

export interface ISection{
    sectionid:int
    name: str
    shortname: str
}

export interface ICourseTeacher{
    teacherid: string
    courseid: string
    coursename: string
    grade: int
    teachername: string
}

export interface IExamResult{
    resultid: int
    studentid: int
    courseid: int
    grade: int
    date: str
}

export interface IStudentParent{
    studentid: string
    parentid: string
    studentname: string
    parentname: string
}