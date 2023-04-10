const CreateGenerator = (name: string) => `import UseCase from "app/UseCase";
import ${name}Repository from "containers/${name.toLowerCase()}s/${name}Repository";

class Create${name}<I${name}> extends UseCase<I${name}>  {
  ${name.toLowerCase()}Repository: ${name}Repository;

  constructor({ ${name.toLowerCase()}Repository }:{ ${name.toLowerCase()}Repository: ${name}Repository }) {
    super();
    this.${name.toLowerCase()}Repository = ${name.toLowerCase()}Repository;
  }

  execute(payload: any) {
    // Implement any logic needed for creating a ${name.toLowerCase()}
    return this.${name.toLowerCase()}Repository.create(payload);
  }
}

export default Create${name};
`;

export default CreateGenerator;
