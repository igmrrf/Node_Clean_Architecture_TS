const GetAllGenerator = (name: string) => `import UseCase from "app/UseCase";
import ${name}Repository from "containers/${name.toLowerCase()}s/${name}Repository";

class Get${name}s<I${name}> extends UseCase<I${name}>  {
  ${name.toLowerCase()}Repository: ${name}Repository;

  constructor({ ${name.toLowerCase()}Repository }:{ ${name.toLowerCase()}Repository: ${name}Repository }) {
    super();
    this.${name.toLowerCase()}Repository = ${name.toLowerCase()}Repository;
  }

  execute(payload: any) {
    // Implement any logic needed for getting all ${name.toLowerCase()}s
    return this.${name.toLowerCase()}Repository.get(payload);
  }
}

 export default Get${name}s;
`;

export default GetAllGenerator;
