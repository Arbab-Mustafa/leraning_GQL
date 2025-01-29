//  usertype

export const UserDefs = `

type User {
      name: String
      email: String
      }

    type Query {
      user: [User]
    }



    type Mutation {
    createUser(name: String, email: String): User
     deleteUser(name: String!): User
    
    }
      
    
    
    
    `;
