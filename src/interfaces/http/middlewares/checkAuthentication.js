/**
 * Access control policies
 */
import { asValue, Lifetime } from "awilix";
import Token from "helpers/jwt";
import UnauthorizedError from "../errors/Unauthorized";

/**
 * Authenticates requests made to the server
 */
class CheckAuth {
  constructor({ models: { User } }) {
    this.User = User;
  }

  /**
   * Returns the registered user making a request
   * @param {Object} req - Incoming request
   * @returns {{ error, user }}
   */
  async getUserFromRequest(req) {
    if (!req.headers.authorization) {
      return null;
    }
    const authorizationHeader = req.headers.authorization;
    const requestToken = authorizationHeader.split("Bearer").pop().trim();
    const payload = await Token.decodeJWT(requestToken);
    const user = await this.User.findById(payload.sub);
    return user;
  }

  /**
   * Allows only registered users to make requests
   * @param {Object} req - Incoming request
   * @param {Object} res - Server response
   * @param {Function} next - Next middleware
   */
  async isLoggedIn(req, res, next) {
    try {
      // eslint-disable-next-line no-unused-vars
      const user = await this.getUserFromRequest(req);
      if (!user) {
        throw new UnauthorizedError();
      }
      req.container.register({
        currentUser: asValue(user),
      });
      next();
    } catch (error) {
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
  async isStaff(req, res, next) {
    try {
      // eslint-disable-next-line no-unused-vars
      const staff = await this.getUserFromRequest(req);
      if (!staff || staff.type !== "staff") {
        throw new UnauthorizedError();
      }
      req.container.register({
        currentUser: asValue(staff),
      });
      next();
    } catch (error) {
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
  async isAdmin(req, res, next) {
    try {
      // eslint-disable-next-line no-unused-vars
      const staff = await this.getStaffFromRequest(req);

      if (staff.role !== "admin") {
        throw new UnauthorizedError();
      }
      req.container.register({
        currentUser: asValue(staff),
      });
      next();
    } catch (error) {
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
  async allowAny(req, res, next) {
    try {
      // eslint-disable-next-line no-unused-vars
      const user = await this.getUserFromRequest(req);
      req.container.register({
        currentUser: asValue(user, { lifetime: Lifetime.SCOPED }),
      });
      next();
    } catch (error) {
      if (Token.isJWTError(error)) {
        throw new UnauthorizedError(`Failed to verify request token - ${error.message}`);
      }
      throw error;
    }
  }
}

export default CheckAuth;
