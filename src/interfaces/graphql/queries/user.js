import Users from "containers/users/UserModel";
import { GraphQLID, GraphQLList } from "graphql";
import { debug } from "winston";
import { UserType } from "../types";

const userQuery = {
  type: UserType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve(parent, args) {
    debug({ parent, args });
    return Users.findById(args.id);
  },
};

const usersQuery = {
  type: new GraphQLList(UserType),
  async resolve(parent, args) {
    debug({ parent, args });
    return Users.find();
  },
};

module.exports = { userQuery, usersQuery };
