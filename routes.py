import hashlib

import pyodbc
from fastapi import APIRouter
from fastapi import Response

from db import conn, run_query, fetch
from models import *

# from tornado.escape import utf8

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
    return fetch("SELECT u.firstName, u.lastName, * from Student s inner join [User] u on u.userID = s.userID")


@router.get("/section", tags=['Section'])
async def section_list():
    return fetch("SELECT * FROM [Section]")


@router.get("/parent", tags=['Parent'])
async def parents_list():
    return fetch(
        "SELECT p.parentID, u.firstName, u.lastName from Parent p inner join [User] u on u.userID = p.parentID")


@router.get("/users", tags=['User'])
async def users_list():
    return fetch("SELECT * FROM [User]")


@router.get("/schools", tags=['School'])
async def school_list():
    return fetch("SELECT * FROM [School]")


@router.get('/semester', tags=['Semester'])
async def get_semesters():
    return fetch('SELECT * FROM Semester')


@router.get('/schedule', tags=['CourseSchedule'])
async def get_class():
    # return fetch('''
    #     select distinct class.className
    #     from Class, Course_Schedule schedule
    #     where class.classID = schedule.classID
    # ''');
    return fetch('select distinct Course_Schedule.classID from Course_Schedule')


@router.get("/course/{course_id}", tags=['Course'])
async def get_course(course_id: int):
    return fetch("SELECT * FROM Course WHERE courseID = ?", (course_id,))[0]


@router.get("/class/{class_id}", tags=['Class'])
async def get_class(class_id: int):
    return fetch("SELECT * FROM Class WHERE classID = ?", (class_id,))[0]


@router.get("/section/{section_id}", tags=['Section'])
async def get_section(section_id: int):
    return fetch("SELECT * FROM Section WHERE id = ?", (section_id,))[0]


@router.get("/student/{student_id}", tags=['Student'])
async def get_student(student_id: int):
    return fetch("SELECT * FROM Student WHERE studentID = ?", (student_id,))[0]


@router.get("/parent/{parent_id}", tags=['Parent'])
async def get_parent(parent_id: int):
    return fetch(
        "SELECT p.parentID, u.firstName, u.lastName FROM Parent p, [User] u WHERE parentID = ? and p.parentID=u.userID",
        (parent_id,))[0]


@router.get("/school/{school_id}", tags=['School'])
async def get_school(school_id: int):
    return fetch("SELECT * FROM School WHERE id = ?", (school_id,))[0]


@router.get("/semester/{semester_id}", tags=['Semester'])
async def get_semester(semester_id: int):
    return fetch("SELECT * FROM Semester WHERE semesterID = ?", (semester_id,))[0]


@router.get('/schedule/{classId}', tags=['CourseSchedule'])
def get_schedule(classId: int, response: Response):
    sql = 'select * from Course_Schedule where classID = ?'
    params = (classId,)
    run_query(sql, params, response)
    return {"success": True}


@router.post("/login", tags=['User'])
def check_credentials(email: str, password: str, response: Response):
    password = hashlib.sha256(password.encode('utf-8')).hexdigest()
    sql = "SELECT * FROM [User] WHERE email = '{}' AND password = '{}'".format(email, password)
    result = fetch(sql, return_dict=False)
    if len(result) == 1:
        return True
    else:
        return False


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
def create_student(student: Student, response: Response):
    sql = "exec AddStudent @firstName = ?, @lastName = ?, @email = ?, @phone = ?, @address = ?, @birthDate = ?, @school = ?, @grade = ?, @section = ?"
    params = (
        student.firstname, student.lastname, student.email, student.phonenumber, student.address, student.birthdate,
        student.school, student.grade, student.section)
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.post("/school", tags=['School'])
def create_school(school: School, response: Response):
    sql = "INSERT INTO School (name) VALUES (?); "
    params = school.schoolname
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.post("/semester", tags=['Semester'])
def create_semester(semester: Semester, response: Response):
    sql = "exec AddSemester @semesterDescription = ?, @startingDate = ?, @endingDate = ?, @isActive = ?"
    print(semester.semesterdescription, semester.startingdate, semester.endingdate, semester.isactive)
    params = (semester.semesterdescription, semester.startingdate, semester.endingdate, semester.isactive)
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.post('/schedule', tags=['CourseSchedule'])
def create_schedule(schedule: CourseSchedule, response: Response):
    sql = "insert into Course_Schedule(classID, courseID, courseDay, courseHour) values(?,?,?,?)"
    params = (schedule.classid, schedule.courseid, schedule.courseday, schedule.coursehour)
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.post('/parent', tags=['Parent'])
def create_parent(parent: Parent, response: Response):
    sql = "exec AddParent @firstName = ?, @lastName = ?, @email = ?, @phone = ?, @address = ?, @birthDate = ?"
    params = (parent.firstname, parent.lastname, parent.email, parent.phone, parent.address, parent.birthdate)
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


