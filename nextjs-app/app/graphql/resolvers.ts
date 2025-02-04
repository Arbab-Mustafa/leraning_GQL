import { addUser, getUsers } from "./_res/index";

export const resolvers = {
  Query: {
    getUsers: getUsers,
  },
  Mutation: {
    addUser: addUser,
  },
};
