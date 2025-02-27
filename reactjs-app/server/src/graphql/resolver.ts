import { createResume, getResume } from "./resolverFn";

const resolvers = {
  Query: {
    getResume: getResume,
  },
  Mutation: {
    createResume: createResume,
  },
};

export default resolvers;
