import UseCase from "app/UseCase";

class CreateArticle extends UseCase {
  constructor({ articleRepository }) {
    super();
    this.articleRepository = articleRepository;
  }

  execute(payload) {
    // Implement any logic needed for creating a article
    return this.articleRepository.create(payload);
  }
}

export default CreateArticle;
