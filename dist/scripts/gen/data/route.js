"use strict";

module.exports = function (name) {
  return 'import { Router } from "express";\nimport { makeInvoker } from "awilix-express";\nimport validateError from "modules/validator.module";\nimport CheckAuth from "interfaces/rest/middlewares/checkAuthentication";\nimport MethodNotAllowedHandler from "interfaces/rest/middlewares/methodNotAllowed";\nimport '
    .concat(name, 'Controller from "./')
    .concat(name, 'Controller";\nimport ')
    .concat(name, 'Validation from "./')
    .concat(name, 'Validation";\n\nconst router = Router();\nconst api = makeInvoker(')
    .concat(name, "Controller);\nconst Auth = makeInvoker(CheckAuth);\nconst validate = makeInvoker(")
    .concat(name, "Validation);\n\n/**\n * @api {post} /")
    .concat(name.toLowerCase(), " Create New ")
    .concat(name, "\n * @apiGroup ")
    .concat(name, "\n * @apiName Create new ")
    .concat(name, "\n * @apiDescription creates a new ")
    .concat(
      name.toLowerCase(),
      " which automatically inherits the current date\n * @apiVersion 0.0.1\n * @apiSuccessExample Success Response:\n * {\n * \n * }\n */\n\n/**\n * @api {patch} /",
    )
    .concat(name.toLowerCase(), "/:id Update ")
    .concat(name, " \n * @apiGroup ")
    .concat(name, "\n * @apiName Updates existing ")
    .concat(name, "\n * @apiDescription Updates ")
    .concat(
      name,
      "\n * @apiVersion 0.0.1 \n * @apiSuccessExample Success Response:\n * {\n * \n * }\n\n */\n\n/**\n * @api {delete} /",
    )
    .concat(name.toLowerCase(), "/:id Delete ")
    .concat(name, "\n * @apiGroup ")
    .concat(name, "\n * @apiName Delete ")
    .concat(name, "\n * @apiDescription Deletes a single ")
    .concat(name, "\n * @apiVersion 0.0.1\n * @apiParam {:id} Id - ")
    .concat(name, " Id\n * @apiSuccessExample Success Response:\n * {\n * \n * }\n */\n\n/**\n * @api {get} /")
    .concat(name.toLowerCase(), " All ")
    .concat(name, " Collection Data\n * @apiGroup ")
    .concat(name, "\n * @apiName Get ")
    .concat(name, "(s)\n * @apiDescription Gets all ")
    .concat(
      name.toLowerCase(),
      "\n * @apiVersion 0.0.1\n * @apiSuccessExample Success Response:\n * {\n * \n * }\n */\n\n/**\n * @api {get} /",
    )
    .concat(name.toLowerCase(), "/:id Get ")
    .concat(name, "\n * @apiGroup ")
    .concat(name, "\n * @apiName  Get ")
    .concat(name, "\n * @apiDescription Get a single ")
    .concat(name, " with full populated information\n * @apiVersion 0.0.1\n * @apiParam {:id} Id - ")
    .concat(
      name,
      ' Id\n * @apiSuccessExample Success Response:\n * {\n * \n * }\n */\n\nrouter\n  .route("/")\n  .get(Auth("isLoggedIn"), api("get',
    )
    .concat(name, 's"))\n  .post(validate("create"), validateError, Auth("isLoggedIn"), api("create')
    .concat(
      name,
      '"))\n  .all(MethodNotAllowedHandler);\n\nrouter\n  .route("/:id")\n  .delete(Auth("isLoggedIn"), api("delete',
    )
    .concat(name, '"))\n  .get(Auth("isLoggedIn"), api("get')
    .concat(name, '"))\n  .patch(Auth("isLoggedIn"), api("update')
    .concat(name, '"))\n  .all(MethodNotAllowedHandler);\n\nexport default router;\n');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImNvbmNhdCIsInRvTG93ZXJDYXNlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdHlwZWQvc2NyaXB0cy9nZW4vZGF0YS9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcXFwiZXhwcmVzc1xcXCI7XFxuaW1wb3J0IHsgbWFrZUludm9rZXIgfSBmcm9tIFxcXCJhd2lsaXgtZXhwcmVzc1xcXCI7XFxuaW1wb3J0IHZhbGlkYXRlRXJyb3IgZnJvbSBcXFwibW9kdWxlcy92YWxpZGF0b3IubW9kdWxlXFxcIjtcXG5pbXBvcnQgQ2hlY2tBdXRoIGZyb20gXFxcImludGVyZmFjZXMvcmVzdC9taWRkbGV3YXJlcy9jaGVja0F1dGhlbnRpY2F0aW9uXFxcIjtcXG5pbXBvcnQgTWV0aG9kTm90QWxsb3dlZEhhbmRsZXIgZnJvbSBcXFwiaW50ZXJmYWNlcy9yZXN0L21pZGRsZXdhcmVzL21ldGhvZE5vdEFsbG93ZWRcXFwiO1xcbmltcG9ydCBcIi5jb25jYXQobmFtZSwgXCJDb250cm9sbGVyIGZyb20gXFxcIi4vXCIpLmNvbmNhdChuYW1lLCBcIkNvbnRyb2xsZXJcXFwiO1xcbmltcG9ydCBcIikuY29uY2F0KG5hbWUsIFwiVmFsaWRhdGlvbiBmcm9tIFxcXCIuL1wiKS5jb25jYXQobmFtZSwgXCJWYWxpZGF0aW9uXFxcIjtcXG5cXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcXG5jb25zdCBhcGkgPSBtYWtlSW52b2tlcihcIikuY29uY2F0KG5hbWUsIFwiQ29udHJvbGxlcik7XFxuY29uc3QgQXV0aCA9IG1ha2VJbnZva2VyKENoZWNrQXV0aCk7XFxuY29uc3QgdmFsaWRhdGUgPSBtYWtlSW52b2tlcihcIikuY29uY2F0KG5hbWUsIFwiVmFsaWRhdGlvbik7XFxuXFxuLyoqXFxuICogQGFwaSB7cG9zdH0gL1wiKS5jb25jYXQobmFtZS50b0xvd2VyQ2FzZSgpLCBcIiBDcmVhdGUgTmV3IFwiKS5jb25jYXQobmFtZSwgXCJcXG4gKiBAYXBpR3JvdXAgXCIpLmNvbmNhdChuYW1lLCBcIlxcbiAqIEBhcGlOYW1lIENyZWF0ZSBuZXcgXCIpLmNvbmNhdChuYW1lLCBcIlxcbiAqIEBhcGlEZXNjcmlwdGlvbiBjcmVhdGVzIGEgbmV3IFwiKS5jb25jYXQobmFtZS50b0xvd2VyQ2FzZSgpLCBcIiB3aGljaCBhdXRvbWF0aWNhbGx5IGluaGVyaXRzIHRoZSBjdXJyZW50IGRhdGVcXG4gKiBAYXBpVmVyc2lvbiAwLjAuMVxcbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzIFJlc3BvbnNlOlxcbiAqIHtcXG4gKiBcXG4gKiB9XFxuICovXFxuXFxuLyoqXFxuICogQGFwaSB7cGF0Y2h9IC9cIikuY29uY2F0KG5hbWUudG9Mb3dlckNhc2UoKSwgXCIvOmlkIFVwZGF0ZSBcIikuY29uY2F0KG5hbWUsIFwiIFxcbiAqIEBhcGlHcm91cCBcIikuY29uY2F0KG5hbWUsIFwiXFxuICogQGFwaU5hbWUgVXBkYXRlcyBleGlzdGluZyBcIikuY29uY2F0KG5hbWUsIFwiXFxuICogQGFwaURlc2NyaXB0aW9uIFVwZGF0ZXMgXCIpLmNvbmNhdChuYW1lLCBcIlxcbiAqIEBhcGlWZXJzaW9uIDAuMC4xIFxcbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzIFJlc3BvbnNlOlxcbiAqIHtcXG4gKiBcXG4gKiB9XFxuXFxuICovXFxuXFxuLyoqXFxuICogQGFwaSB7ZGVsZXRlfSAvXCIpLmNvbmNhdChuYW1lLnRvTG93ZXJDYXNlKCksIFwiLzppZCBEZWxldGUgXCIpLmNvbmNhdChuYW1lLCBcIlxcbiAqIEBhcGlHcm91cCBcIikuY29uY2F0KG5hbWUsIFwiXFxuICogQGFwaU5hbWUgRGVsZXRlIFwiKS5jb25jYXQobmFtZSwgXCJcXG4gKiBAYXBpRGVzY3JpcHRpb24gRGVsZXRlcyBhIHNpbmdsZSBcIikuY29uY2F0KG5hbWUsIFwiXFxuICogQGFwaVZlcnNpb24gMC4wLjFcXG4gKiBAYXBpUGFyYW0gezppZH0gSWQgLSBcIikuY29uY2F0KG5hbWUsIFwiIElkXFxuICogQGFwaVN1Y2Nlc3NFeGFtcGxlIFN1Y2Nlc3MgUmVzcG9uc2U6XFxuICoge1xcbiAqIFxcbiAqIH1cXG4gKi9cXG5cXG4vKipcXG4gKiBAYXBpIHtnZXR9IC9cIikuY29uY2F0KG5hbWUudG9Mb3dlckNhc2UoKSwgXCIgQWxsIFwiKS5jb25jYXQobmFtZSwgXCIgQ29sbGVjdGlvbiBEYXRhXFxuICogQGFwaUdyb3VwIFwiKS5jb25jYXQobmFtZSwgXCJcXG4gKiBAYXBpTmFtZSBHZXQgXCIpLmNvbmNhdChuYW1lLCBcIihzKVxcbiAqIEBhcGlEZXNjcmlwdGlvbiBHZXRzIGFsbCBcIikuY29uY2F0KG5hbWUudG9Mb3dlckNhc2UoKSwgXCJcXG4gKiBAYXBpVmVyc2lvbiAwLjAuMVxcbiAqIEBhcGlTdWNjZXNzRXhhbXBsZSBTdWNjZXNzIFJlc3BvbnNlOlxcbiAqIHtcXG4gKiBcXG4gKiB9XFxuICovXFxuXFxuLyoqXFxuICogQGFwaSB7Z2V0fSAvXCIpLmNvbmNhdChuYW1lLnRvTG93ZXJDYXNlKCksIFwiLzppZCBHZXQgXCIpLmNvbmNhdChuYW1lLCBcIlxcbiAqIEBhcGlHcm91cCBcIikuY29uY2F0KG5hbWUsIFwiXFxuICogQGFwaU5hbWUgIEdldCBcIikuY29uY2F0KG5hbWUsIFwiXFxuICogQGFwaURlc2NyaXB0aW9uIEdldCBhIHNpbmdsZSBcIikuY29uY2F0KG5hbWUsIFwiIHdpdGggZnVsbCBwb3B1bGF0ZWQgaW5mb3JtYXRpb25cXG4gKiBAYXBpVmVyc2lvbiAwLjAuMVxcbiAqIEBhcGlQYXJhbSB7OmlkfSBJZCAtIFwiKS5jb25jYXQobmFtZSwgXCIgSWRcXG4gKiBAYXBpU3VjY2Vzc0V4YW1wbGUgU3VjY2VzcyBSZXNwb25zZTpcXG4gKiB7XFxuICogXFxuICogfVxcbiAqL1xcblxcbnJvdXRlclxcbiAgLnJvdXRlKFxcXCIvXFxcIilcXG4gIC5nZXQoQXV0aChcXFwiaXNMb2dnZWRJblxcXCIpLCBhcGkoXFxcImdldFwiKS5jb25jYXQobmFtZSwgXCJzXFxcIikpXFxuICAucG9zdCh2YWxpZGF0ZShcXFwiY3JlYXRlXFxcIiksIHZhbGlkYXRlRXJyb3IsIEF1dGgoXFxcImlzTG9nZ2VkSW5cXFwiKSwgYXBpKFxcXCJjcmVhdGVcIikuY29uY2F0KG5hbWUsIFwiXFxcIikpXFxuICAuYWxsKE1ldGhvZE5vdEFsbG93ZWRIYW5kbGVyKTtcXG5cXG5yb3V0ZXJcXG4gIC5yb3V0ZShcXFwiLzppZFxcXCIpXFxuICAuZGVsZXRlKEF1dGgoXFxcImlzTG9nZ2VkSW5cXFwiKSwgYXBpKFxcXCJkZWxldGVcIikuY29uY2F0KG5hbWUsIFwiXFxcIikpXFxuICAuZ2V0KEF1dGgoXFxcImlzTG9nZ2VkSW5cXFwiKSwgYXBpKFxcXCJnZXRcIikuY29uY2F0KG5hbWUsIFwiXFxcIikpXFxuICAucGF0Y2goQXV0aChcXFwiaXNMb2dnZWRJblxcXCIpLCBhcGkoXFxcInVwZGF0ZVwiKS5jb25jYXQobmFtZSwgXCJcXFwiKSlcXG4gIC5hbGwoTWV0aG9kTm90QWxsb3dlZEhhbmRsZXIpO1xcblxcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcXG5cIik7IH07XG4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBQ1pBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQVVDLElBQUksRUFBRTtFQUFFLE9BQU8sMlRBQTJULENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHdCQUF3QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHFFQUFxRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG1GQUFtRixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHVDQUF1QyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxXQUFXLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQ0QsTUFBTSxDQUFDRCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUsMkJBQTJCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUscUNBQXFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLENBQUNFLFdBQVcsRUFBRSxFQUFFLCtKQUErSixDQUFDLENBQUNELE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxXQUFXLEVBQUUsRUFBRSxjQUFjLENBQUMsQ0FBQ0QsTUFBTSxDQUFDRCxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUsaUNBQWlDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUsK0JBQStCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUscUhBQXFILENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLENBQUNFLFdBQVcsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDRCxNQUFNLENBQUNELElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksRUFBRSx1QkFBdUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksRUFBRSx3Q0FBd0MsQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksRUFBRSxrREFBa0QsQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksRUFBRSw0RkFBNEYsQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksQ0FBQ0UsV0FBVyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUNELE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGlDQUFpQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG9CQUFvQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG1DQUFtQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxXQUFXLEVBQUUsRUFBRSwrR0FBK0csQ0FBQyxDQUFDRCxNQUFNLENBQUNELElBQUksQ0FBQ0UsV0FBVyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUNELE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGlCQUFpQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHFCQUFxQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG9DQUFvQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGtGQUFrRixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHVJQUF1SSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHdGQUF3RixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG9IQUFvSCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLDhDQUE4QyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG1EQUFtRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG9FQUFvRSxDQUFDO0FBQUUsQ0FBQyJ9
