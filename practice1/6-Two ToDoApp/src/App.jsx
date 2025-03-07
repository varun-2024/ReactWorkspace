import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Welcometodo from "./components/Welcometodo";
import "./components/App.css";
import TodoItemsContextProvider from "../store/todo-items-store";
function App() {
  return (
    <TodoItemsContextProvider>
      <div className="todo-container">
        <AppName />
        <AddTodo />
        <Welcometodo />
        <TodoItems />
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
