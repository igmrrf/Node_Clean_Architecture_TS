const DeleteGenerator = (name: string) => `import UseCase from "app/UseCase";
import ${name}Repository from "containers/${name.toLowerCase()}s/${name}Repository";

class Delete${name}<I${name}> extends UseCase<I${name}>  {
  ${name.toLowerCase()}Repository: ${name}Repository;

  constructor({ ${name.toLowerCase()}Repository }:{ ${name.toLowerCase()}Repository: ${name}Repository }) {
    super();
    this.${name.toLowerCase()}Repository = ${name.toLowerCase()}Repository;
  }

  execute(payload: any) {
    // Implement any logic needed for deleting a ${name.toLowerCase()}
    return this.${name.toLowerCase()}Repository.delete(payload);
  }
}

export default Delete${name};
`;

export default DeleteGenerator;
