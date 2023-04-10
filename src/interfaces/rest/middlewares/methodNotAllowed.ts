import { NextFunction, Request, Response } from "express";
import MethodNotAllowedHandler from "../errors/MethodNotAllowedError";

/**
 * Responds with HTTP status 405 when a wrong HTTP verb is used to access an endpoint
 * @param {Object} req - Incoming request
 * @param {Object} res - Server response
 */
// eslint-disable-next-line no-unused-vars
const methodNotAllowedHandler: any = (req: Request, res: Response, next: NextFunction) => {
  throw new MethodNotAllowedHandler(
    `http method '${req.method}' for API endpoint (${req.originalUrl}) is not allowed.`,
  );
};

export default methodNotAllowedHandler;
