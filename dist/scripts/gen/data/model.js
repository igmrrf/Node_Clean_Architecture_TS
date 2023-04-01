"use strict";

module.exports = function (name) {
  return 'import mongoose from "mongoose";\nimport '
    .concat(name, ' from "./')
    .concat(name, 'Entity";\n\nconst ')
    .concat(
      name.toLowerCase(),
      'Schema = new mongoose.Schema(\n  {\n     updated_by: {\n      type: mongoose.Types.ObjectId,\n      ref: "User",\n    },\n     created_by: {\n      type: mongoose.Types.ObjectId,\n      ref: "User",\n      required: true,\n    },\n  },\n  {\n    timestamps: {\n      createdAt: "created_at",\n      updatedAt: "updated_at",\n    },\n    toObject: {\n      virtuals: true,\n      retainKeyOrder: true,\n    },\n    toJSON: {\n      virtuals: true,\n    },\n  }\n);\n\n',
    )
    .concat(name.toLowerCase(), "Schema.loadClass(")
    .concat(name, ');\n\nexport default mongoose.model("')
    .concat(name, '", ')
    .concat(name.toLowerCase(), "Schema);\n");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImNvbmNhdCIsInRvTG93ZXJDYXNlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdHlwZWQvc2NyaXB0cy9nZW4vZGF0YS9tb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFwiaW1wb3J0IG1vbmdvb3NlIGZyb20gXFxcIm1vbmdvb3NlXFxcIjtcXG5pbXBvcnQgXCIuY29uY2F0KG5hbWUsIFwiIGZyb20gXFxcIi4vXCIpLmNvbmNhdChuYW1lLCBcIkVudGl0eVxcXCI7XFxuXFxuY29uc3QgXCIpLmNvbmNhdChuYW1lLnRvTG93ZXJDYXNlKCksIFwiU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcXG4gIHtcXG4gICAgIHVwZGF0ZWRfYnk6IHtcXG4gICAgICB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCxcXG4gICAgICByZWY6IFxcXCJVc2VyXFxcIixcXG4gICAgfSxcXG4gICAgIGNyZWF0ZWRfYnk6IHtcXG4gICAgICB0eXBlOiBtb25nb29zZS5UeXBlcy5PYmplY3RJZCxcXG4gICAgICByZWY6IFxcXCJVc2VyXFxcIixcXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgfSxcXG4gIH0sXFxuICB7XFxuICAgIHRpbWVzdGFtcHM6IHtcXG4gICAgICBjcmVhdGVkQXQ6IFxcXCJjcmVhdGVkX2F0XFxcIixcXG4gICAgICB1cGRhdGVkQXQ6IFxcXCJ1cGRhdGVkX2F0XFxcIixcXG4gICAgfSxcXG4gICAgdG9PYmplY3Q6IHtcXG4gICAgICB2aXJ0dWFsczogdHJ1ZSxcXG4gICAgICByZXRhaW5LZXlPcmRlcjogdHJ1ZSxcXG4gICAgfSxcXG4gICAgdG9KU09OOiB7XFxuICAgICAgdmlydHVhbHM6IHRydWUsXFxuICAgIH0sXFxuICB9XFxuKTtcXG5cXG5cIikuY29uY2F0KG5hbWUudG9Mb3dlckNhc2UoKSwgXCJTY2hlbWEubG9hZENsYXNzKFwiKS5jb25jYXQobmFtZSwgXCIpO1xcblxcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVsKFxcXCJcIikuY29uY2F0KG5hbWUsIFwiXFxcIiwgXCIpLmNvbmNhdChuYW1lLnRvTG93ZXJDYXNlKCksIFwiU2NoZW1hKTtcXG5cIik7IH07XG4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBQ1pBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQVVDLElBQUksRUFBRTtFQUFFLE9BQU8sNkNBQTZDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksRUFBRSxxQkFBcUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksQ0FBQ0UsV0FBVyxFQUFFLEVBQUUsNmRBQTZkLENBQUMsQ0FBQ0QsTUFBTSxDQUFDRCxJQUFJLENBQUNFLFdBQVcsRUFBRSxFQUFFLG1CQUFtQixDQUFDLENBQUNELE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHdDQUF3QyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksQ0FBQ0UsV0FBVyxFQUFFLEVBQUUsWUFBWSxDQUFDO0FBQUUsQ0FBQyJ9
