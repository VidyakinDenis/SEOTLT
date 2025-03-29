export interface INews {
  date: string;
  name: string;
  description: string;
  id: string;
}

export interface INewsForm {
  name: string;
  description: string;
}

export interface IUpdateNews extends INewsForm {
  id: string;
}
