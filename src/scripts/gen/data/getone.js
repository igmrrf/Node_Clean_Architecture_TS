module.exports = (name) => `import UseCase from "app/UseCase";

class Get${name} extends UseCase {
  constructor({ ${name.toLowerCase()}Repository }) {
    super();
    this.${name.toLowerCase()}Repository = ${name.toLowerCase()}Repository;
  }

  execute(payload) {
    // Implement any logic needed for getting a ${name.toLowerCase()}
    return this.${name.toLowerCase()}Repository.getOne(payload);
  }
}

export default Get${name};
`;
