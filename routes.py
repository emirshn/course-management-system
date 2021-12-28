import pyodbc
from fastapi import Response
from db import conn, run_query, fetch
from fastapi import APIRouter
from models import Course
from models import Class

router = APIRouter()


@router.get("/grade", tags=['Grade'])
def read_root():
    return [{'grade': 9}, {'grade': 10}, {'grade': 11}, {'grade': 12}]


@router.get("/course", tags=['Course'])
async def courses_list():
    return fetch("SELECT * FROM Course")

@router.get("/class", tags=['Class'])
async def classes_list():
    return fetch("SELECT * FROM Class")


@router.get("/course/{course_id}", tags=['Course'])
async def get_course(course_id: int):
    return fetch("SELECT * FROM Course WHERE courseID = ?", (course_id,))[0]

@router.get("/class/{class_id}", tags=['Class'])
async def get_class(class_id: int):
    return fetch("SELECT * FROM Class WHERE classID = ?", (class_id,))[0]


@router.post("/course", tags=['Course'])
def create_course(course: Course, response: Response):
    sql = "exec AddCourse @name = ?, @active = ?, @grade = ?, @shortName = ?"
    params = (course.coursename, course.isactive, course.grade, course.shortname)
    run_query(sql, params, response)
    return {
        "success": True
    }

@router.post("/class", tags=['Class'])
def create_class(clas: Class, response: Response):
    sql = "exec AddClass @name = ?, @capacity = ?, @grade = ?, @semester = ?, @section = ?"
    params = (clas.classname, clas.classcapacity, clas.classgrade, clas.semester, clas.section)
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

@router.patch("/class/{class_id}", tags=['Class'])
def update_class(clas: Class, response: Response):
    sql = "UPDATE Class SET className = ?, classSize = ?, classCapacity = ?, classGrade = ?, semester = ?, section = ? WHERE classID = ?"
    params = (clas.classname, clas.classsize, clas.classcapacity, clas.classgrade, clas.semester, clas.section)
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

@router.delete("/class/{class_id}", tags=['Class'])
def delete_class(class_id: int, response: Response):
    sql = "DELETE FROM Class WHERE classID = ?"
    params = (class_id,)
    run_query(sql, params, response)
    return {
        "success": True
    }
