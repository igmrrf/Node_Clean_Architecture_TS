import WaitLists from "containers/waitlist/WaitListModel";
import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
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
      book: {
        type: new GraphQLList(types.BookType),
        resolve(parent, args) {
          debug({ parent, args });
          return WaitLists.find({ userId: parent.id });
        },
      },
    }),
  });

module.exports = UserType;
