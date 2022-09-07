const BookTypeInject = require("./WaitList");
const AuthorTypeInject = require("./User");

const types = {};
types.BookType = BookTypeInject(types);
types.AuthorType = AuthorTypeInject(types);

const { BookType } = types;
const { AuthorType } = types;

module.exports = { BookType, AuthorType };
