module.exports = (name) => `import UseCase from "app/UseCase";

class Update${name} extends UseCase {
  constructor({ ${name.toLowerCase()}Repository }) {
    super();
    this.${name.toLowerCase()}Repository = ${name.toLowerCase()}Repository;
  }

  execute(payload) {
    // Implement any logic needed for updating a ${name.toLowerCase()}
    return this.${name.toLowerCase()}Repository.update(payload);
  }
}

export default Update${name};
`;
