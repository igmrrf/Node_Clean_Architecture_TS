// eslint-disable-next-line import/no-extraneous-dependencies
import { faker } from "@faker-js/faker";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;
const MOCK_DATA = {
  userPayload: {
    _id: new ObjectId("627bfb540501185343cb822e"),
    email: faker.internet.email(),
    username: "test122",
    discord: "test123",
    twitter: "test124",
    first_name: "Test",
    last_name: "Password",
    account_verified: true,
    eth_address: "0xCBD6832Ebc203e49E2B771897067fce3c58575ac",
    coupons: [
      {
        code: "WAITLIST",
        campaign: "wailist",
        percent: 10,
        used: false,
      },
    ],
    stripe_customer: {
      email: faker.internet.email(),
      name: "Testing Microphone",
    },
  },
};

export default MOCK_DATA;
