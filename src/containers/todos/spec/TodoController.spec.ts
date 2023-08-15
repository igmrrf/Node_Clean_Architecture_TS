/* eslint-disable no-underscore-dangle */
import CreateTodo from "app/todos/CreateTodo";
import DeleteTodo from "app/todos/DeleteTodo";
import GetTodo from "app/todos/GetTodo";
import GetTodos from "app/todos/GetTodos";
import UpdateTodo from "app/todos/UpdateTodo";
import { expect } from "chai";
import dbHandler from "helpers/testConfig";
import ResponseManager from "interfaces/rest/response/ResponseBuilder";
import httpMock from "node-mocks-http";
import TodoController from "../TodoController";
import TodoModel from "../TodoModel";
import TodoRepository from "../TodoRepository";
import { notificationQueue } from "./../../../base/queue/index";
import MOCK_DATA from "./MOCK_DATA";

const { todoPayload, userPayload } = MOCK_DATA;

describe("********** TodoController **********", () => {
  const classInput = {
    models: { Todo: { default: TodoModel } },
    currentUser: userPayload,
    queues: { notificationQueue },
  };
  const todoRepository = { todoRepository: new TodoRepository(classInput) };

  const construct = {
    responseBuilder: new ResponseManager(),
    createTodo: new CreateTodo(todoRepository),
    updateTodo: new UpdateTodo(todoRepository),
    deleteTodo: new DeleteTodo(todoRepository),
    getTodo: new GetTodo(todoRepository),
    getTodos: new GetTodos(todoRepository),
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

  it("Get All Todo(s)", async () => {
    const newTodo = new TodoController(construct);
    const req = httpMock.createRequest();
    const res = httpMock.createResponse();
    const getTodos = await newTodo.getTodos(req, res);
    const data = JSON.parse(getTodos._getData());
    expect(data.success).to.equal(true);
    expect(data.data).to.have.lengthOf(0);
    expect(getTodos.statusCode).to.equal(200);
  });

  it("Creates a Todo", async () => {
    const newTodo = new TodoController(construct);
    const req = httpMock.createRequest({ body: todoPayload });
    const res = httpMock.createResponse();
    const getTodos = await newTodo.createTodo(req, res);
    const data = JSON.parse(getTodos._getData());
    expect(data.success).to.equal(true);
    expect(data.data).to.haveOwnProperty("_id");
    expect(data.status_code).to.equal(200);
  });
});
