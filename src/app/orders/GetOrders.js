import UseCase from "app/UseCase";

class GetOrders extends UseCase {
  constructor({ orderRepository }) {
    super();
    this.orderRepository = orderRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting all orders
    return this.orderRepository.get(payload);
  }
}

export default GetOrders;
