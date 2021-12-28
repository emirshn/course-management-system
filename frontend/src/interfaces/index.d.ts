export interface ICategory {
  id: string;
  title: string;
}

export interface IGrade {
  grade: number;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
  category: ICategory;
}

export interface ICourse {
  courseid: string;
  coursename: string;
  isactive: number;
  grade: number;
  shortname: string;
}

export interface IClass {
  classid: string;
  classname: string;
  classsize: number;
  classcapacity: number;
  classgrade: number;
  semester: number;
  section: number;
}

export interface IStudent {
  studentid: string;
  school: string;
  grade: number;
  section: number;
  userid: number;
  class: number;
}