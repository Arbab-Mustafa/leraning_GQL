import {
  addCourse,
  addUser,
  assingCourse,
  getUsers,
  getCourses,
  getTeachers,
  addTeacher,
  assingTeacher,
} from "./_res/index";

export const resolvers = {
  Query: {
    getUsers: getUsers,
    getCourses: getCourses,
    getTeachers: getTeachers,
  },
  Mutation: {
    addUser: addUser,
    addCourse: addCourse,
    addTeacher: addTeacher,
    assingCourse: assingCourse,
    assingTeacher: assingTeacher,
  },
};
