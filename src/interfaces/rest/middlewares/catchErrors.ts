// eslint-disable-next-line arrow-body-style

import { NextFunction, Request, Response } from "express";

type Catch = (arg1: NextFunction) => void;

type CatchErrorFunction = (arg1: Request, arg2: Response, arg3: NextFunction) => { catch: Catch };

/**
 * Catches errors thrown in controllers
 * @param {Function} fn - The controller function
 */
const catchErrors = (fn: CatchErrorFunction) => (req: Request, res: Response, next: NextFunction) =>
  fn(req, res, next).catch(next);

export default catchErrors;
