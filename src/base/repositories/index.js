import mongoose from "mongoose";
import ResourceNotFoundError from "interfaces/http/errors/ResourceNotFoundError";
import InvalidPayloadError from "interfaces/http/errors/InvalidPayloadError";

class BaseRepository {
  /**
   * @constructor
   * @param {*} param0
   */
  constructor({ Model }) {
    this.Collection = Model;

    this.modelName = this.Collection.modelName;
  }

  // eslint-disable-next-line class-methods-use-this
  isValidId(documentId) {
    return mongoose.Types.ObjectId.isValid(documentId);
  }

  async count(query = {}) {
    return this.Collection.countDocuments(query);
  }

  async totalCount() {
    return this.Collection.estimatedDocumentCount();
  }

  /* Full list of option - https://mongoosejs.com/docs/api.html#query_Query-setOptions */

  /**
   *
   * @param {*} query
   * @param {*} projection
   * @param {*} options
   * @param {*} multiple
   * @returns {Document}
   * @memberof BaseRepository
   */
  async find(query = {}, projection = {}, options = {}, multiple = false) {
    // eslint-disable-next-line no-nested-ternary
    const results = multiple
      ? this.Collection.find(query, projection, options)
      : options.session
      ? this.Collection.findOne(query)
          .session(options.session)
          .select(projection)
      : this.Collection.findOne(query, projection, options);

    return results.exec();
  }

  /**
   *
   * @param {*} documentId
   * @param {*} projection
   * @param {*} options
   * @returns {Document}
   * @memberof BaseRepository
   */
  async findById(documentId, projection = {}, options = {}) {
    if (!this.isValidId(documentId)) {
      throw new InvalidPayloadError(`Invalid ${this.modelName}Id`);
    }
    const document = options.session
      ? await this.Collection.findById(documentId)
          .session(options.session)
          .select(projection)
          .setOptions(options)
      : await this.Collection.findById(documentId)
          .select(projection)
          .setOptions(options);

    if (!document) {
      throw new ResourceNotFoundError(`${this.modelName} not found`);
    }

    return document;
  }

  /**
   *
   * @param {*} query
   * @param {*} update
   * @param {*} options
   * @returns {Document}
   * @memberof BaseRepository
   */
  async findOneAndUpdate(query = {}, update = {}, options = {}) {
    if (query._id && !this.isValidId(query._id)) {
      throw new InvalidPayloadError(`Invalid ${this.modelName}Id`);
    }
    const document = await this.Collection.findOneAndUpdate(
      query,
      update,
      options,
    );

    if (!document) {
      throw new ResourceNotFoundError(`${this.modelName} not found`);
    }

    return document;
  }

  /**
   *
   * @param {*} body
   * @param {*} session
   * @returns {Document}
   * @memberof BaseRepository
   */
  async createDoc(body, session) {
    let document = new this.Collection(body);

    document = session ? document.save({ session }) : document.save();

    return document;
  }

  /**
   * Update a document
   * @param {*} query
   * @param {Object} body
   * @param {Object} options
   * @returns {Document}
   * @memberof BaseRepository
   */
  async update(query, update = {}, options = {}) {
    if (query._id && !this.isValidId(query._id)) {
      throw new InvalidPayloadError(`Invalid ${this.modelName}Id`);
    }
    const document = await this.Collection.update(query, update, options);

    if (!document) {
      throw new ResourceNotFoundError(`${this.modelName} not found`);
    }

    return document;
  }

  /**
   *
   * @param {*} query
   * @param {*} update
   * @param {*} options
   * @returns {Document}
   * @memberof BaseRepository
   */
  async findOneAndDelete(query = {}, options = {}) {
    if (query._id && !this.isValidId(query._id)) {
      throw new InvalidPayloadError(`Invalid ${this.modelName}Id`);
    }
    const document = await this.Collection.findOneAndDelete(query, options);

    if (!document) {
      throw new ResourceNotFoundError(`${this.modelName} not found`);
    }

    return document;
  }
}

export default BaseRepository;
