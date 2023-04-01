"use strict";

module.exports = function (name) {
  return 'import ResourceNotFoundError from "interfaces/rest/errors/ResourceNotFoundError";\nimport ConflictError from "interfaces/rest/errors/ConflictError";\nimport BaseRepository from "base/repositories";\n\nclass '
    .concat(name, "Repository extends BaseRepository {\n  constructor({ models: { ")
    .concat(name, " }, currentUser }) {\n    super({ Model: ")
    .concat(name, " });\n    this.")
    .concat(name, " = ")
    .concat(
      name,
      ";\n    this.currentUser = currentUser;\n  }\n\n  async create(payload) {\n    if (payload.email) {\n      const existing",
    )
    .concat(
      name,
      " = await this.find({ description: payload.description }, undefined, {\n        lean: true,\n      });\n      if (existing",
    )
    .concat(name, ') {\n        throw new ConflictError("')
    .concat(name, ' already exists");\n      }\n    }\n    const new')
    .concat(
      name,
      " = await this.createDoc({\n      ...payload,\n      created_by: this.currentUser._id,\n    });\n    return new",
    )
    .concat(name, ".getPublicFields();\n  }\n\n  async update(payload) {\n    const existing")
    .concat(name, " = await this.findById(payload._id, undefined, { lean: true });\n    if (!existing")
    .concat(name, ') {\n      throw new ResourceNotFoundError("')
    .concat(name, ' not found");\n    }\n    const new')
    .concat(
      name,
      " = await this.findOneAndUpdate(\n      {\n        _id: payload._id,\n      },\n      { ...payload },\n      { new: true }\n    );\n    return new",
    )
    .concat(name, ".getPublicFields();\n  }\n\n  async delete(payload) {\n    const existing")
    .concat(name, " = await this.findById(payload._id, undefined, { lean: true });\n    if (!existing")
    .concat(name, ') {\n      throw new ResourceNotFoundError("')
    .concat(name, ' not found");\n    }\n    const remove')
    .concat(name, " = await this.findOneAndDelete({\n      _id: payload._id,\n    });\n    return remove")
    .concat(name, ".getPublicFields();\n  }\n\n  async get() {\n    const existing")
    .concat(name, "s = await this.find({}, undefined, { lean: true }, true);\n    return existing")
    .concat(name, "s;\n  }\n\n  async getOne(payload) {\n    const existing")
    .concat(name, " = await this.findById(payload._id, undefined, { lean: true });\n    if (!existing")
    .concat(name, ') {\n      throw new ResourceNotFoundError("')
    .concat(name, ' not found");\n    }\n    const get')
    .concat(
      name,
      " = await this.find({ _id: payload._id }, undefined, {\n      lean: true,\n    });\n    return get",
    )
    .concat(name, ";\n  }\n}\n\nexport default ")
    .concat(name, "Repository;\n");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImNvbmNhdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3R5cGVkL3NjcmlwdHMvZ2VuL2RhdGEvcmVwb3NpdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFwiaW1wb3J0IFJlc291cmNlTm90Rm91bmRFcnJvciBmcm9tIFxcXCJpbnRlcmZhY2VzL3Jlc3QvZXJyb3JzL1Jlc291cmNlTm90Rm91bmRFcnJvclxcXCI7XFxuaW1wb3J0IENvbmZsaWN0RXJyb3IgZnJvbSBcXFwiaW50ZXJmYWNlcy9yZXN0L2Vycm9ycy9Db25mbGljdEVycm9yXFxcIjtcXG5pbXBvcnQgQmFzZVJlcG9zaXRvcnkgZnJvbSBcXFwiYmFzZS9yZXBvc2l0b3JpZXNcXFwiO1xcblxcbmNsYXNzIFwiLmNvbmNhdChuYW1lLCBcIlJlcG9zaXRvcnkgZXh0ZW5kcyBCYXNlUmVwb3NpdG9yeSB7XFxuICBjb25zdHJ1Y3Rvcih7IG1vZGVsczogeyBcIikuY29uY2F0KG5hbWUsIFwiIH0sIGN1cnJlbnRVc2VyIH0pIHtcXG4gICAgc3VwZXIoeyBNb2RlbDogXCIpLmNvbmNhdChuYW1lLCBcIiB9KTtcXG4gICAgdGhpcy5cIikuY29uY2F0KG5hbWUsIFwiID0gXCIpLmNvbmNhdChuYW1lLCBcIjtcXG4gICAgdGhpcy5jdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyO1xcbiAgfVxcblxcbiAgYXN5bmMgY3JlYXRlKHBheWxvYWQpIHtcXG4gICAgaWYgKHBheWxvYWQuZW1haWwpIHtcXG4gICAgICBjb25zdCBleGlzdGluZ1wiKS5jb25jYXQobmFtZSwgXCIgPSBhd2FpdCB0aGlzLmZpbmQoeyBkZXNjcmlwdGlvbjogcGF5bG9hZC5kZXNjcmlwdGlvbiB9LCB1bmRlZmluZWQsIHtcXG4gICAgICAgIGxlYW46IHRydWUsXFxuICAgICAgfSk7XFxuICAgICAgaWYgKGV4aXN0aW5nXCIpLmNvbmNhdChuYW1lLCBcIikge1xcbiAgICAgICAgdGhyb3cgbmV3IENvbmZsaWN0RXJyb3IoXFxcIlwiKS5jb25jYXQobmFtZSwgXCIgYWxyZWFkeSBleGlzdHNcXFwiKTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgY29uc3QgbmV3XCIpLmNvbmNhdChuYW1lLCBcIiA9IGF3YWl0IHRoaXMuY3JlYXRlRG9jKHtcXG4gICAgICAuLi5wYXlsb2FkLFxcbiAgICAgIGNyZWF0ZWRfYnk6IHRoaXMuY3VycmVudFVzZXIuX2lkLFxcbiAgICB9KTtcXG4gICAgcmV0dXJuIG5ld1wiKS5jb25jYXQobmFtZSwgXCIuZ2V0UHVibGljRmllbGRzKCk7XFxuICB9XFxuXFxuICBhc3luYyB1cGRhdGUocGF5bG9hZCkge1xcbiAgICBjb25zdCBleGlzdGluZ1wiKS5jb25jYXQobmFtZSwgXCIgPSBhd2FpdCB0aGlzLmZpbmRCeUlkKHBheWxvYWQuX2lkLCB1bmRlZmluZWQsIHsgbGVhbjogdHJ1ZSB9KTtcXG4gICAgaWYgKCFleGlzdGluZ1wiKS5jb25jYXQobmFtZSwgXCIpIHtcXG4gICAgICB0aHJvdyBuZXcgUmVzb3VyY2VOb3RGb3VuZEVycm9yKFxcXCJcIikuY29uY2F0KG5hbWUsIFwiIG5vdCBmb3VuZFxcXCIpO1xcbiAgICB9XFxuICAgIGNvbnN0IG5ld1wiKS5jb25jYXQobmFtZSwgXCIgPSBhd2FpdCB0aGlzLmZpbmRPbmVBbmRVcGRhdGUoXFxuICAgICAge1xcbiAgICAgICAgX2lkOiBwYXlsb2FkLl9pZCxcXG4gICAgICB9LFxcbiAgICAgIHsgLi4ucGF5bG9hZCB9LFxcbiAgICAgIHsgbmV3OiB0cnVlIH1cXG4gICAgKTtcXG4gICAgcmV0dXJuIG5ld1wiKS5jb25jYXQobmFtZSwgXCIuZ2V0UHVibGljRmllbGRzKCk7XFxuICB9XFxuXFxuICBhc3luYyBkZWxldGUocGF5bG9hZCkge1xcbiAgICBjb25zdCBleGlzdGluZ1wiKS5jb25jYXQobmFtZSwgXCIgPSBhd2FpdCB0aGlzLmZpbmRCeUlkKHBheWxvYWQuX2lkLCB1bmRlZmluZWQsIHsgbGVhbjogdHJ1ZSB9KTtcXG4gICAgaWYgKCFleGlzdGluZ1wiKS5jb25jYXQobmFtZSwgXCIpIHtcXG4gICAgICB0aHJvdyBuZXcgUmVzb3VyY2VOb3RGb3VuZEVycm9yKFxcXCJcIikuY29uY2F0KG5hbWUsIFwiIG5vdCBmb3VuZFxcXCIpO1xcbiAgICB9XFxuICAgIGNvbnN0IHJlbW92ZVwiKS5jb25jYXQobmFtZSwgXCIgPSBhd2FpdCB0aGlzLmZpbmRPbmVBbmREZWxldGUoe1xcbiAgICAgIF9pZDogcGF5bG9hZC5faWQsXFxuICAgIH0pO1xcbiAgICByZXR1cm4gcmVtb3ZlXCIpLmNvbmNhdChuYW1lLCBcIi5nZXRQdWJsaWNGaWVsZHMoKTtcXG4gIH1cXG5cXG4gIGFzeW5jIGdldCgpIHtcXG4gICAgY29uc3QgZXhpc3RpbmdcIikuY29uY2F0KG5hbWUsIFwicyA9IGF3YWl0IHRoaXMuZmluZCh7fSwgdW5kZWZpbmVkLCB7IGxlYW46IHRydWUgfSwgdHJ1ZSk7XFxuICAgIHJldHVybiBleGlzdGluZ1wiKS5jb25jYXQobmFtZSwgXCJzO1xcbiAgfVxcblxcbiAgYXN5bmMgZ2V0T25lKHBheWxvYWQpIHtcXG4gICAgY29uc3QgZXhpc3RpbmdcIikuY29uY2F0KG5hbWUsIFwiID0gYXdhaXQgdGhpcy5maW5kQnlJZChwYXlsb2FkLl9pZCwgdW5kZWZpbmVkLCB7IGxlYW46IHRydWUgfSk7XFxuICAgIGlmICghZXhpc3RpbmdcIikuY29uY2F0KG5hbWUsIFwiKSB7XFxuICAgICAgdGhyb3cgbmV3IFJlc291cmNlTm90Rm91bmRFcnJvcihcXFwiXCIpLmNvbmNhdChuYW1lLCBcIiBub3QgZm91bmRcXFwiKTtcXG4gICAgfVxcbiAgICBjb25zdCBnZXRcIikuY29uY2F0KG5hbWUsIFwiID0gYXdhaXQgdGhpcy5maW5kKHsgX2lkOiBwYXlsb2FkLl9pZCB9LCB1bmRlZmluZWQsIHtcXG4gICAgICBsZWFuOiB0cnVlLFxcbiAgICB9KTtcXG4gICAgcmV0dXJuIGdldFwiKS5jb25jYXQobmFtZSwgXCI7XFxuICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IFwiKS5jb25jYXQobmFtZSwgXCJSZXBvc2l0b3J5O1xcblwiKTsgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFDWkEsTUFBTSxDQUFDQyxPQUFPLEdBQUcsVUFBVUMsSUFBSSxFQUFFO0VBQUUsT0FBTyx1TkFBdU4sQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUsaUVBQWlFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUsMkNBQTJDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLDBIQUEwSCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLDJIQUEySCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHlDQUF5QyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG9EQUFvRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGdIQUFnSCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLDJFQUEyRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG9GQUFvRixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLCtDQUErQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHNDQUFzQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG1KQUFtSixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLDJFQUEyRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG9GQUFvRixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLCtDQUErQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHlDQUF5QyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHVGQUF1RixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGlFQUFpRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGdGQUFnRixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLDBEQUEwRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG9GQUFvRixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLCtDQUErQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHNDQUFzQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLG1HQUFtRyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLDhCQUE4QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGVBQWUsQ0FBQztBQUFFLENBQUMifQ==
