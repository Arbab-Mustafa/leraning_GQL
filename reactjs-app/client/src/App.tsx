import "./App.css";
import TodosForm from "./TodosForm";
import { AllTodos } from "./AllTodos";

function App() {
  return (
    <>
      <h2>My Todos</h2>
      <AllTodos />
      <TodosForm />
    </>
  );
}

export default App;
