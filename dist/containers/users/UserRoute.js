"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
var tslib_1 = require("tslib");
var awilix_express_1 = require("awilix-express");
var express_1 = require("express");
var checkAuthentication_1 = tslib_1.__importDefault(
  require("../../interfaces/rest/middlewares/checkAuthentication"),
);
var methodNotAllowed_1 = tslib_1.__importDefault(require("../../interfaces/rest/middlewares/methodNotAllowed"));
var validator_module_1 = tslib_1.__importDefault(require("../../modules/validator.module"));
var UserController_1 = tslib_1.__importDefault(require("./UserController"));
var UserValidation_1 = tslib_1.__importDefault(require("./UserValidation"));
var router = (0, express_1.Router)();
var api = (0, awilix_express_1.makeInvoker)(UserController_1.default);
var Auth = (0, awilix_express_1.makeInvoker)(checkAuthentication_1.default);
var create = UserValidation_1.default.create,
  getOne = UserValidation_1.default.getOne,
  getAll = UserValidation_1.default.getAll,
  update = UserValidation_1.default.update,
  remove = UserValidation_1.default.remove,
  login = UserValidation_1.default.login;
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
  .get(Auth("isStaff"), getAll, validator_module_1.default, api("getUsers"))
  .post(Auth("allowAny"), create, validator_module_1.default, api("createUser"))
  .all(methodNotAllowed_1.default);
router
  .route("/auth")
  .post(Auth("allowAny"), login, validator_module_1.default, api("login"))
  .all(methodNotAllowed_1.default);
router
  .route("/:id")
  .delete(Auth("isStaff"), remove, validator_module_1.default, api("deleteUser"))
  .get(Auth("isLoggedIn"), getOne, validator_module_1.default, api("getUser"))
  .patch(Auth("isLoggedIn"), update, validator_module_1.default, api("updateUser"))
  .all(methodNotAllowed_1.default);
