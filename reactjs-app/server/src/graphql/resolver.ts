import { createTodos, deleteTodo, getTodos, updateTodo } from "./resolverFn";

const resolvers = {
  Query: {
    getTodos: getTodos,
  },
  Mutation: {
    createTodos: createTodos,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo,
  },
};

export default resolvers;
