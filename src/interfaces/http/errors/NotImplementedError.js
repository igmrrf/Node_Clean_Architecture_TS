import HttpStatus from "http-status-codes";
import BaseError from "./BaseError";

class NotImplementedError extends BaseError {
  constructor(
    message = "The requested resource/method has not been implemented",
    status = HttpStatus.NOT_IMPLEMENTED,
    data,
  ) {
    super(message, status, data);
    this.name = "NotImplementedError";
  }
}

export default NotImplementedError;
