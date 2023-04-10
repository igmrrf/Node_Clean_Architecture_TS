import { faker } from "@faker-js/faker";

const MOCK_DATA = {
  newUserPayload: {
    _id: "507f1f77bcf86cd799439011",
    email: faker.internet.email(),
    username: "test122",
    discord: "test123",
    twitter: "test124",
    first_name: "Test",
    last_name: "Password",
    stripe_customer: {
      email: faker.internet.email(),
      name: "Testing Microphone",
    },
  },
};

export default MOCK_DATA;
