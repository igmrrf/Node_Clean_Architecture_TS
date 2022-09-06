import UseCase from "app/UseCase";

class UpdateOrder extends UseCase {
  constructor({ orderRepository }) {
    super();
    this.orderRepository = orderRepository;
  }

  execute(payload) {
    // Implement any logic needed for updating a order
    return this.orderRepository.update(payload);
  }
}

export default UpdateOrder;
