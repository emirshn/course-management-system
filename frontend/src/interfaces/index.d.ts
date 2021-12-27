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
