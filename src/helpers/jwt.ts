import config from "config";
import jwt, { SignOptions } from "jsonwebtoken";

class Token {
  /**
   * Generates a token for a user
   * @param {String} userId - The ID of the user
   * @returns {String} - The generated token
   */
  static generate(payload: any, options?: SignOptions) {
    const { userId, ...data } = payload;
    const jwtIssuer = config.get("app.jwtIssuer");
    const jwtAudience = config.get("app.jwtAudience");
    const jwtSecret = config.get("app.jwtSecret");

    const token = jwt.sign(
      {
        iss: jwtIssuer,
        aud: jwtAudience,
        sub: userId,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 6, // Expires in 6 hrs
        ...data,
      },
      jwtSecret,
      options,
    );

    return token;
  }

  /**
   * Decodes a JWT and returns it's payload
   * @param {String} token - JWT string to decode
   * @returns {Promise<Object>} A promise that resolves to the JWT payload
   */
  static decodeJWT(token: string) {
    const jwtSecret = config.get("app.jwtSecret");
    return new Promise((resolve, reject) => {
      jwt.verify(token, jwtSecret, (err: any, payload: any) => {
        if (err) {
          reject(err);
        }
        resolve(payload);
      });
    });
  }

  /**
   * Checks if an error is as a result of an invalid JWT
   * @param {Error} error - An error object
   * @returns {Boolean} true if the error is a JWT Error, false otherwise
   */
  static isJWTError(error: any) {
    const jwtErrors = ["TokenExpiredError", "JsonWebTokenError", "NotBeforeError"];
    return jwtErrors.includes(error.name);
  }
}

export default Token;
