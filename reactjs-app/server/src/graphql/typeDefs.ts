const typeDefs = `




type User {
    id: ID!
    name: String!
    email: String!
    createdAt: String!


}




type Query{
    hello: String
    getUsers: [User]
}

`;

export default typeDefs;
