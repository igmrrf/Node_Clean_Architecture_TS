import UseCase from "app/UseCase";

class CreateContact extends UseCase {
  constructor({ contactRepository }) {
    super();
    this.contactRepository = contactRepository;
  }

  execute(payload) {
    // Implement any logic needed for creating a contact
    return this.contactRepository.create(payload);
  }
}

export default CreateContact;
