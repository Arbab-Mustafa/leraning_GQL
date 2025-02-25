import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_TODO } from "./graphqlquery";

const TodosForm = () => {
  const [title, setTitle] = React.useState("");
  const [completed, setCompleted] = React.useState(false);

  const [addTodo] = useMutation(ADD_TODO);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addTodo({
        variables: {
          title,
          completed,
        },
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Todo Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Completed</label>
          <input
            type="checkbox"
            name="completed"
            value={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TodosForm;
