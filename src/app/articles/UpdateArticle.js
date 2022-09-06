import UseCase from "app/UseCase";

class UpdateArticle extends UseCase {
  constructor({ articleRepository }) {
    super();
    this.articleRepository = articleRepository;
  }

  execute(payload) {
    // Implement any logic needed for updating a article
    return this.articleRepository.update(payload);
  }
}

export default UpdateArticle;
