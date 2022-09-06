import { faker } from "@faker-js/faker";

const MOCK_DATA = {
  newUserPayload: {
    eth_address: "0xCBD6832Ebc203e49E2B771897067fce3c58575ac",
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
