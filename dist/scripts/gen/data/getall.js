"use strict";

module.exports = function (name) {
  return 'import UseCase from "app/UseCase";\n\nclass Get'
    .concat(name, "s extends UseCase {\n  constructor({ ")
    .concat(name.toLowerCase(), "Repository }) {\n    super();\n    this.")
    .concat(name.toLowerCase(), "Repository = ")
    .concat(
      name.toLowerCase(),
      "Repository;\n  }\n\n  execute(payload) {\n    // Implement any logic needed for getting all ",
    )
    .concat(name.toLowerCase(), "s\n    return this.")
    .concat(name.toLowerCase(), "Repository.get(payload);\n  }\n}\n\n export default Get")
    .concat(name, "s;\n");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImNvbmNhdCIsInRvTG93ZXJDYXNlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdHlwZWQvc2NyaXB0cy9nZW4vZGF0YS9nZXRhbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBcImltcG9ydCBVc2VDYXNlIGZyb20gXFxcImFwcC9Vc2VDYXNlXFxcIjtcXG5cXG5jbGFzcyBHZXRcIi5jb25jYXQobmFtZSwgXCJzIGV4dGVuZHMgVXNlQ2FzZSB7XFxuICBjb25zdHJ1Y3Rvcih7IFwiKS5jb25jYXQobmFtZS50b0xvd2VyQ2FzZSgpLCBcIlJlcG9zaXRvcnkgfSkge1xcbiAgICBzdXBlcigpO1xcbiAgICB0aGlzLlwiKS5jb25jYXQobmFtZS50b0xvd2VyQ2FzZSgpLCBcIlJlcG9zaXRvcnkgPSBcIikuY29uY2F0KG5hbWUudG9Mb3dlckNhc2UoKSwgXCJSZXBvc2l0b3J5O1xcbiAgfVxcblxcbiAgZXhlY3V0ZShwYXlsb2FkKSB7XFxuICAgIC8vIEltcGxlbWVudCBhbnkgbG9naWMgbmVlZGVkIGZvciBnZXR0aW5nIGFsbCBcIikuY29uY2F0KG5hbWUudG9Mb3dlckNhc2UoKSwgXCJzXFxuICAgIHJldHVybiB0aGlzLlwiKS5jb25jYXQobmFtZS50b0xvd2VyQ2FzZSgpLCBcIlJlcG9zaXRvcnkuZ2V0KHBheWxvYWQpO1xcbiAgfVxcbn1cXG5cXG4gZXhwb3J0IGRlZmF1bHQgR2V0XCIpLmNvbmNhdChuYW1lLCBcInM7XFxuXCIpOyB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUNaQSxNQUFNLENBQUNDLE9BQU8sR0FBRyxVQUFVQyxJQUFJLEVBQUU7RUFBRSxPQUFPLG1EQUFtRCxDQUFDQyxNQUFNLENBQUNELElBQUksRUFBRSx1Q0FBdUMsQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksQ0FBQ0UsV0FBVyxFQUFFLEVBQUUsMENBQTBDLENBQUMsQ0FBQ0QsTUFBTSxDQUFDRCxJQUFJLENBQUNFLFdBQVcsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDRCxNQUFNLENBQUNELElBQUksQ0FBQ0UsV0FBVyxFQUFFLEVBQUUsOEZBQThGLENBQUMsQ0FBQ0QsTUFBTSxDQUFDRCxJQUFJLENBQUNFLFdBQVcsRUFBRSxFQUFFLHFCQUFxQixDQUFDLENBQUNELE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxXQUFXLEVBQUUsRUFBRSx5REFBeUQsQ0FBQyxDQUFDRCxNQUFNLENBQUNELElBQUksRUFBRSxNQUFNLENBQUM7QUFBRSxDQUFDIn0=
