import WaitList from "containers/waitList/WaitListModel";
import { GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString } from "graphql";
import { debug } from "winston";
import { WaitListType } from "../types";

const createWaitList = {
  type: WaitListType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    pages: { type: new GraphQLNonNull(GraphQLInt) },
    userId: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve(parent, args) {
    debug({ parent, args });
    const { name, pages, userId } = args;
    const waitList = new WaitList({
      name,
      pages,
      userId,
    });
    return waitList.save();
  },
};

const updateWaitList = {
  type: WaitListType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve(parent, args) {
    debug({ parent, args });
    return WaitList.findById(args.id);
  },
};

const deleteWaitList = {
  type: new GraphQLList(WaitListType),
  resolve(parent, args) {
    debug({ parent, args });
    return WaitList.find();
  },
};

module.exports = {
  createWaitList,
  updateWaitList,
  deleteWaitList,
};
