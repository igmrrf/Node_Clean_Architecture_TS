/**
 https://mongoosejs.com/docs/4.x/docs/advanced_schemas.html
 *A class method maps to a schema method, a static method maps to a schema static,
 and getters/setters map to virtuals.
*/

import { Types } from "mongoose";
import { ITodo } from "./TodoTypes";

class Todo {
  _id!: string;
  title!: string;
  description!: string;
  importance!: string;
  created_by?: Types.ObjectId;
  created_at!: Date;
  updated_at?: Date;
  ModelObject: any;
  constructor(ModelObject: any) {
    this.ModelObject = ModelObject;
  }

  getPublicFields(): ITodo {
    return {
      _id: this._id,
      title: this.title,
      description: this.description,
      importance: this.importance,
      created_by: this.created_by,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

export default Todo;
