from pydantic import BaseModel


class Course(BaseModel):
    course_id: int
    course_name: str
    grade: int
    short_name: str
    is_active: int
