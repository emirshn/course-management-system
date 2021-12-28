from pydantic import BaseModel


class Course(BaseModel):
    courseid: int
    coursename: str
    grade: int
    shortname: str
    isactive: int


class Class(BaseModel):
    classid: int
    classname: str
    classsize: int
    classcapacity: int
    classgrade: int
    semester: int
    section: int
 
class User(BaseModel):
  userid: str
  firstname: str
  lastname: str
  username: str
  password: str
  email: str
  phonenumber: str
  address: Optional[str]
  lastlogin: Optional[str]
  registerdate: str
  birthdate: str
  age: Optional[int]
  isconfirmed: int
  isactive: int
  usertype: str
