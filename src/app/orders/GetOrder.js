import UseCase from "app/UseCase";

class GetOrder extends UseCase {
  constructor({ orderRepository }) {
    super();
    this.orderRepository = orderRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting a order
    return this.orderRepository.getOne(payload);
  }
}

export default GetOrder;
