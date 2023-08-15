/**
 * Access control policies
 */
import { asValue } from "awilix";
import container from "container";
import { NextFunction, Request, Response } from "express";
import Token from "helpers/jwt";
import UnauthorizedError from "interfaces/rest/errors/Unauthorized";

// declare module "express" {
//   interface Request {
//     container: AwilixContainer;
//   }
// }

/**
 * Authenticates requests made to the server
 */
class CheckAuth {
  User: any;

  constructor({ models: { User } }: { models: { User: any } }) {
    this.User = User;
  }

  /**
   * Returns the registered user making a request
   * @param {Object} req - Incoming request
   * @returns {{ error, user }}
   */
  async getUserFromRequest(req: Request) {
    if (!req.headers.authorization) {
      return null;
    }
    const authorizationHeader = req.headers.authorization;
    const requestToken: string | undefined = authorizationHeader.split("Bearer")?.pop()?.trim();
    const payload: any = await Token.decodeJWT(requestToken ? requestToken : "");
    const user = await this.User.findById(payload.sub);
    return user;
  }

  /**
   * Allows only registered users to make requests
   * @param {Object} req - Incoming request
   * @param {Object} res - Server response
   * @param {Function} next - Next middleware
   */
  async isLoggedIn(req: Request, res: Response, next: NextFunction) {
    try {
      // eslint-disable-next-line no-unused-vars
      const user = await this.getUserFromRequest(req);
      if (!user) {
        throw new UnauthorizedError();
      }
      container.register({
        currentUser: asValue(user),
      });
      next();
    } catch (error: any) {
      if (Token.isJWTError(error)) {
        throw new UnauthorizedError(`Failed to verify request token - ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Allows only registered Staffs to make requests
   * @param {Object} req - Incoming request
   * @param {Object} res - Server response
   * @param {Function} next - Next middleware
   */
  async isStaff(req: Request, res: Response, next: NextFunction) {
    try {
      // eslint-disable-next-line no-unused-vars
      const staff = await this.getUserFromRequest(req);
      if (!staff || staff.type !== "staff") {
        throw new UnauthorizedError();
      }
      container.register({
        currentUser: asValue(staff),
      });
      next();
    } catch (error: any) {
      if (Token.isJWTError(error)) {
        throw new UnauthorizedError(`Failed to verify request token - ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Allows only Admin roled Staffs to make requests
   * @param {Object} req - Incoming request
   * @param {Object} res - Server response
   * @param {Function} next - Next middleware
   */
  async isAdmin(req: Request, res: Response, next: NextFunction) {
    try {
      // eslint-disable-next-line no-unused-vars
      const staff = await this.getUserFromRequest(req);

      if (staff.role !== "admin") {
        throw new UnauthorizedError();
      }
      container.register({
        currentUser: asValue(staff),
      });
      next();
    } catch (error: any) {
      if (Token.isJWTError(error)) {
        throw new UnauthorizedError(`Failed to verify request token - ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Allows both authenticated and un-authenticated users to make requests
   * @param {Object} req - Incoming request
   * @param {Object} res - Server response
   * @param {Function} next - Next middleware
   */
  async allowAny(req: Request, res: Response, next: NextFunction) {
    try {
      // eslint-disable-next-line no-unused-vars
      const user = await this.getUserFromRequest(req);
      container.register({
        // currentUser: asValue( user, { lifetime: Lifetime.SCOPED }),
        currentUser: asValue(user),
      });
      next();
    } catch (error: any) {
      if (Token.isJWTError(error)) {
        throw new UnauthorizedError(`Failed to verify request token - ${error.message}`);
      }
      throw error;
    }
  }
}

export default CheckAuth;
