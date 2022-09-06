import UseCase from "app/UseCase";

class GetContacts extends UseCase {
  constructor({ contactRepository }) {
    super();
    this.contactRepository = contactRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting all contacts
    return this.contactRepository.get(payload);
  }
}

export default GetContacts;
