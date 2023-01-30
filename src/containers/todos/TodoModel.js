import mongoose from "mongoose";
import Todo from "./TodoEntity";

const todoSchema = new mongoose.Schema(
  {
    name: {
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
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    toObject: {
      virtuals: true,
      retainKeyOrder: true,
    },
    toJSON: {
      virtuals: true,
    },
  },
);

todoSchema.loadClass(Todo);

export default mongoose.model("Todo", todoSchema);
