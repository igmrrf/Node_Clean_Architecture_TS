const RepositorySpecGenerator = (name: string) => `import { expect } from "chai";
import models from "containers/models";
import dbHandler from "helpers/testConfig";
import ${name}Repository from "../${name}Repository";
import { I${name} } from "../${name}Types";
import MOCK_DATA from "./MOCK_DATA";

const { ${name.toLowerCase()}Payload, userPayload } = MOCK_DATA;

describe("********** ${name}Repository **********", () => {
  const dbModels = {
    models,
    currentUser: userPayload,
  };
  /**
   * Connect to a new in-memory database before running any tests.
   */
  before(async () => dbHandler.connect());

  /**
   * Creates a subscription before every test
   */

  /**
   * Clear all test data after every test.
   */
  afterEach(async () => dbHandler.clearDatabase());

  /**
   * Remove and close the db and server.
   */
  after(async () => dbHandler.closeDatabase());

  it("creates a ${name}", async () => {
    const new${name} = new ${name}Repository(dbModels);
    const created${name} = await new${name}.create(${name.toLowerCase()}Payload);
    expect(created${name}).to.be.an("object");
    expect(created${name}).to.haveOwnProperty("_id");
  });

  it("updates a ${name}", async () => {
    const new${name} = new ${name}Repository(dbModels);
    const created${name} = await new${name}.create(${name.toLowerCase()}Payload);
    ${name.toLowerCase()}Payload._id = created${name}._id;
    const updated${name} = await new${name}.update(${name.toLowerCase()}Payload);
    expect(updated${name}).to.be.an("object");
    expect(updated${name}).to.haveOwnProperty("_id");
  });

  it("deletes a ${name}", async () => {
    const new${name} = new ${name}Repository(dbModels);
    const created${name} = await new${name}.create(${name.toLowerCase()}Payload);
    ${name.toLowerCase()}Payload._id = created${name}._id;
    const delete${name} = await new${name}.delete(${name.toLowerCase()}Payload);
    expect(delete${name}).to.be.an("object");
    expect(delete${name}).to.haveOwnProperty("_id");
  });

  it("Get all ${name}(s)", async () => {
    const new${name} = new ${name}Repository(dbModels);
    const get${name}s = await new${name}.getAll();
    get${name}s.forEach((element: I${name}) => {
      expect(element).to.be.an("object");
      expect(element).to.haveOwnProperty("_id");
    });
  });

  it("Get one ${name}", async () => {
    const new${name} = new ${name}Repository(dbModels);
    const created${name} = await new${name}.create(${name.toLowerCase()}Payload);
    ${name.toLowerCase()}Payload._id = created${name}._id;
    const get${name} = await new${name}.getOne(${name.toLowerCase()}Payload);
    expect(get${name}).to.be.an("object");
    expect(get${name}).to.haveOwnProperty("_id");
  });
});
`;

export default RepositorySpecGenerator;
