const ModelGenerator = (name: string) => `import mongoose from "mongoose";
import ${name} from "./${name}Entity";
import { I${name} } from "./${name}Types";

const ${name.toLowerCase()}Schema = new mongoose.Schema<I${name}>(
  {
     updated_by: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
     created_by: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

${name.toLowerCase()}Schema.loadClass(${name});

export default mongoose.model<I${name}>("${name}", ${name.toLowerCase()}Schema);
`;

export default ModelGenerator;
