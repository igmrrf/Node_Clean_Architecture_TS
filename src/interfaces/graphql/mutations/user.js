import Users from "containers/users/UserModel";
import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { debug } from "winston";
import { UserType } from "../types";

const createUser = {
  type: UserType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    mobile: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
  },
  async resolve(parent, args) {
    let user;
    try {
      const { email, mobile, name, age } = args;
      debug({ parent, args });
      user = await new Users({
        name,
        age,
        mobile,
        email,
      }).save();
    } catch (error) {
      debug(error);
    }
    return user;
  },
};

const updateUser = {
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

const deleteUser = {
  type: new GraphQLList(UserType),
  resolve(parent, args) {
    debug({ parent, args });
    return Users.find();
  },
};

module.exports = { createUser, updateUser, deleteUser };
