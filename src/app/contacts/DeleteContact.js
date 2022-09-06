import UseCase from "app/UseCase";

class DeleteContact extends UseCase {
  constructor({ contactRepository }) {
    super();
    this.contactRepository = contactRepository;
  }

  execute(payload) {
    // Implement any logic needed for deleting a contact
    return this.contactRepository.delete(payload);
  }
}

export default DeleteContact;
