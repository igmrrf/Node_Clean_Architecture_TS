import { validationResult } from "express-validator";
import InvalidPayloadError from "interfaces/rest/errors/InvalidPayloadError";

const validateError = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  throw new InvalidPayloadError("Invalid data provided", 422, {
    errors: extractedErrors,
  });
};

export default validateError;
