/* eslint-disable no-param-reassign */
import PaymentService from "base/payments/Stripe";
import BaseRepository from "base/repositories";
import config from "config";
import jwt from "helpers/jwt";
import Password from "helpers/password";
import ConflictError from "interfaces/rest/errors/ConflictError";
import ResourceNotFoundError from "interfaces/rest/errors/ResourceNotFoundError";
import { random } from "lodash";
import { HydratedDocument } from "mongoose";
import { IUser } from "./UserTypes";

class UserRepository extends BaseRepository {
  User: any;

  currentUser: HydratedDocument<IUser>;

  constructor({ models: { User }, currentUser }: { models: any; currentUser: any }) {
    super({ Model: User.default });
    this.User = User;
    this.currentUser = currentUser;
  }

  async create(payload: any) {
    const { email, discord, twitter } = payload;
    let existingUserName;
    if (payload.tenant) {
      const User = await this.User.override(payload.tenant);
      existingUserName = await User.find({ username: payload.username });
    } else {
      existingUserName = await this.find(
        { username: payload.username },
        undefined,
        {
          lean: true,
        },
        false,
      );
    }

    if (existingUserName) {
      payload.username += random(999);
    }

    if (process.env.NODE_ENV === "test") {
      const newUser = await this.createDoc({
        username: payload.username,
        email,
        discord,
        twitter,
      });
      return newUser.getPublicFields();
    }

    const stripe = new PaymentService({ config });
    const stripe_customer = await stripe.createAccount({
      email: payload.email,
      name: payload.first_name,
    });

    let newUser;
    if (payload.tenant) {
      const User = await this.User.override(payload.tenant);
      newUser = User({
        stripe_customer,
        username: payload.username,
        email,
        discord,
        twitter,
        tenant: payload.tenant,
      });
      newUser = await newUser.save();
    } else {
      newUser = await this.createDoc({
        stripe_customer,
        username: payload.username,
        email,
        discord,
        twitter,
      });
    }

    return newUser.getPublicFields();
  }

  async createTenant(payload: any) {
    const { email, discord, twitter, tenant } = payload;

    const existingUserName = await this.User.override(tenant).find(
      { username: payload.username },
      undefined,
      {
        lean: true,
      },
      false,
    );

    if (existingUserName) {
      payload.username += random(999);
    }

    if (process.env.NODE_ENV === "test") {
      const newUser = await this.createDoc({
        username: payload.username,
        email,
        discord,
        twitter,
      });
      return newUser.getPublicFields();
    }

    const stripe = new PaymentService({ config });
    const stripe_customer = await stripe.createAccount({
      email: payload.email,
      name: payload.first_name,
    });

    const newUser = await this.createDoc({
      stripe_customer,
      username: payload.username,
      email,
      discord,
      twitter,
    });

    return newUser.getPublicFields();
  }

  async login(payload: any): Promise<any> {
    const user = await this.find({ username: payload.username }, undefined, { lean: false }, false);

    if (!user) {
      throw new ResourceNotFoundError("No user with username found");
    }
    const valid = Password.compare(payload.password, user.password);

    if (!valid) {
      throw new ConflictError("Invalid Password and user detail combination");
    }

    const token = jwt.generate({
      userId: user._id,
      type: user.type,
    });

    return {
      token,
      user: user.getPublicFields(),
    };
  }

  async update(payload: any) {
    const existingUser = await this.findById(payload._id, undefined, {
      lean: true,
    });
    if (!existingUser) {
      throw new ResourceNotFoundError("User not found");
    }
    const newUser = await this.findOneAndUpdate(
      {
        _id: payload._id,
      },
      { ...payload },
      { new: true },
    );
    return newUser.getPublicFields();
  }

  async delete(payload: any) {
    const existingUser = await this.findById(payload._id, undefined, {
      lean: true,
    });
    if (!existingUser) {
      throw new ResourceNotFoundError("User not found");
    }
    const removeUser = await this.findOneAndDelete({
      _id: payload._id,
    });
    return removeUser.getPublicFields();
  }

  async get(payload: any = {}) {
    let existingUsers = [];
    if (payload.tenant) {
      const User = await this.User.override(payload.tenant);
      const findings = await User.find({});

      // existingUsers = await this.User.override(payload.tenant).find(payload);
      existingUsers = [];
    } else {
      existingUsers = await this.find(payload, undefined, { lean: true }, true);
    }
    return existingUsers;
  }

  async getOne(payload: any) {
    const existingUser = await this.findById(payload._id, undefined, {
      lean: true,
    });
    if (!existingUser) {
      throw new ResourceNotFoundError("User not found");
    }
    const getUser = await this.find({ _id: payload._id }, undefined, {
      lean: true,
    });
    return getUser;
  }
}

export default UserRepository;
