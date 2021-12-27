from pydantic import BaseModel


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
    classcapacity: str
    classgrade: int
    semester: int
    section: int
