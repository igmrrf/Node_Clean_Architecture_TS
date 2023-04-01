"use strict";

module.exports = function (name) {
  return "/**\n https://mongoosejs.com/docs/4.x/docs/advanced_schemas.html\n *A class method maps to a schema method, a static method maps to a schema static,\n and getters/setters map to virtuals.\n*/\n\nclass "
    .concat(
      name,
      " {\n  getPublicFields() {\n    return {\n      created_by: this.created_by,\n      _id: this._id,\n      created_at: this.created_at,\n      updated_at: this.updated_at,\n    };\n  }\n}\n\nexport default ",
    )
    .concat(name, ";\n");
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsImNvbmNhdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3R5cGVkL3NjcmlwdHMvZ2VuL2RhdGEvZW50aXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gXCIvKipcXG4gaHR0cHM6Ly9tb25nb29zZWpzLmNvbS9kb2NzLzQueC9kb2NzL2FkdmFuY2VkX3NjaGVtYXMuaHRtbFxcbiAqQSBjbGFzcyBtZXRob2QgbWFwcyB0byBhIHNjaGVtYSBtZXRob2QsIGEgc3RhdGljIG1ldGhvZCBtYXBzIHRvIGEgc2NoZW1hIHN0YXRpYyxcXG4gYW5kIGdldHRlcnMvc2V0dGVycyBtYXAgdG8gdmlydHVhbHMuXFxuKi9cXG5cXG5jbGFzcyBcIi5jb25jYXQobmFtZSwgXCIge1xcbiAgZ2V0UHVibGljRmllbGRzKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGNyZWF0ZWRfYnk6IHRoaXMuY3JlYXRlZF9ieSxcXG4gICAgICBfaWQ6IHRoaXMuX2lkLFxcbiAgICAgIGNyZWF0ZWRfYXQ6IHRoaXMuY3JlYXRlZF9hdCxcXG4gICAgICB1cGRhdGVkX2F0OiB0aGlzLnVwZGF0ZWRfYXQsXFxuICAgIH07XFxuICB9XFxufVxcblxcbmV4cG9ydCBkZWZhdWx0IFwiKS5jb25jYXQobmFtZSwgXCI7XFxuXCIpOyB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUNaQSxNQUFNLENBQUNDLE9BQU8sR0FBRyxVQUFVQyxJQUFJLEVBQUU7RUFBRSxPQUFPLDJNQUEyTSxDQUFDQyxNQUFNLENBQUNELElBQUksRUFBRSw4TUFBOE0sQ0FBQyxDQUFDQyxNQUFNLENBQUNELElBQUksRUFBRSxLQUFLLENBQUM7QUFBRSxDQUFDIn0=
