import mongoose from "mongoose";
import Todo from "../model/todosModel";

interface Todos {
  id: string;
  title: string;
  completed: boolean;
}

export const getTodos = async () => {
  try {
    const todos = await Todo.find();

    if (!todos.length) {
      return []; // Return empty array instead of a string
    }

    return todos; // No need to stringify, keep it as an object
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw new Error("Failed to fetch todos"); // Ensure the caller gets an error
  }
};

export const createTodos = async (_: any, { title, completed }: Todos) => {
  try {
    const newTodo = new Todo({
      title,
      completed,
    });

    await newTodo.save();

    return newTodo; // Return the newly created todo
  } catch (error) {
    console.error("Error creating todos:", error);
    throw new Error("Failed to create todos");
  }
};

export const deleteTodo = async (_: any, { id }: { id: string }) => {
  try {
    // Check if ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid Todo ID format");
    }

    // Check if Todo exists before deletion
    const todoExists = await Todo.findById(id);
    if (!todoExists) {
      throw new Error("Todo not found");
    }

    // Perform deletion
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      throw new Error("Failed to delete todo");
    }

    return {
      id: deletedTodo._id, // Ensure ID is always returned
      message: "Todo deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting todo:", error);
    if (error instanceof Error) {
      throw new Error(error.message || "Failed to delete todo");
    } else {
      throw new Error("Failed to delete todo");
    }
  }
};

export const updateTodo = async (_: any, { id, title, completed }: Todos) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid Todo ID format");
    }

    const todo = await Todo.findById(id);
    if (!todo) {
      throw new Error("Todo not found");
    }

    const updated = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );

    if (!updated) {
      throw new Error("Failed to update todo");
    }

    return updated;
  } catch (error) {
    console.error("Error updating todos:", error);
    throw new Error("Failed to update todos");
  }
};
