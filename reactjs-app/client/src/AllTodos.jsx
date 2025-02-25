import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_TODO, GET_TODOS } from "./graphqlquery";

export const AllTodos = () => {
  const { loading, error, data } = useQuery(GET_TODOS);

  const [deleteTodo] = useMutation(DELETE_TODO, {
    update(cache, { data: { deleteTodo } }) {
      try {
        // Read existing todos from cache
        const existingTodos = cache.readQuery({ query: GET_TODOS });

        if (existingTodos && existingTodos.getTodos) {
          // Update cache by removing deleted todo
          cache.writeQuery({
            query: GET_TODOS,
            data: {
              getTodos: existingTodos.getTodos.filter(
                (todo) => todo.id !== deleteTodo.id
              ),
            },
          });
        }
      } catch (error) {
        console.error("Cache update error:", error);
      }
    },
  });

  const handleDelete = async (id) => {
    try {
      await deleteTodo({
        variables: { deleteTodoId: id },
      });
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <>
      <h2>All Todos</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching todos!</p>}
      {data?.getTodos?.length > 0 ? (
        <ul>
          {data.getTodos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <span>{todo.completed ? "✅" : "❌"}</span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos found.</p>
      )}
    </>
  );
};
