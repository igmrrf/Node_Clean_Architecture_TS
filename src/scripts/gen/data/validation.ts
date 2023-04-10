const ValidationGenerator = (name: string) => `const { param } = require("express-validator");

const ${name}Validation = {

  create: [],

  update: [],

  getAll: [],

  getOne: [
      param("id")
        .notEmpty()
        .withMessage("An id is required")
        .isMongoId()
        .withMessage("A valid MongoDB ID is required"),
    ],

  remove: [
      param("id")
        .notEmpty()
        .withMessage("An id is required")
        .isMongoId()
        .withMessage("A valid MongoDB ID is required"),
    ],
}

export default ${name}Validation;
`;

export default ValidationGenerator;
