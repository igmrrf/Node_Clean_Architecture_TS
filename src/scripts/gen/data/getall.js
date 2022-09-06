module.exports = (name) => `import UseCase from "app/UseCase";

class Get${name}s extends UseCase {
  constructor({ ${name.toLowerCase()}Repository }) {
    super();
    this.${name.toLowerCase()}Repository = ${name.toLowerCase()}Repository;
  }

  execute(payload) {
    // Implement any logic needed for getting all ${name.toLowerCase()}s
    return this.${name.toLowerCase()}Repository.get(payload);
  }
}

 export default Get${name}s;
`;
