module.exports = (
  name,
) => `const { body, param } = require("express-validator");

class ${name}Validation {
  constructor({ model: { User } }) {
    this.User = User;
  }

  create() {
    return [];
  }

  update() {
    return [];
  }

  getAll() {
    return [];
  }

  get() {
    return [
      param("id")
        .notEmpty()
        .withMessage("An id is required")
        .isMongoId()
        .withMessage("A valid MongoDB ID is required"),
    ];
  }

  delete() {
    return [
      param("id")
        .notEmpty()
        .withMessage("An id is required")
        .isMongoId()
        .withMessage("A valid MongoDB ID is required"),
    ];
  }
}

export default ${name}Validation;
`;
