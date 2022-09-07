module.exports = (name) => `import ResourceNotFoundError from "interfaces/rest/errors/ResourceNotFoundError";
import ConflictError from "interfaces/rest/errors/ConflictError";
import BaseRepository from "base/repositories";

class ${name}Repository extends BaseRepository {
  constructor({ models: { ${name} }, currentUser }) {
    super({ Model: ${name} });
    this.${name} = ${name};
    this.currentUser = currentUser;
  }

  async create(payload) {
    if (payload.email) {
      const existing${name} = await this.find({ description: payload.description }, undefined, {
        lean: true,
      });
      if (existing${name}) {
        throw new ConflictError("${name} already exists");
      }
    }
    const new${name} = await this.createDoc({
      ...payload,
      created_by: this.currentUser._id,
    });
    return new${name}.getPublicFields();
  }

  async update(payload) {
    const existing${name} = await this.findById(payload._id, undefined, { lean: true });
    if (!existing${name}) {
      throw new ResourceNotFoundError("${name} not found");
    }
    const new${name} = await this.findOneAndUpdate(
      {
        _id: payload._id,
      },
      { ...payload },
      { new: true }
    );
    return new${name}.getPublicFields();
  }

  async delete(payload) {
    const existing${name} = await this.findById(payload._id, undefined, { lean: true });
    if (!existing${name}) {
      throw new ResourceNotFoundError("${name} not found");
    }
    const remove${name} = await this.findOneAndDelete({
      _id: payload._id,
    });
    return remove${name}.getPublicFields();
  }

  async get() {
    const existing${name}s = await this.find({}, undefined, { lean: true }, true);
    return existing${name}s;
  }

  async getOne(payload) {
    const existing${name} = await this.findById(payload._id, undefined, { lean: true });
    if (!existing${name}) {
      throw new ResourceNotFoundError("${name} not found");
    }
    const get${name} = await this.find({ _id: payload._id }, undefined, {
      lean: true,
    });
    return get${name};
  }
}

export default ${name}Repository;
`;
