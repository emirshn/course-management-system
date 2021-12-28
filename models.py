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
