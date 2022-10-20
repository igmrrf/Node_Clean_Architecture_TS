const { GraphQLObjectType, GraphQLSchema } = require("graphql");
const { userQuery, usersQuery } = require("./queries/user");
const { waitListQuery, waitListsQuery } = require("./queries/waitList");
const {
  createWaitList: addWaitList,
  updateWaitList: editWaitList,
  deleteWaitList: removeWaitList,
} = require("./mutations/waitList");
const { createUser: addUser, updateUser: editUser, deleteUser: removeUser } = require("./mutations/user");

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    waitList: waitListQuery,
    waitLists: waitListsQuery,
    user: userQuery,
    users: usersQuery,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser,
    removeUser,
    editUser,
    addWaitList,
    removeWaitList,
    editWaitList,
  },
});

module.exports = new GraphQLSchema({ query: Query, mutation: Mutation });
