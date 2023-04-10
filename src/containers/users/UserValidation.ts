import { body, param } from "express-validator";

const UserValidation = {
  create: [
    body("username").notEmpty().withMessage("Username required"),
    body("email").notEmpty().withMessage("Email required"),
    body("discord").notEmpty().withMessage("Discord username required"),
    body("twitter").notEmpty().withMessage("Twitter username required"),
  ],

  login: [body("username").notEmpty().withMessage("Wallet address required")],

  update: [
    body("username").notEmpty().withMessage("Username required"),
    body("discord").notEmpty().withMessage("Discord username required"),
    body("twitter").notEmpty().withMessage("Twitter username required"),
    body("verified"),
  ],

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

export default UserValidation;
