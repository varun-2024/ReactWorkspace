import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todolist() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodoTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    console.log("task to be deleted", id);

    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  return (
    <>
      <input
        type="text"
        id="todoitem"
        name="todoitem"
        placeholder="Enter To Do Here"
        className="todoitem"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button className="todoitembutton" onClick={addNewTodoTask}>
        Add Task
      </button>
      <h4 className="todoheading">To Do List</h4>
      <ul className="todolist">
        {todos.map((todo) => (
          <li key={todo.id} className="todolistitem">
            <span className="">{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
