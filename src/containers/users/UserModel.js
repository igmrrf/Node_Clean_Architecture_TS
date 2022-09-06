import mongoose from "mongoose";
import User from "./UserEntity";

const userSchema = new mongoose.Schema(
  {
    eth_address: {
      type: String,
      required: true,
      unique: true,
    },
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
    nft: {
      type: String,
    },
    referrals: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    coupons: [
      {
        code: {
          type: String,
          default: false,
        },
        percent: {
          type: Number,
          default: 0,
          min: 1,
          max: 10,
        },
        campaign: {
          type: String,
          default: "",
        },
        used: {
          type: Boolean,
          default: false,
        },
      },
    ],
    stripe_customer: Object,
    updated_by: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    created_by: {
      type: mongoose.Types.ObjectId,
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
      retainKeyOrder: true,
    },
    toJSON: {
      virtuals: true,
    },
  },
);

userSchema.loadClass(User);

export default mongoose.model("User", userSchema);
