import { makeInvoker } from "awilix-express";
import { Router } from "express";
import CheckAuth from "interfaces/rest/middlewares/checkAuthentication";
import MethodNotAllowedHandler from "interfaces/rest/middlewares/methodNotAllowed";
import validateError from "module/validator.module";
import UserController from "./UserController";
import UserValidation from "./UserValidation";

const router = Router();
const api = makeInvoker(UserController);
const Auth = makeInvoker(CheckAuth);
const { create, getOne, getAll, update, remove, login } = UserValidation;

/**
 * @api {post} /user Create New User
 * @apiGroup User
 * @apiName Create new User
 * @apiDescription creates a new user which automatically inherits the current date
 * @apiVersion 0.0.1
 * @apiSuccessExample Success Response:
* {
    "success": true,
    "status_code": 200,
    "message": "User added successfully",
    "data": {
        "username": "test122",
        "email": "francis.igbiriki@gmail.com",
        "discord": "test123",
        "twitter": "test123",
        "type": "customer",
        "_id": "6265a7c9c9e6c53edadfc19c",
        "created_at": "2022-04-24T19:40:57.641Z",
        "updated_at": "2022-04-24T19:40:57.641Z"
    },
    "links": []
* }
 */

/**
 * @api {patch} /user/:id Update User 
 * @apiGroup User
 * @apiName Updates existing User
 * @apiDescription Updates User
 * @apiVersion 0.0.1 
 * @apiSuccessExample Success Response:
* {
    "success": true,
    "status_code": 200,
    "message": "User updated successfully",
    "data": {
        "username": "test122",
        "email": "francis.igbiriki@gmail.com",
        "discord": "test123",
        "twitter": "test123",
        "type": "customer",
        "_id": "6265a7c9c9e6c53edadfc19c",
        "created_at": "2022-04-24T19:40:57.641Z",
        "updated_at": "2022-04-24T19:40:57.641Z"
    },
    "links": []
* }
 */

/**
 * @api {delete} /user/:id Delete User
 * @apiGroup User
 * @apiName Delete User
 * @apiDescription Deletes a single User
 * @apiVersion 0.0.1
 * @apiParam {:id} Id - User Id
 * @apiSuccessExample Success Response:
* {
    "success": true,
    "status_code": 200,
    "message": "User deleted successfully",
    "data": {
        "username": "test122",
        "email": "francis.igbiriki@gmail.com",
        "discord": "test123",
        "twitter": "test123",
        "type": "customer",
        "_id": "6265a7c9c9e6c53edadfc19c",
        "created_at": "2022-04-24T19:40:57.641Z",
        "updated_at": "2022-04-24T19:40:57.641Z"
    },
    "links": []
* }
 */

/**
 * @api {get} /user All User Collection Data
 * @apiGroup User
 * @apiName Get User(s)
 * @apiDescription Gets all user
 * @apiVersion 0.0.1
 * @apiSuccessExample Success Response:
* {
    "success": true,
    "status_code": 200,
    "message": "Users fetched successfully",
    "data": [{
        "username": "test122",
        "email": "francis.igbiriki@gmail.com",
        "discord": "test123",
        "twitter": "test123",
        "type": "customer",
        "_id": "6265a7c9c9e6c53edadfc19c",
        "created_at": "2022-04-24T19:40:57.641Z",
        "updated_at": "2022-04-24T19:40:57.641Z"
    }],
    "links": []
* }
 */

/**
 * @api {get} /user/:id Get User
 * @apiGroup User
 * @apiName  Get User
 * @apiDescription Get a single User with full populated information
 * @apiVersion 0.0.1
 * @apiParam {:id} Id - User Id
 * @apiSuccessExample Success Response:
* {
    "success": true,
    "status_code": 200,
    "message": "User fetched successfully",
    "data": {
        "username": "test122",
        "email": "francis.igbiriki@gmail.com",
        "discord": "test123",
        "twitter": "test123",
        "type": "customer",
        "_id": "6265a7c9c9e6c53edadfc19c",
        "created_at": "2022-04-24T19:40:57.641Z",
        "updated_at": "2022-04-24T19:40:57.641Z"
    },
    "links": []
* }
 */

router
  .route("/")
  .get(Auth("isStaff"), getAll, validateError, api("getUsers"))
  .post(Auth("allowAny"), create, validateError, api("createUser"))
  .all(MethodNotAllowedHandler);

router.route("/auth").post(Auth("allowAny"), login, validateError, api("login")).all(MethodNotAllowedHandler);

router
  .route("/:id")
  .delete(Auth("isStaff"), remove, validateError, api("deleteUser"))
  .get(Auth("isLoggedIn"), getOne, validateError, api("getUser"))
  .patch(Auth("isLoggedIn"), update, validateError, api("updateUser"))
  .all(MethodNotAllowedHandler);

export default router;
