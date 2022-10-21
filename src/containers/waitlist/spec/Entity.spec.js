import { expect } from "chai";
import WaitList from "../WaitListEntity";

describe("********** WaitList entity ***********", () => {
  it("getPublicFields", () => {
    const waitList = new WaitList({
      email: "francis.igbiriki@gmail.com",
      discord: "igmrrf",
      twitter: "igmrrf",
    });

    const publicFields = waitList.getPublicFields();
    expect(publicFields).to.be.an("object");
    expect(publicFields).to.have.property("email");
  });
});
