const UpdateGenerator = (name: string) => `import UseCase from "app/UseCase";
import ${name}Repository from "containers/${name.toLowerCase()}s/${name}Repository";

class Update${name}<I${name}> extends UseCase<I${name}>  {
  ${name.toLowerCase()}Repository: ${name}Repository;

  constructor({ ${name.toLowerCase()}Repository }:{ ${name.toLowerCase()}Repository: ${name}Repository }) {
    super();
    this.${name.toLowerCase()}Repository = ${name.toLowerCase()}Repository;
  }

  execute(payload: any) {
    // Implement any logic needed for creating a ${name.toLowerCase()}
    return this.${name.toLowerCase()}Repository.update(payload);
  }
}

export default Update${name};
`;

export default UpdateGenerator;
