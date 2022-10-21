import HttpStatus from "http-status-codes";
import BaseError from "./BaseError";

class UnauthorizedError extends BaseError {
  constructor(
    message = "Authorization is required to access this API endpoint.",
    status = HttpStatus.UNAUTHORIZED,
    data,
  ) {
    super(message, status, data);
    this.name = "UnauthorizedError";
  }
}

export default UnauthorizedError;
