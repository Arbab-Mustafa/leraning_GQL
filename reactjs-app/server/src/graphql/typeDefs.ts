const typeDefs = `




type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!


}




type Query{
    hello: String
    getUsers: [User]
}

`;

export default typeDefs;
