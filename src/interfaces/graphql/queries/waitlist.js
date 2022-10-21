import WaitLists from "containers/waitList/WaitListModel";
import { GraphQLID, GraphQLList } from "graphql";
import { debug } from "winston";
import { WaitListType } from "../types";

const waitListQuery = {
  type: WaitListType,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve(parent, args) {
    debug({ parent, args });

    return WaitLists.findById(args.id);
  },
};

const waitListsQuery = {
  type: new GraphQLList(WaitListType),
  resolve(parent, args) {
    debug({ parent, args });
    return WaitLists.find();
  },
};

module.exports = {
  waitListQuery,
  waitListsQuery,
};
