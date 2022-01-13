from pydantic import BaseModel
from typing import Optional


class Course(BaseModel):
    courseid: int
    coursename: str
    grade: int
    shortname: str
    isactive: int


class Class(BaseModel):
    classid: int
    classname: str
    classsize: int
    classcapacity: int
    classgrade: int
    semester: int
    section: int


class User(BaseModel):
    userid: str
    firstname: Optional[str]
    lastname: Optional[str]
    username: Optional[str]
    password: Optional[str]
    email: Optional[str]
    phonenumber: Optional[str]
    address: Optional[str]
    lastlogin: Optional[str]
    registerdate: Optional[str]
    birthdate: Optional[str]
    age: Optional[int]
    isconfirmed: Optional[int]
    isactive: Optional[int]
    usertype: Optional[str]


class Student(User):
    studentid: int
    school: str
    grade: int
    section: int
    userid: int
    studentclass: Optional[int]


class CourseSchedule(BaseModel):
    classid: int
    courseid: int
    coursehour: int
    courseday: int


class School(BaseModel):
    id: int
    name: str


class Semester(BaseModel):
    semesterid: int
    semesterdescription: str
    startingdate: str
    endingdate: str
    isactive: int


class Section(BaseModel):
    id: int
    name: str
    shortname: str


class Parent(BaseModel):
    parentid: int
    firstname: str
    lastname: str
    phone: str
    email: str
    address: str
    birthdate: str


class Teacher(BaseModel):
    teacherid: int
    firstname: str
    lastname: str
    phone: str
    email: str
    address: str
    birthdate: str


class CourseTeacher(BaseModel):
    courseid: int
    teacherid: int

class StudentParent(BaseModel):
    studentid: int
    parentid: int

class ExamResult(BaseModel):
    resultid: int
    studentid: int
    courseid: int
    grade: int
    date: str