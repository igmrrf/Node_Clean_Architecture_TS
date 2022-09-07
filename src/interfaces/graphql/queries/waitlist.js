import WaitLists from "containers/waitlist/WaitListModel";
import { GraphQLID, GraphQLList } from "graphql";
import { debug } from "winston";
import { WaitListType } from "../types";

const waitlistQuery = {
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

const waitlistsQuery = {
  type: new GraphQLList(WaitListType),
  resolve(parent, args) {
    debug({ parent, args });
    return WaitLists.find();
  },
};

module.exports = {
  waitlistQuery,
  waitlistsQuery,
};
