const typeDefs = `
type Todos{
    id: ID!
    title: String!
    completed: Boolean!
}
type Query{
    getTodos: [Todos]
     
}
type Mutation{
     createTodos(title: String!, completed: Boolean!): Todos
     deleteTodo( id : String!) :Todos
     updateTodo( id : String!, title: String!, completed: Boolean!): Todos
}
`;

export default typeDefs;
