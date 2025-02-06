import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    course: [Course]
    teacher: [Teacher]
  }

  type Course {
    id: ID!
    title: String!
    user: [User]
  }

  type Teacher {
    id: ID!
    name: String
    courses: [Course]
    user: [User]
  }
  type Animal {
    id: ID!
    name: String!
    type: String!
  }

  type Query {
    getUsers: [User]!
    getCourses: [Course]!
    getTeachers: [Teacher]!
    getAnimals: [Animal]!
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
    addCourse(title: String!): Course!
    addTeacher(name: String!): Teacher!
    assingCourse(userId: ID!, courseId: ID!): Course!
    assingTeacher(courseId: ID!, teacherId: ID!): Teacher!

    addAnimal(name: String!, type: String!): Animal!
  }
`;
