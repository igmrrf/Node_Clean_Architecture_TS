class UseCase {
  constructor() {
    if (new.target === UseCase) {
      throw new TypeError("Cannot construct instances directly");
    }
  }

  execute() {
    throw new Error("Method not implemented.");
  }
}

export default UseCase;
