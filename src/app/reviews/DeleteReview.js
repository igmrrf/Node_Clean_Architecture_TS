import UseCase from "app/UseCase";

class DeleteReview extends UseCase {
  constructor({ reviewRepository }) {
    super();
    this.reviewRepository = reviewRepository;
  }

  execute(payload) {
    // Implement any logic needed for deleting a review
    return this.reviewRepository.delete(payload);
  }
}

export default DeleteReview;
