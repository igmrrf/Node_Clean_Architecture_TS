"use strict";

module.exports = function (name) {
  return 'import UseCase from "app/UseCase";\n\nclass Create'
    .concat(name, " extends UseCase {\n  constructor({ ")
    .concat(name.toLowerCase(), "Repository }) {\n    super();\n    this.")
    .concat(name.toLowerCase(), "Repository = ")
    .concat(
      name.toLowerCase(),
      "Repository;\n  }\n\n  execute(payload) {\n    // Implement any logic needed for creating a ",
    )
    .concat(name.toLowerCase(), "\n    return this.")
    .concat(name.toLowerCase(), "Repository.create(payload);\n  }\n}\n\nexport default Create")
    .concat(name, ";\n");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImNvbmNhdCIsInRvTG93ZXJDYXNlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdHlwZWQvc2NyaXB0cy9nZW4vZGF0YS9jcmVhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBcImltcG9ydCBVc2VDYXNlIGZyb20gXFxcImFwcC9Vc2VDYXNlXFxcIjtcXG5cXG5jbGFzcyBDcmVhdGVcIi5jb25jYXQobmFtZSwgXCIgZXh0ZW5kcyBVc2VDYXNlIHtcXG4gIGNvbnN0cnVjdG9yKHsgXCIpLmNvbmNhdChuYW1lLnRvTG93ZXJDYXNlKCksIFwiUmVwb3NpdG9yeSB9KSB7XFxuICAgIHN1cGVyKCk7XFxuICAgIHRoaXMuXCIpLmNvbmNhdChuYW1lLnRvTG93ZXJDYXNlKCksIFwiUmVwb3NpdG9yeSA9IFwiKS5jb25jYXQobmFtZS50b0xvd2VyQ2FzZSgpLCBcIlJlcG9zaXRvcnk7XFxuICB9XFxuXFxuICBleGVjdXRlKHBheWxvYWQpIHtcXG4gICAgLy8gSW1wbGVtZW50IGFueSBsb2dpYyBuZWVkZWQgZm9yIGNyZWF0aW5nIGEgXCIpLmNvbmNhdChuYW1lLnRvTG93ZXJDYXNlKCksIFwiXFxuICAgIHJldHVybiB0aGlzLlwiKS5jb25jYXQobmFtZS50b0xvd2VyQ2FzZSgpLCBcIlJlcG9zaXRvcnkuY3JlYXRlKHBheWxvYWQpO1xcbiAgfVxcbn1cXG5cXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVcIikuY29uY2F0KG5hbWUsIFwiO1xcblwiKTsgfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFDWkEsTUFBTSxDQUFDQyxPQUFPLEdBQUcsVUFBVUMsSUFBSSxFQUFFO0VBQUUsT0FBTyxzREFBc0QsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLEVBQUUsc0NBQXNDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFJLENBQUNFLFdBQVcsRUFBRSxFQUFFLDBDQUEwQyxDQUFDLENBQUNELE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxXQUFXLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQ0QsTUFBTSxDQUFDRCxJQUFJLENBQUNFLFdBQVcsRUFBRSxFQUFFLDZGQUE2RixDQUFDLENBQUNELE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxXQUFXLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDRCxNQUFNLENBQUNELElBQUksQ0FBQ0UsV0FBVyxFQUFFLEVBQUUsOERBQThELENBQUMsQ0FBQ0QsTUFBTSxDQUFDRCxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUUsQ0FBQyJ9
