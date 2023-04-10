import mongoose, { Schema } from "mongoose";
import User from "./UserEntity";
import { IUser, IUserMethods, UserModel } from "./UserTypes";

const userSchema = new mongoose.Schema<IUser, UserModel, IUserMethods>(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    discord: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["customer", "partner", "staff", "admin"],
      default: "customer",
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },

    referrals: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],

    stripe_customer: Object,
    updated_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: false,
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

userSchema.loadClass(User);

userSchema.method("fullName", function fullName() {
  return this.first_name + " " + this.last_name;
});

export default mongoose.model<IUser, UserModel>("User", userSchema);
