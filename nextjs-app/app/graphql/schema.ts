import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Course {
    id: ID!
    title: String!
    user: [User]
  }

  type Query {
    getUsers: [User]!
    getCourses: [Course]!
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
    addCourse(title: String!): Course!
    assingCourse(userId: ID!, courseId: ID!): Course!
  }
`;
