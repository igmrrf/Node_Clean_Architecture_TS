import { Router } from "express";
import { makeInvoker } from "awilix-express";
import validateError from "modules/validator.module";
import CheckAuth from "interfaces/rest/middlewares/checkAuthentication";
import MethodNotAllowedHandler from "interfaces/rest/middlewares/methodNotAllowed";
import TodoController from "./TodoController";
import TodoValidation from "./TodoValidation";

const router = Router();
const api = makeInvoker(TodoController);
const Auth = makeInvoker(CheckAuth);
const validate = makeInvoker(TodoValidation);

/**
 * @api {post} /todo Create New Todo
 * @apiGroup Todo
 * @apiName Create new Todo
 * @apiDescription creates a new todo which automatically inherits the current date
 * @apiVersion 0.0.1
 * @apiSuccessExample Success Response:
 * {
 *
 * }
 */

/**
 * @api {patch} /todo/:id Update Todo 
 * @apiGroup Todo
 * @apiName Updates existing Todo
 * @apiDescription Updates Todo
 * @apiVersion 0.0.1 
 * @apiSuccessExample Success Response:
 * {
 * 
 * }

 */

/**
 * @api {delete} /todo/:id Delete Todo
 * @apiGroup Todo
 * @apiName Delete Todo
 * @apiDescription Deletes a single Todo
 * @apiVersion 0.0.1
 * @apiParam {:id} Id - Todo Id
 * @apiSuccessExample Success Response:
 * {
 *
 * }
 */

/**
 * @api {get} /todo All Todo Collection Data
 * @apiGroup Todo
 * @apiName Get Todo(s)
 * @apiDescription Gets all todo
 * @apiVersion 0.0.1
 * @apiSuccessExample Success Response:
 * {
 *
 * }
 */

/**
 * @api {get} /todo/:id Get Todo
 * @apiGroup Todo
 * @apiName  Get Todo
 * @apiDescription Get a single Todo with full populated information
 * @apiVersion 0.0.1
 * @apiParam {:id} Id - Todo Id
 * @apiSuccessExample Success Response:
 * {
 *
 * }
 */

router
  .route("/")
  .get(Auth("isLoggedIn"), api("getTodos"))
  .post(validate("create"), validateError, Auth("isLoggedIn"), api("createTodo"))
  .all(MethodNotAllowedHandler);

router
  .route("/:id")
  .delete(Auth("isLoggedIn"), api("deleteTodo"))
  .get(Auth("isLoggedIn"), api("getTodo"))
  .patch(Auth("isLoggedIn"), api("updateTodo"))
  .all(MethodNotAllowedHandler);

export default router;
