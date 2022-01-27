# Course Management System
You can use this course management system to manage your students, teachers, parents,
classes, timetable of classes, exam grades and attendance records.

## Installing
```bash
pip install -r requirements.txt
cd frontend
npm install
```

## Running
```bash
uvicorn app:app --reload
cd frontend
npm run dev
```

## Preview
![Login Page](preview/login-page.png "Login Page")
*Login Page*

![Courses](preview/courses.png "Courses")
*Courses Page*

![Classes](preview/classes.png "Classes")
*Classes Page*

![Students](preview/students.png "Students")
*Students Page*

![Course Teachers](preview/course-teachers.png "Course Teachers")
*Course Teachers Page*

![Exam Results](preview/exam-results.png "Exam Results")
*Exam Results Page*

## Credits
- [Refine](https://github.com/pankod/refine)
- [FastAPI](https://github.com/tiangolo/fastapi)