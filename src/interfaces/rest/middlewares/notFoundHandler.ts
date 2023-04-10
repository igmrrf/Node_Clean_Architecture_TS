import { NextFunction, Request, Response } from "express";
import ResourceNotFoundError from "../errors/ResourceNotFoundError";

/**
 * Handle 404 errors
 * @param {Object} req - Incoming request
 * @param {Object} res - Server response
 */
const Error404 = (req: Request, res: Response, next: NextFunction): void => {
  next(
    new ResourceNotFoundError(
      `You have tried to access an API endpoint (${req.url}) with a '${req.method}' method that does not exist.`,
    ),
  );
};
export default Error404;