@router.patch("/section/{section_id}", tags=['Section'])
def update_section(section: Section, response: Response):
    sql = "UPDATE Section SET id = ?, name = ?, shortName = ?"
    params = (section.sectionid, section.name, section.shortname)
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.patch("/class/{class_id}", tags=['Class'])
def update_class(clas: Class, response: Response):
    sql = "UPDATE Class SET className = ?, classSize = ?, classCapacity = ?, classGrade = ?, semester = ?, section = ? WHERE classID = ?"
    params = (
        clas.classname, clas.classsize, clas.classcapacity, clas.classgrade, clas.semester, clas.section, clas.classid)
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


@router.patch("/school/{school_id}", tags=['School'])
def update_school(school: School, response: Response):
    sql = "UPDATE School SET name = ?"
    params = school.schoolname
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.patch("/semester/{semester_id}", tags=['Semester'])
def update_semester(semester: Semester, response: Response):
    sql = "UPDATE Semester SET semesterDescription = ?, startingDate = ?, endingDate = ?, isActive = ? WHERE semesterID = ?"
    params = (
        semester.semesterdescription, semester.startingdate, semester.endingdate, semester.isactive,
        semester.semesterid)
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.patch('/schedule/{schedule_id}', tags=['CourseSchedule'])
def edit_schedule(courseSchedule: CourseSchedule, response: Response):
    sql = "UPDATE Course_Schedule SET courseID = ?, classID = ?, courseDay = ?, courseHour = ?"
    params = (courseSchedule.courseid, courseSchedule.classid, courseSchedule.courseday, courseSchedule.coursehour)
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.patch('/parent/{parent_id}', tags=['Parent'])
def edit_parent(parent: Parent, response: Response):
    sql = "UPDATE [User] SET firstname = ?, lastname = ? WHERE userID = ?"
    params = (parent.firstname, parent.lastname, parent.parentid)
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


@router.delete("/parent/{parent_id}", tags=['Parent'])
def delete_course(parent_id: int, response: Response):
    sql = "DELETE FROM Parent WHERE parentID = ?"
    params = (parent_id,)
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


@router.delete("/school/{school_id}", tags=['School'])
def delete_school(school_id: int, response: Response):
    sql = "DELETE FROM School WHERE id = ?"
    params = school_id
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.delete("/semester/{semester_id}", tags=['Semester'])
def delete_semester(semester_id: int, response: Response):
    sql = "DELETE FROM Semester WHERE semesterID = ?"
    params = (semester_id,)
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
    params = (user.firstname, user.lastname, user.username, user.password, user.email
              , user.phonenumber, user.address, user.birthdate, user.isconfirmed, user.isactive, user.usertype
              , user.registerdate)
    run_query(sql, params, response)
    return {
        "success": True
    }


@router.patch("/user/{user_id}", tags=['User'])
def update_user(user: User, response: Response):
    sql = "UPDATE [User] SET firstName = ?, lastName = ?, username = ?, password = ?, email = ?, phoneNumber = ?, address = ?, birthDate = ?, isConfirmed = ?, isActive = ?, userType = ?, registerDate = ?"
    params = (user.firstname, user.lastname, user.username, user.password, user.email
              , user.phonenumber, user.address, user.birthdate, user.isconfirmed, user.isactive, user.usertype
              , user.registerdate)
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


@router.delete('/schedule/{course_id}', tags=['CourseSchedule'])
def delete_schedule(course_id: int, response: Response):
    sql = "delete from Course_Schedule where courseID = ?"
    params = (course_id,)
    run_query(sql, params, response)
    return {
        "success": True
    }
