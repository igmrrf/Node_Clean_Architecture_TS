import UseCase from "app/UseCase";

class GetContact extends UseCase {
  constructor({ contactRepository }) {
    super();
    this.contactRepository = contactRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting a contact
    return this.contactRepository.getOne(payload);
  }
}

export default GetContact;
