module.exports = (name) => `import { expect } from "chai";
import ${name} from "../${name}Entity";

describe("********** ${name} entity ***********", () => {
  it("getPublicFields", () => {
    const ${name.toLowerCase()} = new ${name}({
      key: "value",
      anotherKey: "another value",
    });

    const publicFields = ${name.toLowerCase()}.getPublicFields();
    expect(publicFields).to.be.an("object");
    expect(publicFields).to.have.property("_id");
  });
});
`;
