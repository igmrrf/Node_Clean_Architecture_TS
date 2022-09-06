import HttpStatus from "http-status-codes";
import BaseError from "./BaseError";

class ForbiddenError extends BaseError {
  constructor(
    message = "You do not have permission to access this API endpoint.",
    status = HttpStatus.FORBIDDEN,
    data,
  ) {
    super(message, status, data);
    this.name = "ForbiddenError";
  }
}

export default ForbiddenError;
