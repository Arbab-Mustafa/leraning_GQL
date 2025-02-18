import {
  assignCourseToUser,
  createCourse,
  createUser,
  getAllUser,
  getCourses,
} from "./resolverFn";

const resolvers = {
  Query: {
    getUsers: getAllUser,
    getCourses: getCourses,
  },

  Mutation: {
    createUser: createUser,
    createCourse: createCourse,
    assignCourseToUser: assignCourseToUser,
  },
};

export default resolvers;
