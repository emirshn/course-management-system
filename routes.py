from typing import Optional
from db import TableModel, query
from fastapi import APIRouter, Form

router = APIRouter()


@router.get("/")
def read_root():
    return {"Hello": "World"}


@router.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}


@router.get("/course", tags=['Course'])
async def courses_list():
    return query("SELECT * FROM Course")


@router.post("/course", tags=['Course'])
def create_course(courseID: int = Form(...), courseName: str = Form(...)):
    return {
        "status": "SUCCESS",
        "data": str(courseID) + courseName
    }


@router.patch("/course/{course_id}", tags=['Course'])
def update_course(course_id: int, q: Optional[str] = None):
    return {"item_id": course_id, "q": q}


@router.delete("/course/{course_id}", tags=['Course'])
def delete_course(course_id: int, q: Optional[str] = None):
    return {"item_id": course_id, "q": q}
