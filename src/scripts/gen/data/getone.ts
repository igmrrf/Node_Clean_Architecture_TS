const GetOneGenerator = (name: string) => `import UseCase from "app/UseCase";
import ${name}Repository from "containers/${name.toLowerCase()}s/${name}Repository";

class Get${name}<I${name}> extends UseCase<I${name}>  {
  ${name.toLowerCase()}Repository: ${name}Repository;

  constructor({ ${name.toLowerCase()}Repository }:{ ${name.toLowerCase()}Repository: ${name}Repository }) {
    super();
    this.${name.toLowerCase()}Repository = ${name.toLowerCase()}Repository;
  }

  execute(payload: any) {
    // Implement any logic needed for getting a ${name.toLowerCase()}
    return this.${name.toLowerCase()}Repository.getOne(payload);
  }
}

export default Get${name};
`;

export default GetOneGenerator;
