import mongoose from "mongoose";
import Todo from "./TodoEntity";
import { ITodo } from "./TodoTypes";

const todoSchema = new mongoose.Schema<ITodo>(
  {
    title: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      unique: true,
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

export default mongoose.model<ITodo>("Todo", todoSchema);
