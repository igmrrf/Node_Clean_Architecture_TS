const TypesGenerator = (name: string) => `import { Types } from "mongoose";

export interface I${name}{
  _id: string;
  created_by?: Types.ObjectId;
  updated_by?: Types.ObjectId;
  updated_at?: Date;
  created_at?: Date;
}

`;

export default TypesGenerator;
