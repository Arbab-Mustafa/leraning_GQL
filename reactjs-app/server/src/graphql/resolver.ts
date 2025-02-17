import { getAllUser } from "./resolverFn";

const resolvers = {
  Query: {
    hello: () => "Hello Worldc2",
    getUsers: getAllUser,
  },
};

export default resolvers;
