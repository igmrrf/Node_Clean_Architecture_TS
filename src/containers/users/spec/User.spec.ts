import { expect } from "chai";
import User from "../UserEntity";

describe("********** User entity ***********", () => {
  it("getPublicFields", () => {
    const user = new User({
      username: "Lazy",
    });

    const publicFields = user.getPublicFields();
    expect(publicFields).to.be.an("object");
    expect(publicFields).to.have.property("_id");
  });
});
