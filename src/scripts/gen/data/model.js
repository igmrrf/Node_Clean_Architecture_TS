module.exports = (name) => `import mongoose from "mongoose";
import ${name} from "./${name}Entity";

const ${name.toLowerCase()}Schema = new mongoose.Schema(
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
      retainKeyOrder: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

${name.toLowerCase()}Schema.loadClass(${name});

export default mongoose.model("${name}", ${name.toLowerCase()}Schema);
`;
