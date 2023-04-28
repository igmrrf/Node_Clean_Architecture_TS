/**
 https://mongoosejs.com/docs/4.x/docs/advanced_schemas.html
 *A class method maps to a schema method, a static method maps to a schema static,
 and getters/setters map to virtuals.
*/

import { Date, Types } from "mongoose";

class User {
  _id?: Types.ObjectId;
  tenant?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  discord?: string;
  twitter?: string;
  type?: string;
  coupons?: string[];
  stripe_customer?: string;
  created_by?: Types.ObjectId;
  updated_by?: Types.ObjectId;
  created_at?: Date;
  updated_at?: Date;
  ModelObject: any;

  constructor(ModelObject: any) {
    this.ModelObject = ModelObject;
  }

  getPublicFields() {
    return {
      _id: this._id,
      username: this.username,
      email: this.email,
      discord: this.discord,
      twitter: this.twitter,
      tenant: this.tenant,
      type: this.type,
      coupons: this.coupons,
      stripe_customer: this.stripe_customer,
      created_by: this.created_by,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }

  getFullName() {
    return `${this.first_name} ${this.last_name}`;
  }
}

export default User;
