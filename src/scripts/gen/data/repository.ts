const RepositoryGenerator = (
  name: string,
) => `import ResourceNotFoundError from "interfaces/rest/errors/ResourceNotFoundError";
import ConflictError from "interfaces/rest/errors/ConflictError";
import BaseRepository from "base/repositories";
import { HydratedDocument, Models } from "mongoose";
import ${name} from "./${name}Entity";
import { I${name} } from "./${name}Types";

class ${name}Repository extends BaseRepository {
  ${name}: Models;
  currentUser: HydratedDocument<I${name}>;

  constructor({ models: { ${name} }, currentUser }: { models: any; currentUser: any }) {
    super({ Model: ${name} });
    this.${name} = ${name};
    this.currentUser = currentUser;
  }

  async create(payload: any): Promise<any> {
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

  async update(payload: any): Promise<any> {
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

  async delete(payload: any): Promise<any>{
    const existing${name} = await this.findById(payload._id, undefined, { lean: true });
    if (!existing${name}) {
      throw new ResourceNotFoundError("${name} not found");
    }
    const remove${name} = await this.findOneAndDelete({
      _id: payload._id,
    });
    return remove${name}.getPublicFields();
  }

  async getAll(payload: any = {}): Promise<any> {
    const existing${name}s = await this.find(payload, undefined, { lean: true }, true);
    return existing${name}s;
  }

  async getOne(payload: any): Promise<any> {
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

export default RepositoryGenerator;
