import UseCase from "app/UseCase";

class GetReviews extends UseCase {
  constructor({ reviewRepository }) {
    super();
    this.reviewRepository = reviewRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting all reviews
    return this.reviewRepository.get(payload);
  }
}

export default GetReviews;
