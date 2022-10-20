import { expect } from "chai";
import WaitList from "../WaitListEntity";

describe("********** WaitList entity ***********", () => {
  it("getPublicFields", () => {
    const waitList = new WaitList({
      email: "francis.igbiriki@gmail.com",
      discord: "igmrrf",
      twitter: "igmrrf",
      eth_address: "0xCBD6832Ebc203e49E2B771897067fce3c58575ac",
    });

    const publicFields = waitList.getPublicFields();
    expect(publicFields).to.be.an("object");
    expect(publicFields).to.have.property("email");
  });
});
