from typing import Optional

import pyodbc
from fastapi import Response

from db import TableModel, query, conn
from fastapi import APIRouter, Form

from models import Course

router = APIRouter()


@router.get("/")
def read_root():
    return {"Hello": "World"} \
 \
           @ router.get("/items/{item_id}")


def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}


@router.get("/grade", tags=['Grade'])
def read_root():
    return [{'grade': 9}, {'grade': 10}, {'grade': 11}, {'grade': 12}]


@router.get("/course", tags=['Course'])
async def courses_list():
    return query("SELECT * FROM Course", True)


@router.post("/course", tags=['Course'])
def create_course(course: Course, response: Response):
    try:
        sql = "exec AddCourse @name = ?, @active = ?, @grade = ?, @shortName = ?"
        params = (course.courseName, 1, course.grade, course.shortName)
        cursor = conn.cursor()
        cursor.execute(sql, params)
        conn.commit()
    except pyodbc.Error as e:
        response.status_code = 400
        return {"error": str(e)}
    return {
        "success": True
    }


@router.patch("/course/{course_id}", tags=['Course'])
def update_course(course_id: int, q: Optional[str] = None):
    return {"item_id": course_id, "q": q}


@router.delete("/course/{course_id}", tags=['Course'])
def delete_course(course_id: int, q: Optional[str] = None):
    return {"item_id": course_id, "q": q}
