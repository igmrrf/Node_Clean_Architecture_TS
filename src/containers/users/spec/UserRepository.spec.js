import dbHandler from "helpers/testConfig";
import models from "containers/models";
import { expect } from "chai";
import UserRepository from "../UserRepository";
import MOCK_DATA from "./MOCK_DATA";

const { newUserPayload } = MOCK_DATA;

describe("********** UserRepository **********", () => {
  const dbModels = {
    models,
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

  it("creates a User", async () => {
    const newUser = new UserRepository(dbModels);
    newUser.currentUser = newUserPayload;
    const createdUser = await newUser.create(newUserPayload);
    expect(createdUser).to.be.an("object");
    expect(createdUser).to.haveOwnProperty("_id");
  });

  it("updates a User", async () => {
    const newUser = new UserRepository(dbModels);
    newUser.currentUser = newUserPayload;
    const createdUser = await newUser.create(newUserPayload);
    newUserPayload._id = createdUser._id;
    const updatedUser = await newUser.update(newUserPayload);
    expect(updatedUser).to.be.an("object");
    expect(updatedUser).to.haveOwnProperty("_id");
  });

  it("deletes a User", async () => {
    const newUser = new UserRepository(dbModels);
    newUser.currentUser = newUserPayload;
    const createdUser = await newUser.create(newUserPayload);
    newUserPayload._id = createdUser._id;
    const deleteUser = await newUser.delete(newUserPayload);
    expect(deleteUser).to.be.an("object");
    expect(deleteUser).to.haveOwnProperty("_id");
  });

  it("Get all User(s)", async () => {
    const newUser = new UserRepository(dbModels);
    const getUsers = await newUser.get();
    getUsers.forEach((element) => {
      expect(element).to.be.an("object");
      expect(element).to.haveOwnProperty("_id");
    });
  });

  it("Get one User", async () => {
    const newUser = new UserRepository(dbModels);
    newUser.currentUser = newUserPayload;
    const createdUser = await newUser.create(newUserPayload);
    newUserPayload._id = createdUser._id;
    const getUser = await newUser.getOne(newUserPayload);
    expect(getUser).to.be.an("object");
    expect(getUser).to.haveOwnProperty("_id");
  });
});
