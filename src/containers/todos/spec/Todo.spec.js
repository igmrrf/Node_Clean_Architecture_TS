// import { expect } from "chai";
// import Todo from "../TodoEntity";

const { expect } = require("chai");
const Todo = require("../TodoEntity");

describe("********** Todo entity ***********", () => {
  it("getPublicFields", () => {
    const todo = new Todo({
      key: "value",
      anotherKey: "another value",
    });

    const publicFields = todo.getPublicFields();
    expect(publicFields).to.be.an("object");
    expect(publicFields).to.have.property("_id");
  });
});
