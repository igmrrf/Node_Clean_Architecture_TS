import HttpStatus from "http-status-codes";
import BaseError from "./BaseError";

class MethodNotAllowedError extends BaseError {
  constructor(message = "method not allowed", status = HttpStatus.METHOD_NOT_ALLOWED, data) {
    super(message, status, data);
    this.name = "MethodNotAllowedError";
  }
}

export default MethodNotAllowedError;
