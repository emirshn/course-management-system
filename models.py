from pydantic import BaseModel


class Course(BaseModel):
    courseName: str
    grade: int
    shortName: str