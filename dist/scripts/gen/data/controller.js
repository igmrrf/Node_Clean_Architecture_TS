"use strict";

module.exports = function (name) {
  return 'import BaseController from "interfaces/rest/controllers";\nimport { pick } from "lodash";\n\nclass '
    .concat(name, "Controller extends BaseController {\n  constructor({ create")
    .concat(name, ", update")
    .concat(name, ", delete")
    .concat(name, ", get")
    .concat(name, ", get")
    .concat(name, "s }) {\n    super();\n    this.create = create")
    .concat(name, ";\n    this.update = update")
    .concat(name, ";\n    this.delete = delete")
    .concat(name, ";\n    this.getOne = get")
    .concat(name, ";\n    this.get = get")
    .concat(name, 's;\n    this.allowedPayloads = ["value", "anotherValue"]\n  }\n\n  async create')
    .concat(
      name,
      '(req, res) {\n    const payload = pick(req.body, this.allowedPayloads);\n    const response = await this.create.execute(payload);\n    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "',
    )
    .concat(name, ' added successfully");\n  }\n\n  async update')
    .concat(
      name,
      '(req, res) {\n    const { id: _id } = pick(req.params, ["id"]);\n    const body = pick(req.body, ["", ""]);\n    const payload = { ...body, _id };\n    const response = await this.update.execute(payload);\n    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "',
    )
    .concat(name, ' udpated successfully");\n  }\n\n  async delete')
    .concat(
      name,
      '(req, res) {\n    const { id: _id } = pick(req.params, ["id"]);\n    const payload = { _id };\n    const response = await this.delete.execute(payload);\n    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "',
    )
    .concat(name, ' deleted successfully!");\n  }\n\n  async get')
    .concat(
      name,
      's(req, res) {\n    const response = await this.get.execute();\n    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "',
    )
    .concat(name, '(s) fetched successfully!");\n  }\n\n  async get')
    .concat(
      name,
      '(req, res) {\n    const { id: _id } = pick(req.params, ["id"]);\n    const payload = { _id };\n    const response = await this.getOne.execute(payload);\n    return this.responseBuilder.getResponseHandler(res).onSuccess(response, "',
    )
    .concat(name, ' fetched successfully!");\n  }\n}\n\nexport default ')
    .concat(name, "Controller;\n");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImNvbmNhdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3R5cGVkL3NjcmlwdHMvZ2VuL2RhdGEvY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFwiaW1wb3J0IEJhc2VDb250cm9sbGVyIGZyb20gXFxcImludGVyZmFjZXMvcmVzdC9jb250cm9sbGVyc1xcXCI7XFxuaW1wb3J0IHsgcGljayB9IGZyb20gXFxcImxvZGFzaFxcXCI7XFxuXFxuY2xhc3MgXCIuY29uY2F0KG5hbWUsIFwiQ29udHJvbGxlciBleHRlbmRzIEJhc2VDb250cm9sbGVyIHtcXG4gIGNvbnN0cnVjdG9yKHsgY3JlYXRlXCIpLmNvbmNhdChuYW1lLCBcIiwgdXBkYXRlXCIpLmNvbmNhdChuYW1lLCBcIiwgZGVsZXRlXCIpLmNvbmNhdChuYW1lLCBcIiwgZ2V0XCIpLmNvbmNhdChuYW1lLCBcIiwgZ2V0XCIpLmNvbmNhdChuYW1lLCBcInMgfSkge1xcbiAgICBzdXBlcigpO1xcbiAgICB0aGlzLmNyZWF0ZSA9IGNyZWF0ZVwiKS5jb25jYXQobmFtZSwgXCI7XFxuICAgIHRoaXMudXBkYXRlID0gdXBkYXRlXCIpLmNvbmNhdChuYW1lLCBcIjtcXG4gICAgdGhpcy5kZWxldGUgPSBkZWxldGVcIikuY29uY2F0KG5hbWUsIFwiO1xcbiAgICB0aGlzLmdldE9uZSA9IGdldFwiKS5jb25jYXQobmFtZSwgXCI7XFxuICAgIHRoaXMuZ2V0ID0gZ2V0XCIpLmNvbmNhdChuYW1lLCBcInM7XFxuICAgIHRoaXMuYWxsb3dlZFBheWxvYWRzID0gW1xcXCJ2YWx1ZVxcXCIsIFxcXCJhbm90aGVyVmFsdWVcXFwiXVxcbiAgfVxcblxcbiAgYXN5bmMgY3JlYXRlXCIpLmNvbmNhdChuYW1lLCBcIihyZXEsIHJlcykge1xcbiAgICBjb25zdCBwYXlsb2FkID0gcGljayhyZXEuYm9keSwgdGhpcy5hbGxvd2VkUGF5bG9hZHMpO1xcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY3JlYXRlLmV4ZWN1dGUocGF5bG9hZCk7XFxuICAgIHJldHVybiB0aGlzLnJlc3BvbnNlQnVpbGRlci5nZXRSZXNwb25zZUhhbmRsZXIocmVzKS5vblN1Y2Nlc3MocmVzcG9uc2UsIFxcXCJcIikuY29uY2F0KG5hbWUsIFwiIGFkZGVkIHN1Y2Nlc3NmdWxseVxcXCIpO1xcbiAgfVxcblxcbiAgYXN5bmMgdXBkYXRlXCIpLmNvbmNhdChuYW1lLCBcIihyZXEsIHJlcykge1xcbiAgICBjb25zdCB7IGlkOiBfaWQgfSA9IHBpY2socmVxLnBhcmFtcywgW1xcXCJpZFxcXCJdKTtcXG4gICAgY29uc3QgYm9keSA9IHBpY2socmVxLmJvZHksIFtcXFwiXFxcIiwgXFxcIlxcXCJdKTtcXG4gICAgY29uc3QgcGF5bG9hZCA9IHsgLi4uYm9keSwgX2lkIH07XFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy51cGRhdGUuZXhlY3V0ZShwYXlsb2FkKTtcXG4gICAgcmV0dXJuIHRoaXMucmVzcG9uc2VCdWlsZGVyLmdldFJlc3BvbnNlSGFuZGxlcihyZXMpLm9uU3VjY2VzcyhyZXNwb25zZSwgXFxcIlwiKS5jb25jYXQobmFtZSwgXCIgdWRwYXRlZCBzdWNjZXNzZnVsbHlcXFwiKTtcXG4gIH1cXG5cXG4gIGFzeW5jIGRlbGV0ZVwiKS5jb25jYXQobmFtZSwgXCIocmVxLCByZXMpIHtcXG4gICAgY29uc3QgeyBpZDogX2lkIH0gPSBwaWNrKHJlcS5wYXJhbXMsIFtcXFwiaWRcXFwiXSk7XFxuICAgIGNvbnN0IHBheWxvYWQgPSB7IF9pZCB9O1xcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZGVsZXRlLmV4ZWN1dGUocGF5bG9hZCk7XFxuICAgIHJldHVybiB0aGlzLnJlc3BvbnNlQnVpbGRlci5nZXRSZXNwb25zZUhhbmRsZXIocmVzKS5vblN1Y2Nlc3MocmVzcG9uc2UsIFxcXCJcIikuY29uY2F0KG5hbWUsIFwiIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IVxcXCIpO1xcbiAgfVxcblxcbiAgYXN5bmMgZ2V0XCIpLmNvbmNhdChuYW1lLCBcInMocmVxLCByZXMpIHtcXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldC5leGVjdXRlKCk7XFxuICAgIHJldHVybiB0aGlzLnJlc3BvbnNlQnVpbGRlci5nZXRSZXNwb25zZUhhbmRsZXIocmVzKS5vblN1Y2Nlc3MocmVzcG9uc2UsIFxcXCJcIikuY29uY2F0KG5hbWUsIFwiKHMpIGZldGNoZWQgc3VjY2Vzc2Z1bGx5IVxcXCIpO1xcbiAgfVxcblxcbiAgYXN5bmMgZ2V0XCIpLmNvbmNhdChuYW1lLCBcIihyZXEsIHJlcykge1xcbiAgICBjb25zdCB7IGlkOiBfaWQgfSA9IHBpY2socmVxLnBhcmFtcywgW1xcXCJpZFxcXCJdKTtcXG4gICAgY29uc3QgcGF5bG9hZCA9IHsgX2lkIH07XFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXRPbmUuZXhlY3V0ZShwYXlsb2FkKTtcXG4gICAgcmV0dXJuIHRoaXMucmVzcG9uc2VCdWlsZGVyLmdldFJlc3BvbnNlSGFuZGxlcihyZXMpLm9uU3VjY2VzcyhyZXNwb25zZSwgXFxcIlwiKS5jb25jYXQobmFtZSwgXCIgZmV0Y2hlZCBzdWNjZXNzZnVsbHkhXFxcIik7XFxuICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IFwiKS5jb25jYXQobmFtZSwgXCJDb250cm9sbGVyO1xcblwiKTsgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFDWkEsTUFBTSxDQUFDQyxPQUFPLEdBQUcsVUFBVUMsSUFBSSxFQUFFO0VBQUUsT0FBTyx5R0FBeUcsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUsNkRBQTZELENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGdEQUFnRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLDZCQUE2QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLDZCQUE2QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLDBCQUEwQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHVCQUF1QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHFGQUFxRixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG1OQUFtTixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGdEQUFnRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG9TQUFvUyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGtEQUFrRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLDJPQUEyTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGdEQUFnRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLCtJQUErSSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG1EQUFtRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLDJPQUEyTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHVEQUF1RCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGVBQWUsQ0FBQztBQUFFLENBQUMifQ==
