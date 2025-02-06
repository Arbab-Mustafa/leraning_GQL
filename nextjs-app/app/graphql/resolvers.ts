import {
  addCourse,
  addUser,
  assingCourse,
  getUsers,
  getCourses,
  getTeachers,
  addTeacher,
  assingTeacher,
  getAnimals,
  addAnimal,
} from "./_res/index";

export const resolvers = {
  Query: {
    getUsers: getUsers,
    getCourses: getCourses,
    getTeachers: getTeachers,
    getAnimals: getAnimals,
  },
  Mutation: {
    addUser: addUser,
    addCourse: addCourse,
    addTeacher: addTeacher,
    assingCourse: assingCourse,
    assingTeacher: assingTeacher,
    addAnimal: addAnimal,
  },
};
