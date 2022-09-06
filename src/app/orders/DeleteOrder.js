import UseCase from "app/UseCase";

class DeleteOrder extends UseCase {
  constructor({ orderRepository }) {
    super();
    this.orderRepository = orderRepository;
  }

  execute(payload) {
    // Implement any logic needed for deleting a order
    return this.orderRepository.delete(payload);
  }
}

export default DeleteOrder;
