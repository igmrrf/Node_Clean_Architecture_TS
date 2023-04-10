const EntityGenerator = (name: string) => `/**
 https://mongoosejs.com/docs/4.x/docs/advanced_schemas.html
 *A class method maps to a schema method, a static method maps to a schema static,
 and getters/setters map to virtuals.
*/
import { Types } from "mongoose";
import { I${name} } from "./${name}Types";

class ${name} {
  _id!: string;
  created_by?: Types.ObjectId;
  created_at!: Date;
  updated_at?: Date;
  ModelObject: any;

  constructor(ModelObject: any) {
    this.ModelObject = ModelObject;
  }

  getPublicFields(): I${name} {
    return {
      _id: this._id,
      created_by: this.created_by,
      created_at: this.created_at,
      updated_at: this.updated_at,
    };
  }
}

export default ${name};
`;

export default EntityGenerator;
