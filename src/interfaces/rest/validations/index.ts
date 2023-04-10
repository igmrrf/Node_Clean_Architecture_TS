/* eslint-disable no-unused-vars */
import { ClassOrFunctionReturning } from "awilix-express";
import { param } from "express-validator";
import ResponseBuilder from "../response/ResponseBuilder";

class BaseValidation {
  responseBuilder: ClassOrFunctionReturning;
  constructor() {
    if (new.target === BaseValidation) {
      throw new TypeError("Cannot construct BaseController instances directly");
    }
    this.responseBuilder = ResponseBuilder;
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

  create() {
    return [];
  }

  update() {
    return [];
  }

  remove() {
    return [
      param("id")
        .notEmpty()
        .withMessage("An id is required")
        .isMongoId()
        .withMessage("A valid MongoDB ID is required"),
    ];
  }
}
export default BaseValidation;
