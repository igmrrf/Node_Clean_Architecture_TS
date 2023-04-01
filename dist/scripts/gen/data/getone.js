"use strict";

module.exports = function (name) {
  return 'import UseCase from "app/UseCase";\n\nclass Get'
    .concat(name, " extends UseCase {\n  constructor({ ")
    .concat(name.toLowerCase(), "Repository }) {\n    super();\n    this.")
    .concat(name.toLowerCase(), "Repository = ")
    .concat(
      name.toLowerCase(),
      "Repository;\n  }\n\n  execute(payload) {\n    // Implement any logic needed for getting a ",
    )
    .concat(name.toLowerCase(), "\n    return this.")
    .concat(name.toLowerCase(), "Repository.getOne(payload);\n  }\n}\n\nexport default Get")
    .concat(name, ";\n");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImNvbmNhdCIsInRvTG93ZXJDYXNlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdHlwZWQvc2NyaXB0cy9nZW4vZGF0YS9nZXRvbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBcImltcG9ydCBVc2VDYXNlIGZyb20gXFxcImFwcC9Vc2VDYXNlXFxcIjtcXG5cXG5jbGFzcyBHZXRcIi5jb25jYXQobmFtZSwgXCIgZXh0ZW5kcyBVc2VDYXNlIHtcXG4gIGNvbnN0cnVjdG9yKHsgXCIpLmNvbmNhdChuYW1lLnRvTG93ZXJDYXNlKCksIFwiUmVwb3NpdG9yeSB9KSB7XFxuICAgIHN1cGVyKCk7XFxuICAgIHRoaXMuXCIpLmNvbmNhdChuYW1lLnRvTG93ZXJDYXNlKCksIFwiUmVwb3NpdG9yeSA9IFwiKS5jb25jYXQobmFtZS50b0xvd2VyQ2FzZSgpLCBcIlJlcG9zaXRvcnk7XFxuICB9XFxuXFxuICBleGVjdXRlKHBheWxvYWQpIHtcXG4gICAgLy8gSW1wbGVtZW50IGFueSBsb2dpYyBuZWVkZWQgZm9yIGdldHRpbmcgYSBcIikuY29uY2F0KG5hbWUudG9Mb3dlckNhc2UoKSwgXCJcXG4gICAgcmV0dXJuIHRoaXMuXCIpLmNvbmNhdChuYW1lLnRvTG93ZXJDYXNlKCksIFwiUmVwb3NpdG9yeS5nZXRPbmUocGF5bG9hZCk7XFxuICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IEdldFwiKS5jb25jYXQobmFtZSwgXCI7XFxuXCIpOyB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUNaQSxNQUFNLENBQUNDLE9BQU8sR0FBRyxVQUFVQyxJQUFJLEVBQUU7RUFBRSxPQUFPLG1EQUFtRCxDQUFDQyxNQUFNLENBQUNELElBQUksRUFBRSxzQ0FBc0MsQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksQ0FBQ0UsV0FBVyxFQUFFLEVBQUUsMENBQTBDLENBQUMsQ0FBQ0QsTUFBTSxDQUFDRCxJQUFJLENBQUNFLFdBQVcsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDRCxNQUFNLENBQUNELElBQUksQ0FBQ0UsV0FBVyxFQUFFLEVBQUUsNEZBQTRGLENBQUMsQ0FBQ0QsTUFBTSxDQUFDRCxJQUFJLENBQUNFLFdBQVcsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUNELE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxXQUFXLEVBQUUsRUFBRSwyREFBMkQsQ0FBQyxDQUFDRCxNQUFNLENBQUNELElBQUksRUFBRSxLQUFLLENBQUM7QUFBRSxDQUFDIn0=
