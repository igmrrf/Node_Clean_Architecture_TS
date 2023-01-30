/* eslint-disable no-param-reassign */
import PaymentService from "base/payments/Stripe";
import BaseRepository from "base/repositories";
import config from "config";
import jwt from "helpers/jwt";
import Password from "helpers/password";
import ConflictError from "interfaces/rest/errors/ConflictError";
import ResourceNotFoundError from "interfaces/rest/errors/ResourceNotFoundError";
import { random } from "lodash";

class UserRepository extends BaseRepository {
  constructor({ models: { User }, currentUser }) {
    super({ Model: User });
    this.User = User;
    this.currentUser = currentUser;
  }

  async create(payload) {
    const { email, discord, twitter } = payload;

    // check for existing user by and email

    // confirm the email isn't used on another account
    const existingUserName = await this.find(
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
        coupons: payload.coupons,
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
      coupons: payload.coupons,
    });

    const referred = await this.Refer.findOne({ email }, undefined, { lean: true });

    let referrer;

    if (referred) {
      referrer = await this.findById(referred.referred_by);
    }

    if (referrer) {
      await this.findOneAndUpdate(
        { email: referrer.email, _id: referrer._id },
        { $push: { referrals: newUser._id } },
        { new: true },
      );
    }
    const referredCoupon = { code: "FREE_REFER", percent: 100, campaign: "REFERRAL", used: false };
    await this.findOneAndUpdate({ _id: newUser._id }, { $push: { coupons: referredCoupon } });

    return newUser.getPublicFields();
  }

  async login(payload) {
    const user = await this.find({ username: payload.username }, undefined, { lean: false }, false);

    if (!user) {
      throw new ResourceNotFoundError("No user with username found");
    }
    const valid = Password.compare(payload.password, user.password);

    if (!valid) {
      return new ConflictError("Invalid Password and user detail combination");
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

  async update(payload) {
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

  async delete(payload) {
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

  async get() {
    const existingUsers = await this.find({}, undefined, { lean: true }, true);
    return existingUsers;
  }

  async getOne(payload) {
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
