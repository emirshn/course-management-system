from pydantic import BaseModel


class Course(BaseModel):
    courseid: int
    coursename: str
    grade: int
    shortname: str
    isactive: int
