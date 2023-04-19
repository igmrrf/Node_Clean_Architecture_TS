/* eslint-disable no-unused-vars */
import { Request, Response } from "express";
import NotImplementedError from "../errors/NotImplementedError";
import ResponseManager from "../response/ResponseBuilder";

class BaseController {
  responseBuilder: any;
  constructor() {
    if (new.target === BaseController) {
      throw new TypeError("Cannot construct BaseController instances directly");
    }

    this.responseBuilder = ResponseManager;
  }

  async getAll(req: Request, res: Response) {
    throw new NotImplementedError();
  }

  async getOne(req: Request, res: Response) {
    throw new NotImplementedError();
  }

  async create(req: Request, res: Response) {
    throw new NotImplementedError();
  }

  async update(req: Request, res: Response) {
    throw new NotImplementedError();
  }

  async remove(req: Request, res: Response) {
    throw new NotImplementedError();
  }
}
export default BaseController;
