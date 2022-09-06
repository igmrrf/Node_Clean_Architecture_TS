import UseCase from "app/UseCase";

class GetReview extends UseCase {
  constructor({ reviewRepository }) {
    super();
    this.reviewRepository = reviewRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting a review
    return this.reviewRepository.getOne(payload);
  }
}

export default GetReview;
