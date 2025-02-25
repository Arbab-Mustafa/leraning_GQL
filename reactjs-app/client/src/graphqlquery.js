import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query GetTodos {
    getTodos {
      id
      title
      completed
    }
  }
`;

const ADD_TODO = gql`
  mutation AddTodo($title: String!, $completed: Boolean!) {
    createTodos(title: $title, completed: $completed) {
      id # ✅ Ensure ID is returned for cache updates
      title
      completed
    }
  }
`;

const DELETE_TODO = gql`
  mutation DeleteTodo($deleteTodoId: String!) {
    deleteTodo(id: $deleteTodoId) {
      id
    }
  }
`;

const UPDATE_TODO = gql`
  mutation UpdateTodo(
    $updateTodoId: String!
    $title: String!
    $completed: Boolean!
  ) {
    updateTodo(id: $updateTodoId, title: $title, completed: $completed) {
      id
      title
      completed
    }
  }
`;

export { GET_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO };
