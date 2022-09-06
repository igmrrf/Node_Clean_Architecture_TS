import UseCase from "app/UseCase";

class GetUserOrders extends UseCase {
  constructor({ orderRepository }) {
    super();
    this.orderRepository = orderRepository;
  }

  execute(payload) {
    // Implement any logic needed for creating a order
    return this.orderRepository.getUserOrders(payload);
  }
}

export default GetUserOrders;
