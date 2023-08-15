import MongoDBManager from "base/database/MongoDBManager";
import mongoose from "mongoose";
import Todo from "./TodoEntity";
import { ITodo } from "./TodoTypes";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      unique: true,
    },
    odd: {
      type: String,
      default: (object: any) => {
        if (object) {
          console.log({ object });
        }
        if (this) {
          console.log({ ok: this });
        }
        return "";
      },
    },
    importance: {
      type: String,
      enum: ["low", "medium", "high"],
    },
    updated_by: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    created_by: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  },
);
todoSchema.loadClass(Todo);

const collection = "Todo";

export async function override(database: string) {
  // set the statics.database to tenant
  // check if not a global
  // if not a global, override it's mongo connection
  // if global proceed with the default connection

  todoSchema.statics.database = function () {
    return database;
  };
  // if (!noLoop) {
  //   if (checkIfNotGlobal(collection, "UserModel")) {
  //     const model = await import("./UserModel");

  //     // _models["UserModel"] = collect.override(database, true);
  //   }
  // }

  const db: any = await MongoDBManager.override(database);

  return db.model(collection, todoSchema);
}
export default mongoose.model<ITodo>(collection, todoSchema);
