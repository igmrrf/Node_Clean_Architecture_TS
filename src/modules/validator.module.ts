import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import InvalidPayloadError from "interfaces/rest/errors/InvalidPayloadError";

const validateError: any = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: object[] = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  throw new InvalidPayloadError("Invalid data provided", 422, {
    errors: extractedErrors,
  });
};

export default validateError;
