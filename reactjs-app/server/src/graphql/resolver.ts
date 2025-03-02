import { createResume, getResume, getAllResume } from "./resolverFn";

const resolvers = {
  Query: {
    getResume: getResume,
    getAllResume: getAllResume,
  },
  Mutation: {
    createResume: createResume,
  },
};

export default resolvers;
