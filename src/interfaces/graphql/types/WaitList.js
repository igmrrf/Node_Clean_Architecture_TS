import Users from "containers/users/UserModel";
import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { debug } from "winston";

const WaitListType = (types) =>
  new GraphQLObjectType({
    name: "WaitList",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      pages: { type: GraphQLInt },
      user: {
        type: types.UserType,
        resolve(parent, args) {
          debug({ parent, args });
          return Users.findById(parent.userId);
        },
      },
    }),
  });

module.exports = WaitListType;
