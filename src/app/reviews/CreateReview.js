import UseCase from "app/UseCase";

class CreateReview extends UseCase {
  constructor({ reviewRepository }) {
    super();
    this.reviewRepository = reviewRepository;
  }

  execute(payload) {
    // Implement any logic needed for creating a review
    return this.reviewRepository.create(payload);
  }
}

export default CreateReview;
