import UseCase from "app/UseCase";

class UpdateReview extends UseCase {
  constructor({ reviewRepository }) {
    super();
    this.reviewRepository = reviewRepository;
  }

  execute(payload) {
    // Implement any logic needed for updating a review
    return this.reviewRepository.update(payload);
  }
}

export default UpdateReview;
