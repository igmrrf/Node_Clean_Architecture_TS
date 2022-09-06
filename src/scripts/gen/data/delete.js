module.exports = (name) => `import UseCase from "app/UseCase";

class Delete${name} extends UseCase {
  constructor({ ${name.toLowerCase()}Repository }) {
    super();
    this.${name.toLowerCase()}Repository = ${name.toLowerCase()}Repository;
  }

  execute(payload) {
    // Implement any logic needed for deleting a ${name.toLowerCase()}
    return this.${name.toLowerCase()}Repository.delete(payload);
  }
}

export default Delete${name};
`;
