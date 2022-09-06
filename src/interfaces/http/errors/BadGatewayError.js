import HttpStatus from "http-status-codes";
import BaseError from "./BaseError";

class BadGatewayError extends BaseError {
  constructor(
    message = "Could not complete your request. Please try again later.",
    status = HttpStatus.BAD_GATEWAY,
    data,
  ) {
    super(message, status, data);
    this.name = "BadGatewayError";
  }
}

export default BadGatewayError;
