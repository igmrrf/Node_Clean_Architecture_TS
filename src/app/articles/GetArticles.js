import UseCase from "app/UseCase";

class GetArticles extends UseCase {
  constructor({ articleRepository }) {
    super();
    this.articleRepository = articleRepository;
  }

  execute(payload) {
    // Implement any logic needed for getting all articles
    return this.articleRepository.get(payload);
  }
}

export default GetArticles;
