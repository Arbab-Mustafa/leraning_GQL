import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUsers: [User]!
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
  }
`;
