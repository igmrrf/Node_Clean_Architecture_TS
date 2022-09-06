import UseCase from "app/UseCase";

class DeleteArticle extends UseCase {
  constructor({ articleRepository }) {
    super();
    this.articleRepository = articleRepository;
  }

  execute(payload) {
    // Implement any logic needed for deleting a article
    return this.articleRepository.delete(payload);
  }
}

export default DeleteArticle;
