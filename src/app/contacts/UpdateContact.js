import UseCase from "app/UseCase";

class UpdateContact extends UseCase {
  constructor({ contactRepository }) {
    super();
    this.contactRepository = contactRepository;
  }

  execute(payload) {
    // Implement any logic needed for updating a contact
    return this.contactRepository.update(payload);
  }
}

export default UpdateContact;
