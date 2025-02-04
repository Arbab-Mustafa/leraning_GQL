import { addCourse, addUser, assingCourse, getUsers } from "./_res/index";
import { getCourses } from "./_res/Qury";

export const resolvers = {
  Query: {
    getUsers: getUsers,
    getCourses: getCourses,
  },
  Mutation: {
    addUser: addUser,
    addCourse: addCourse,
    assingCourse: assingCourse,
  },
};
