const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { authorQuery, authorsQuery } = require("./queries/user");
const { bookQuery, booksQuery } = require("./queries/waitlist");
const { createBook: addBook, updateBook: editBook, deleteBook: removeBook } = require("./mutations/waitlist");
const {
  createAuthor: addAuthor,
  updateAuthor: editAuthor,
  deleteAuthor: removeAuthor,
} = require("./mutations/user");

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    book: bookQuery,
    books: booksQuery,
    author: authorQuery,
    authors: authorsQuery,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor,
    removeAuthor,
    editAuthor,
    addBook,
    removeBook,
    editBook,
  },
});

module.exports = new GraphQLSchema({ query: Query, mutation: Mutation });
