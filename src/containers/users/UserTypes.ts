import { Model, Types } from "mongoose";

export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  discord: string;
  twitter: string;
  type: string;
  verified: boolean;
  referrals: string[];
  coupons: string[];
  stripe_customer: object;
  updated_by?: Types.ObjectId;
  created_by?: Types.ObjectId;
}

export interface IUserMethods {
  fullName(): string;
}

export interface IAuth {
  username: string;
  password: string;
}

export type UserModel = Model<IUser, object, IUserMethods>;