exports.default = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInRzbGliXzEiLCJyZXF1aXJlIiwiYXdpbGl4X2V4cHJlc3NfMSIsImV4cHJlc3NfMSIsImNoZWNrQXV0aGVudGljYXRpb25fMSIsIl9faW1wb3J0RGVmYXVsdCIsIm1ldGhvZE5vdEFsbG93ZWRfMSIsInZhbGlkYXRvcl9tb2R1bGVfMSIsIlVzZXJDb250cm9sbGVyXzEiLCJVc2VyVmFsaWRhdGlvbl8xIiwicm91dGVyIiwiUm91dGVyIiwiYXBpIiwibWFrZUludm9rZXIiLCJkZWZhdWx0IiwiQXV0aCIsImNyZWF0ZSIsImdldE9uZSIsImdldEFsbCIsInVwZGF0ZSIsInJlbW92ZSIsImxvZ2luIiwicm91dGUiLCJnZXQiLCJwb3N0IiwiYWxsIiwiZGVsZXRlIiwicGF0Y2giXSwic291cmNlcyI6WyIuLi8uLi8uLi90eXBlZC9jb250YWluZXJzL3VzZXJzL1VzZXJSb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIGF3aWxpeF9leHByZXNzXzEgPSByZXF1aXJlKFwiYXdpbGl4LWV4cHJlc3NcIik7XG52YXIgZXhwcmVzc18xID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG52YXIgY2hlY2tBdXRoZW50aWNhdGlvbl8xID0gdHNsaWJfMS5fX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImludGVyZmFjZXMvcmVzdC9taWRkbGV3YXJlcy9jaGVja0F1dGhlbnRpY2F0aW9uXCIpKTtcbnZhciBtZXRob2ROb3RBbGxvd2VkXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaW50ZXJmYWNlcy9yZXN0L21pZGRsZXdhcmVzL21ldGhvZE5vdEFsbG93ZWRcIikpO1xudmFyIHZhbGlkYXRvcl9tb2R1bGVfMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJtb2R1bGVzL3ZhbGlkYXRvci5tb2R1bGVcIikpO1xudmFyIFVzZXJDb250cm9sbGVyXzEgPSB0c2xpYl8xLl9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Vc2VyQ29udHJvbGxlclwiKSk7XG52YXIgVXNlclZhbGlkYXRpb25fMSA9IHRzbGliXzEuX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1VzZXJWYWxpZGF0aW9uXCIpKTtcbnZhciByb3V0ZXIgPSAoMCwgZXhwcmVzc18xLlJvdXRlcikoKTtcbnZhciBhcGkgPSAoMCwgYXdpbGl4X2V4cHJlc3NfMS5tYWtlSW52b2tlcikoVXNlckNvbnRyb2xsZXJfMS5kZWZhdWx0KTtcbnZhciBBdXRoID0gKDAsIGF3aWxpeF9leHByZXNzXzEubWFrZUludm9rZXIpKGNoZWNrQXV0aGVudGljYXRpb25fMS5kZWZhdWx0KTtcbnZhciBjcmVhdGUgPSBVc2VyVmFsaWRhdGlvbl8xLmRlZmF1bHQuY3JlYXRlLCBnZXRPbmUgPSBVc2VyVmFsaWRhdGlvbl8xLmRlZmF1bHQuZ2V0T25lLCBnZXRBbGwgPSBVc2VyVmFsaWRhdGlvbl8xLmRlZmF1bHQuZ2V0QWxsLCB1cGRhdGUgPSBVc2VyVmFsaWRhdGlvbl8xLmRlZmF1bHQudXBkYXRlLCByZW1vdmUgPSBVc2VyVmFsaWRhdGlvbl8xLmRlZmF1bHQucmVtb3ZlLCBsb2dpbiA9IFVzZXJWYWxpZGF0aW9uXzEuZGVmYXVsdC5sb2dpbjtcbi8qKlxuICogQGFwaSB7cG9zdH0gL3VzZXIgQ3JlYXRlIE5ldyBVc2VyXG4gKiBAYXBpR3JvdXAgVXNlclxuICogQGFwaU5hbWUgQ3JlYXRlIG5ldyBVc2VyXG4gKiBAYXBpRGVzY3JpcHRpb24gY3JlYXRlcyBhIG5ldyB1c2VyIHdoaWNoIGF1dG9tYXRpY2FsbHkgaW5oZXJpdHMgdGhlIGN1cnJlbnQgZGF0ZVxuICogQGFwaVZlcnNpb24gMC4wLjFcbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzIFJlc3BvbnNlOlxuKiB7XG4gICAgXCJzdWNjZXNzXCI6IHRydWUsXG4gICAgXCJzdGF0dXNfY29kZVwiOiAyMDAsXG4gICAgXCJtZXNzYWdlXCI6IFwiVXNlciBhZGRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICBcImRhdGFcIjoge1xuICAgICAgICBcInVzZXJuYW1lXCI6IFwidGVzdDEyMlwiLFxuICAgICAgICBcImVtYWlsXCI6IFwiZnJhbmNpcy5pZ2JpcmlraUBnbWFpbC5jb21cIixcbiAgICAgICAgXCJkaXNjb3JkXCI6IFwidGVzdDEyM1wiLFxuICAgICAgICBcInR3aXR0ZXJcIjogXCJ0ZXN0MTIzXCIsXG4gICAgICAgIFwidHlwZVwiOiBcImN1c3RvbWVyXCIsXG4gICAgICAgIFwiX2lkXCI6IFwiNjI2NWE3YzljOWU2YzUzZWRhZGZjMTljXCIsXG4gICAgICAgIFwiY3JlYXRlZF9hdFwiOiBcIjIwMjItMDQtMjRUMTk6NDA6NTcuNjQxWlwiLFxuICAgICAgICBcInVwZGF0ZWRfYXRcIjogXCIyMDIyLTA0LTI0VDE5OjQwOjU3LjY0MVpcIlxuICAgIH0sXG4gICAgXCJsaW5rc1wiOiBbXVxuKiB9XG4gKi9cbi8qKlxuICogQGFwaSB7cGF0Y2h9IC91c2VyLzppZCBVcGRhdGUgVXNlclxuICogQGFwaUdyb3VwIFVzZXJcbiAqIEBhcGlOYW1lIFVwZGF0ZXMgZXhpc3RpbmcgVXNlclxuICogQGFwaURlc2NyaXB0aW9uIFVwZGF0ZXMgVXNlclxuICogQGFwaVZlcnNpb24gMC4wLjFcbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzIFJlc3BvbnNlOlxuKiB7XG4gICAgXCJzdWNjZXNzXCI6IHRydWUsXG4gICAgXCJzdGF0dXNfY29kZVwiOiAyMDAsXG4gICAgXCJtZXNzYWdlXCI6IFwiVXNlciB1cGRhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgIFwiZGF0YVwiOiB7XG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJ0ZXN0MTIyXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJmcmFuY2lzLmlnYmlyaWtpQGdtYWlsLmNvbVwiLFxuICAgICAgICBcImRpc2NvcmRcIjogXCJ0ZXN0MTIzXCIsXG4gICAgICAgIFwidHdpdHRlclwiOiBcInRlc3QxMjNcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiY3VzdG9tZXJcIixcbiAgICAgICAgXCJfaWRcIjogXCI2MjY1YTdjOWM5ZTZjNTNlZGFkZmMxOWNcIixcbiAgICAgICAgXCJjcmVhdGVkX2F0XCI6IFwiMjAyMi0wNC0yNFQxOTo0MDo1Ny42NDFaXCIsXG4gICAgICAgIFwidXBkYXRlZF9hdFwiOiBcIjIwMjItMDQtMjRUMTk6NDA6NTcuNjQxWlwiXG4gICAgfSxcbiAgICBcImxpbmtzXCI6IFtdXG4qIH1cbiAqL1xuLyoqXG4gKiBAYXBpIHtkZWxldGV9IC91c2VyLzppZCBEZWxldGUgVXNlclxuICogQGFwaUdyb3VwIFVzZXJcbiAqIEBhcGlOYW1lIERlbGV0ZSBVc2VyXG4gKiBAYXBpRGVzY3JpcHRpb24gRGVsZXRlcyBhIHNpbmdsZSBVc2VyXG4gKiBAYXBpVmVyc2lvbiAwLjAuMVxuICogQGFwaVBhcmFtIHs6aWR9IElkIC0gVXNlciBJZFxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MgUmVzcG9uc2U6XG4qIHtcbiAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcbiAgICBcInN0YXR1c19jb2RlXCI6IDIwMCxcbiAgICBcIm1lc3NhZ2VcIjogXCJVc2VyIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgXCJkYXRhXCI6IHtcbiAgICAgICAgXCJ1c2VybmFtZVwiOiBcInRlc3QxMjJcIixcbiAgICAgICAgXCJlbWFpbFwiOiBcImZyYW5jaXMuaWdiaXJpa2lAZ21haWwuY29tXCIsXG4gICAgICAgIFwiZGlzY29yZFwiOiBcInRlc3QxMjNcIixcbiAgICAgICAgXCJ0d2l0dGVyXCI6IFwidGVzdDEyM1wiLFxuICAgICAgICBcInR5cGVcIjogXCJjdXN0b21lclwiLFxuICAgICAgICBcIl9pZFwiOiBcIjYyNjVhN2M5YzllNmM1M2VkYWRmYzE5Y1wiLFxuICAgICAgICBcImNyZWF0ZWRfYXRcIjogXCIyMDIyLTA0LTI0VDE5OjQwOjU3LjY0MVpcIixcbiAgICAgICAgXCJ1cGRhdGVkX2F0XCI6IFwiMjAyMi0wNC0yNFQxOTo0MDo1Ny42NDFaXCJcbiAgICB9LFxuICAgIFwibGlua3NcIjogW11cbiogfVxuICovXG4vKipcbiAqIEBhcGkge2dldH0gL3VzZXIgQWxsIFVzZXIgQ29sbGVjdGlvbiBEYXRhXG4gKiBAYXBpR3JvdXAgVXNlclxuICogQGFwaU5hbWUgR2V0IFVzZXIocylcbiAqIEBhcGlEZXNjcmlwdGlvbiBHZXRzIGFsbCB1c2VyXG4gKiBAYXBpVmVyc2lvbiAwLjAuMVxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MgUmVzcG9uc2U6XG4qIHtcbiAgICBcInN1Y2Nlc3NcIjogdHJ1ZSxcbiAgICBcInN0YXR1c19jb2RlXCI6IDIwMCxcbiAgICBcIm1lc3NhZ2VcIjogXCJVc2VycyBmZXRjaGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgIFwiZGF0YVwiOiBbe1xuICAgICAgICBcInVzZXJuYW1lXCI6IFwidGVzdDEyMlwiLFxuICAgICAgICBcImVtYWlsXCI6IFwiZnJhbmNpcy5pZ2JpcmlraUBnbWFpbC5jb21cIixcbiAgICAgICAgXCJkaXNjb3JkXCI6IFwidGVzdDEyM1wiLFxuICAgICAgICBcInR3aXR0ZXJcIjogXCJ0ZXN0MTIzXCIsXG4gICAgICAgIFwidHlwZVwiOiBcImN1c3RvbWVyXCIsXG4gICAgICAgIFwiX2lkXCI6IFwiNjI2NWE3YzljOWU2YzUzZWRhZGZjMTljXCIsXG4gICAgICAgIFwiY3JlYXRlZF9hdFwiOiBcIjIwMjItMDQtMjRUMTk6NDA6NTcuNjQxWlwiLFxuICAgICAgICBcInVwZGF0ZWRfYXRcIjogXCIyMDIyLTA0LTI0VDE5OjQwOjU3LjY0MVpcIlxuICAgIH1dLFxuICAgIFwibGlua3NcIjogW11cbiogfVxuICovXG4vKipcbiAqIEBhcGkge2dldH0gL3VzZXIvOmlkIEdldCBVc2VyXG4gKiBAYXBpR3JvdXAgVXNlclxuICogQGFwaU5hbWUgIEdldCBVc2VyXG4gKiBAYXBpRGVzY3JpcHRpb24gR2V0IGEgc2luZ2xlIFVzZXIgd2l0aCBmdWxsIHBvcHVsYXRlZCBpbmZvcm1hdGlvblxuICogQGFwaVZlcnNpb24gMC4wLjFcbiAqIEBhcGlQYXJhbSB7OmlkfSBJZCAtIFVzZXIgSWRcbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzIFJlc3BvbnNlOlxuKiB7XG4gICAgXCJzdWNjZXNzXCI6IHRydWUsXG4gICAgXCJzdGF0dXNfY29kZVwiOiAyMDAsXG4gICAgXCJtZXNzYWdlXCI6IFwiVXNlciBmZXRjaGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgIFwiZGF0YVwiOiB7XG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJ0ZXN0MTIyXCIsXG4gICAgICAgIFwiZW1haWxcIjogXCJmcmFuY2lzLmlnYmlyaWtpQGdtYWlsLmNvbVwiLFxuICAgICAgICBcImRpc2NvcmRcIjogXCJ0ZXN0MTIzXCIsXG4gICAgICAgIFwidHdpdHRlclwiOiBcInRlc3QxMjNcIixcbiAgICAgICAgXCJ0eXBlXCI6IFwiY3VzdG9tZXJcIixcbiAgICAgICAgXCJfaWRcIjogXCI2MjY1YTdjOWM5ZTZjNTNlZGFkZmMxOWNcIixcbiAgICAgICAgXCJjcmVhdGVkX2F0XCI6IFwiMjAyMi0wNC0yNFQxOTo0MDo1Ny42NDFaXCIsXG4gICAgICAgIFwidXBkYXRlZF9hdFwiOiBcIjIwMjItMDQtMjRUMTk6NDA6NTcuNjQxWlwiXG4gICAgfSxcbiAgICBcImxpbmtzXCI6IFtdXG4qIH1cbiAqL1xucm91dGVyXG4gICAgLnJvdXRlKFwiL1wiKVxuICAgIC5nZXQoQXV0aChcImlzU3RhZmZcIiksIGdldEFsbCwgdmFsaWRhdG9yX21vZHVsZV8xLmRlZmF1bHQsIGFwaShcImdldFVzZXJzXCIpKVxuICAgIC5wb3N0KEF1dGgoXCJhbGxvd0FueVwiKSwgY3JlYXRlLCB2YWxpZGF0b3JfbW9kdWxlXzEuZGVmYXVsdCwgYXBpKFwiY3JlYXRlVXNlclwiKSlcbiAgICAuYWxsKG1ldGhvZE5vdEFsbG93ZWRfMS5kZWZhdWx0KTtcbnJvdXRlci5yb3V0ZShcIi9hdXRoXCIpLnBvc3QoQXV0aChcImFsbG93QW55XCIpLCBsb2dpbiwgdmFsaWRhdG9yX21vZHVsZV8xLmRlZmF1bHQsIGFwaShcImxvZ2luXCIpKS5hbGwobWV0aG9kTm90QWxsb3dlZF8xLmRlZmF1bHQpO1xucm91dGVyXG4gICAgLnJvdXRlKFwiLzppZFwiKVxuICAgIC5kZWxldGUoQXV0aChcImlzU3RhZmZcIiksIHJlbW92ZSwgdmFsaWRhdG9yX21vZHVsZV8xLmRlZmF1bHQsIGFwaShcImRlbGV0ZVVzZXJcIikpXG4gICAgLmdldChBdXRoKFwiaXNMb2dnZWRJblwiKSwgZ2V0T25lLCB2YWxpZGF0b3JfbW9kdWxlXzEuZGVmYXVsdCwgYXBpKFwiZ2V0VXNlclwiKSlcbiAgICAucGF0Y2goQXV0aChcImlzTG9nZ2VkSW5cIiksIHVwZGF0ZSwgdmFsaWRhdG9yX21vZHVsZV8xLmRlZmF1bHQsIGFwaShcInVwZGF0ZVVzZXJcIikpXG4gICAgLmFsbChtZXRob2ROb3RBbGxvd2VkXzEuZGVmYXVsdCk7XG5leHBvcnRzLmRlZmF1bHQgPSByb3V0ZXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBQ1pBLE1BQU0sQ0FBQ0MsY0FBYyxDQUFDQyxPQUFPLEVBQUUsWUFBWSxFQUFFO0VBQUVDLEtBQUssRUFBRTtBQUFLLENBQUMsQ0FBQztBQUM3RCxJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDOUIsSUFBSUMsZ0JBQWdCLEdBQUdELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztBQUNoRCxJQUFJRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDbEMsSUFBSUcscUJBQXFCLEdBQUdKLE9BQU8sQ0FBQ0ssZUFBZSxDQUFDSixPQUFPLHlEQUFtRCxDQUFDO0FBQy9HLElBQUlLLGtCQUFrQixHQUFHTixPQUFP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
