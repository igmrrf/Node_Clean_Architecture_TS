module.exports = (name) => `import UseCase from "app/UseCase";

class Create${name} extends UseCase {
  constructor({ ${name.toLowerCase()}Repository }) {
    super();
    this.${name.toLowerCase()}Repository = ${name.toLowerCase()}Repository;
  }

  execute(payload) {
    // Implement any logic needed for creating a ${name.toLowerCase()}
    return this.${name.toLowerCase()}Repository.create(payload);
  }
}

export default Create${name};
`;
