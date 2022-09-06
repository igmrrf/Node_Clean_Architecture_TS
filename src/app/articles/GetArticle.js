import UseCase from "app/UseCase";

class GetArticle extends UseCase {
  constructor({ articleRepository }) {
    super();
    this.articleRepository = articleRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting a article
    return this.articleRepository.getOne(payload);
  }
}

export default GetArticle;
