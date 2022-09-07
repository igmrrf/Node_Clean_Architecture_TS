/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import ResourceNotFoundError from "interfaces/rest/errors/ResourceNotFoundError";
import ConflictError from "interfaces/rest/errors/ConflictError";
import { waitListWelcome } from "utils/mail";
import BaseRepository from "base/repositories";

class WaitListRepository extends BaseRepository {
  constructor({ models: { WaitList } }) {
    super({ Model: WaitList });
    this.WaitList = WaitList;
  }

  async create(payload) {
    const existingWaitList = await this.find({ email: payload.email }, { email: 1 }, { lean: true });

    if (existingWaitList) {
      throw new ConflictError("You have already joined the waiting list");
    }
    await waitListWelcome(payload.email);
    const newWaitList = await this.createDoc({
      ...payload,
    });

    return newWaitList.getPublicFields();
  }

  async update(payload) {
    const updatedWaitList = await this.findOneAndUpdate(
      {
        _id: payload._id,
      },
      { ...payload },
      { new: true },
    );
    return updatedWaitList.getPublicFields();
  }

  async get() {
    const existingWaitList = await this.find({}, undefined, { lean: true }, true);
    return existingWaitList;
  }

  async getOne(payload) {
    const existingWaitList = await this.findById(payload._id);
    if (!existingWaitList) {
      throw new ResourceNotFoundError("Not found within Wait list");
    }
    return existingWaitList.getPublicFields();
  }

  async delete(payload) {
    const existingWaitList = await this.findById(payload._id, undefined, {
      lean: true,
    });

    if (!existingWaitList) {
      throw new ResourceNotFoundError("Not found within the Wait List");
    }

    const deletedWaitList = await this.findOneAndDelete({ _id: payload._id });

    return deletedWaitList.getPublicFields();
  }
}
export default WaitListRepository;
