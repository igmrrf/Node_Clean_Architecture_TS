import UseCase from "app/UseCase";

class CreateOrder extends UseCase {
  constructor({ orderRepository }) {
    super();
    this.orderRepository = orderRepository;
  }

  execute(payload) {
    // Implement any logic needed for creating a order
    return this.orderRepository.create(payload);
  }
}

export default CreateOrder;
