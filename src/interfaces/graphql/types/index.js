const WaitListTypeInject = require("./WaitList");
const UserTypeInject = require("./User");

const types = {};
types.WaitListType = WaitListTypeInject(types);
types.UserType = UserTypeInject(types);

const { UserType } = types;
const { WaitListType } = types;

module.exports = { UserType, WaitListType };
