class UseCase<T> {
  constructor() {
    if (new.target === UseCase) {
      throw new TypeError("Cannot construct instances directly");
    }
  }

  execute(payload: T): Promise<T> {
    throw new Error("Method not implemented.");
  }
}

export default UseCase;
