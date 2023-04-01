"use strict";

module.exports = function (name) {
  return 'import { expect } from "chai";\nimport '
    .concat(name, ' from "../')
    .concat(name, 'Entity";\n\ndescribe("********** ')
    .concat(name, ' entity ***********", () => {\n  it("getPublicFields", () => {\n    const ')
    .concat(name.toLowerCase(), " = new ")
    .concat(
      name,
      '({\n      key: "value",\n      anotherKey: "another value",\n    });\n\n    const publicFields = ',
    )
    .concat(
      name.toLowerCase(),
      '.getPublicFields();\n    expect(publicFields).to.be.an("object");\n    expect(publicFields).to.have.property("_id");\n  });\n});\n',
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImNvbmNhdCIsInRvTG93ZXJDYXNlIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vdHlwZWQvc2NyaXB0cy9nZW4vZGF0YS9zcGVjLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gXCJpbXBvcnQgeyBleHBlY3QgfSBmcm9tIFxcXCJjaGFpXFxcIjtcXG5pbXBvcnQgXCIuY29uY2F0KG5hbWUsIFwiIGZyb20gXFxcIi4uL1wiKS5jb25jYXQobmFtZSwgXCJFbnRpdHlcXFwiO1xcblxcbmRlc2NyaWJlKFxcXCIqKioqKioqKioqIFwiKS5jb25jYXQobmFtZSwgXCIgZW50aXR5ICoqKioqKioqKioqXFxcIiwgKCkgPT4ge1xcbiAgaXQoXFxcImdldFB1YmxpY0ZpZWxkc1xcXCIsICgpID0+IHtcXG4gICAgY29uc3QgXCIpLmNvbmNhdChuYW1lLnRvTG93ZXJDYXNlKCksIFwiID0gbmV3IFwiKS5jb25jYXQobmFtZSwgXCIoe1xcbiAgICAgIGtleTogXFxcInZhbHVlXFxcIixcXG4gICAgICBhbm90aGVyS2V5OiBcXFwiYW5vdGhlciB2YWx1ZVxcXCIsXFxuICAgIH0pO1xcblxcbiAgICBjb25zdCBwdWJsaWNGaWVsZHMgPSBcIikuY29uY2F0KG5hbWUudG9Mb3dlckNhc2UoKSwgXCIuZ2V0UHVibGljRmllbGRzKCk7XFxuICAgIGV4cGVjdChwdWJsaWNGaWVsZHMpLnRvLmJlLmFuKFxcXCJvYmplY3RcXFwiKTtcXG4gICAgZXhwZWN0KHB1YmxpY0ZpZWxkcykudG8uaGF2ZS5wcm9wZXJ0eShcXFwiX2lkXFxcIik7XFxuICB9KTtcXG59KTtcXG5cIik7IH07XG4iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVk7O0FBQ1pBLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLFVBQVVDLElBQUksRUFBRTtFQUFFLE9BQU8sMkNBQTJDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksRUFBRSxxQ0FBcUMsQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksRUFBRSwrRUFBK0UsQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksQ0FBQ0UsV0FBVyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQ0QsSUFBSSxFQUFFLHVHQUF1RyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDRSxXQUFXLEVBQUUsRUFBRSx3SUFBd0ksQ0FBQztBQUFFLENBQUMifQ==
