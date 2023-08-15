import MongoDBManager from "base/database/MongoDBManager";
import mongoose, { Schema } from "mongoose";
import User from "./UserEntity";
import { IUser, IUserMethods, UserModel } from "./UserTypes";

const userSchema = new mongoose.Schema<IUser, UserModel, IUserMethods>(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      // unique: true,
    },
    tenant: {
      type: String,
      default: "Global",
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
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

const collection = "User";

export async function override(database: string) {
  // set the statics.database to tenant
  // check if not a global
  // if not a global, override it's mongo connection
  // if global proceed with the default connection

  userSchema.statics.database = function () {
    return database;
  };
  // if (!noLoop) {
  //   if (checkIfNotGlobal(collection, "UserModel")) {
  //     const model = await import("./UserModel");

  //     // _models["UserModel"] = collect.override(database, true);
  //   }
  // }

  const db: any = await MongoDBManager.override(database);

  return db.model(collection, userSchema);
}

export default mongoose.model<IUser, UserModel>(collection, userSchema);
