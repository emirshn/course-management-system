import pyodbc
from fastapi import Response
from db import conn, run_query, fetch
from fastapi import APIRouter
from models import Course

router = APIRouter()


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
    params = (course.coursename, course.isactive, course.grade, course.shortname)
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.patch("/course/{course_id}", tags=['Course'])
def update_course(course: Course, response: Response):
    sql = "UPDATE Course SET courseName = ?, isActive = ?, grade = ?, shortName = ? WHERE courseID = ?"
    params = (course.coursename, course.isactive, course.grade, course.shortname, course.courseid)
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.delete("/course/{course_id}", tags=['Course'])
def delete_course(course_id: int, response: Response):
    sql = "DELETE FROM Course WHERE courseID = ?"
    params = (course_id,)
    run_query(sql, params, response)
    return {
        "success": True
    }
