import WaitLists from "containers/waitList/WaitListModel";
import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { debug } from "winston";

const UserType = (types) =>
  new GraphQLObjectType({
    name: "User",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      age: { type: GraphQLInt },
      email: { type: GraphQLString },
      mobile: { type: GraphQLString },
      waitList: {
        type: types.waitListType,
        resolve(parent, args) {
          debug({ parent, args });
          return WaitLists.find({ userId: parent.id });
        },
      },
    }),
  });

module.exports = UserType;
