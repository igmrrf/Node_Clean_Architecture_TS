import { expect } from "chai";
import Todo from "../TodoEntity";

describe("********** Todo entity ***********", () => {
  it("getPublicFields", () => {
    const todo = new Todo({
      title: "value",
      description: "another value",
    });

    const publicFields = todo.getPublicFields();
    expect(publicFields).to.be.an("object");
    expect(publicFields).to.have.property("_id");
  });
});
