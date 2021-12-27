from typing import Optional

import pyodbc
from fastapi import Response

from db import TableModel, conn, run_query, fetch
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
    return fetch("SELECT * FROM Course")


@router.get("/course/{course_id}", tags=['Course'])
async def get_course(course_id: int):
    return fetch("SELECT * FROM Course WHERE courseID = ?", (course_id,))[0]


@router.post("/course", tags=['Course'])
def create_course(course: Course, response: Response):
    sql = "exec AddCourse @name = ?, @active = ?, @grade = ?, @shortName = ?"
    params = (course.course_name, course.is_active, course.grade, course.short_name)
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.patch("/course/{course_id}", tags=['Course'])
def update_course(course: Course, response: Response):
    sql = "UPDATE FROM Course SET courseName = ?, isActive = ?, grade = ?, shortName = ? WHERE courseID = ?"
    params = (course.course_name, course.is_active, course.grade, course.short_name, course.course_id)
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.delete("/course/{course_id}", tags=['Course'])
def delete_course(course_id: int, response: Response):
    try:
        sql = "DELETE FROM Course WHERE courseID = ?"
        params = (course_id,)
        cursor = conn.cursor()
        cursor.execute(sql, params)
        conn.commit()
    except pyodbc.Error as e:
        response.status_code = 400
        return {"error": str(e)}
    return {"item_id": course_id}
