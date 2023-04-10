import { body, param } from "express-validator";

const TodoValidation = {
  create: [body("name").notEmpty().withMessage("Name is required")],

  update: [],

  getAll: [],

  getOne: [
    param("id")
      .notEmpty()
      .withMessage("An id is required")
      .isMongoId()
      .withMessage("A valid MongoDB ID is required"),
  ],

  remove: [
    param("id")
      .notEmpty()
      .withMessage("An id is required")
      .isMongoId()
      .withMessage("A valid MongoDB ID is required"),
  ],
};

export default TodoValidation;
