import HttpStatus from "http-status-codes";
import BaseError from "./BaseError";

class ConflictError extends BaseError {
  constructor(message = "Resource already exists", status = HttpStatus.CONFLICT, data) {
    super(message, status, data);
    this.name = "ConflictError";
  }
}

export default ConflictError;
