//  usertype

export const UserDefs = `type User {
      name: String
      email: String
      }

    type Query {
      user: [User]
    }`;
