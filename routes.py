import pyodbc
from fastapi import Response
from db import conn, run_query, fetch
from fastapi import APIRouter
from models import Course
from models import Class
from models import User
from models import Student

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

@router.get("/student", tags=['Student'])
async def students_list():
    return fetch("SELECT * FROM Student")


@router.get("/course/{course_id}", tags=['Course'])
async def get_course(course_id: int):
    return fetch("SELECT * FROM Course WHERE courseID = ?", (course_id,))[0]


@router.get("/class/{class_id}", tags=['Class'])
async def get_class(class_id: int):
    return fetch("SELECT * FROM Class WHERE classID = ?", (class_id,))[0]

@router.get("/student/{student_id}", tags=['Student'])
async def get_student(student_id: int):
    return fetch("SELECT * FROM Student WHERE studentID = ?", (student_id,))[0]


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

@router.post("/student", tags=['Student'])
def create_student( student: Student, response: Response):
    sql = "exec AddStudent @firstName = ?, @lastName = ?, @email = ?, @phone = ?, @address = ?, @birthDate = ?, @school = ?, @grade = ?, @section = ?"
    params = (student.firstname, student.lastname, student.email, student.phonenumber, student.address, student.birthdate, student.school,student.grade, student.section)
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
    params = (clas.classname, clas.classsize, clas.classcapacity, clas.classgrade, clas.semester, clas.section, clas.classid)
    run_query(sql, params, response)
    return {
        "success": True
    }

@router.patch("/student/{student_id}", tags=['Student'])
def update_student(student: Student, response: Response):
    sql = "UPDATE Student SET grade = ?, school = ?, section = ?, userID = ?, class = ? WHERE studentID = ?"
    params = (student.grade, student.school, student.section, student.userid, student.studentclass, student.studentid)
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

@router.delete("/student/{student_id}", tags=['Student'])
def delete_class(student_id: int, response: Response):
    sql = "DELETE FROM Student WHERE studentID = ?"
    params = (student_id,)
    run_query(sql, params, response)
    return {
        "success": True
    }

@router.get("/user", tags=['User'])
async def users_list():
    return fetch("SELECT * FROM [User]")


@router.get("/user/{user_id}", tags=['User'])
async def get_user(user_id: int):
    return fetch("SELECT * FROM [User] WHERE userID = ?", (user_id,))[0]

@router.post("/user", tags=['User'])
def create_user(user: User, response: Response):
    sql = "exec AddUser @first = ?, @last = ?, @username = ?, @password = ?, @email = ?, @phone = ?, @address = ?, @birth = ?, @isConfirmed = ?, @isActive = ?, @userType = ?, @registerDate = ?"
    params = (user.firstname, user.lastname, user.username, user.password,user.email
    ,user.phonenumber,user.address,user.birthdate,user.isconfirmed,user.isactive,user.usertype
    ,user.registerdate)
    run_query(sql, params, response)
    return {
        "success": True
    }

@router.patch("/user/{user_id}", tags=['User'])
def update_user(user: User, response: Response):
    sql = "UPDATE [User] SET firstName = ?, lastName = ?, username = ?, password = ?, email = ?, phoneNumber = ?, address = ?, birthDate = ?, isConfirmed = ?, isActive = ?, userType = ?, registerDate = ?"
    params = (user.firstname, user.lastname, user.username, user.password,user.email
    ,user.phonenumber,user.address,user.birthdate,user.isconfirmed,user.isactive,user.usertype
    ,user.registerdate)
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.delete("/user/{user_id}", tags=['User'])
def delete_user(user_id: int, response: Response):
    try:
        sql = "DELETE FROM [User] WHERE userId = ?"
        params = (user_id,)
        cursor = conn.cursor()
        cursor.execute(sql, params)
        conn.commit()
    except pyodbc.Error as e:
        response.status_code = 400
        return {"error": str(e)}
    return {"item_id": user_id}

