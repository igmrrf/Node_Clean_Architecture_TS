const { body, param } = require("express-validator");

class TodoValidation {
  constructor({ model: { User } }) {
    this.User = User;
  }

  create() {
    return [body("name").notEmpty().withMessage("Name is required")];
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

export default TodoValidation;
