import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./components/App.css";

const todoItems = [
  {
    name: "Buy milk",
    dueDate: "05/10/2023",
  },
  {
    name: "Go to College",
    dueDate: "05/10/2023",
  },
  {
    name: "Like this Video",
    dueDate: "05/10/2023",
  },
];
function App() {
  return (
    <div className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </div>
  );
}

export default App;
