import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./components/App.css";
function App() {
  return (
    <div className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItem1 />
      <TodoItem2 />
    </div>
  );
}

export default App;
