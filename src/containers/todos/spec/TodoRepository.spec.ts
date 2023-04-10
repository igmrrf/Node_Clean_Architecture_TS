import { expect } from "chai";
import models from "containers/models";
import dbHandler from "helpers/testConfig";
import TodoRepository from "../TodoRepository";
import { ITodo } from "../TodoTypes";
import MOCK_DATA from "./MOCK_DATA";

const { todoPayload, userPayload } = MOCK_DATA;

describe("********** TodoRepository **********", () => {
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

  it("creates a Todo", async () => {
    const newTodo = new TodoRepository(dbModels);
    const createdTodo = await newTodo.create(todoPayload);
    expect(createdTodo).to.be.an("object");
    expect(createdTodo).to.haveOwnProperty("_id");
  });

  it("updates a Todo", async () => {
    const newTodo = new TodoRepository(dbModels);
    const createdTodo = await newTodo.create(todoPayload);
    todoPayload._id = createdTodo._id;
    const updatedTodo = await newTodo.update(todoPayload);
    expect(updatedTodo).to.be.an("object");
    expect(updatedTodo).to.haveOwnProperty("_id");
  });

  it("deletes a Todo", async () => {
    const newTodo = new TodoRepository(dbModels);
    const createdTodo = await newTodo.create(todoPayload);
    todoPayload._id = createdTodo._id;
    const deleteTodo = await newTodo.delete(todoPayload);
    expect(deleteTodo).to.be.an("object");
    expect(deleteTodo).to.haveOwnProperty("_id");
  });

  it("Get all Todo(s)", async () => {
    const newTodo = new TodoRepository(dbModels);
    const payload = {};
    const getTodos = await newTodo.get(payload);
    getTodos.forEach((element: ITodo) => {
      expect(element).to.be.an("object");
      expect(element).to.haveOwnProperty("_id");
    });
  });

  it("Get one Todo", async () => {
    const newTodo = new TodoRepository(dbModels);
    const createdTodo = await newTodo.create(todoPayload);
    todoPayload._id = createdTodo._id;
    const getTodo = await newTodo.getOne(todoPayload);
    expect(getTodo).to.be.an("object");
    expect(getTodo).to.haveOwnProperty("_id");
  });
});
