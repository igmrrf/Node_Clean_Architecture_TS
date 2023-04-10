import { Types } from "mongoose";

export interface ITodo {
  _id: string;
  title: string;
  description: string;
  importance: string;
  updated_by?: Types.ObjectId;
  created_by?: Types.ObjectId;
  updated_at?: Date;
  created_at?: Date;
}
