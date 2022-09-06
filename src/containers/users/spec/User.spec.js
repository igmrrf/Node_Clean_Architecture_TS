import faker from "@faker-js/faker";
import { expect } from "chai";
import User from "../UserEntity";

describe("********** User entity ***********", () => {
  it("getPublicFields", () => {
    const user = new User({
      eth_address: "0xCBD6832Ebc203e49E2B771897067fce3c58575ac",
      username: "igmrrf",
      email: faker.internet.email,
      discord: "igmrrf",
      twitter: "igmrrf",
      nft: "https://picsum.photos/200/300",
    });

    const publicFields = user.getPublicFields();
    expect(publicFields).to.be.an("object");
    expect(publicFields).to.have.property("_id");
  });
});
