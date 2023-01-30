import { faker } from "@faker-js/faker";
import { expect } from "chai";
import User from "../UserEntity";

describe("********** User entity ***********", () => {
  it("getPublicFields", () => {
    const user = new User({
      username: "igmrrf",
      email: faker.internet.email(),
      discord: "igmrrf",
      twitter: "igmrrf",
    });

    const publicFields = user.getPublicFields();
    expect(publicFields).to.be.an("object");
    expect(publicFields).to.have.property("_id");
  });
});
