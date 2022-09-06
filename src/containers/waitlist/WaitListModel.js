import mongoose from "mongoose";
import WaitList from "containers/waitlist/WaitListEntity";

const waitlistSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    discord: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    twitter: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    eth_address: {
      type: String,
      required: true,
      // unique: true,
    },

    type: {
      type: String,
      enum: ["user", "creator"],
      required: false,
      default: "user",
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

waitlistSchema.loadClass(WaitList);

export default mongoose.model("WaitList", waitlistSchema);
