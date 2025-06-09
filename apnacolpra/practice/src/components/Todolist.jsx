import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todolist() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");
  // Add Todo
  let addNewTodoTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  // Update Todo
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  // Delete Todo
  let deleteTodo = (id) => {
    console.log("task to be deleted", id);

    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };
  // Upper case all
  let uppercaseAll = () => {
    setTodos(
      todos.map((todo) => {
        return { ...todo, task: todo.task.toUpperCase() };
      })
    );
  };
  // Uppercase One
  let uppercaseOne = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return todo;
        }
      })
    );
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
      &nbsp;&nbsp;&nbsp;&nbsp;
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
            &nbsp;
            <button
              className="delitembutton"
              onClick={() => uppercaseOne(todo.id)}
            >
              Upercase One
            </button>
          </li>
        ))}
      </ul>
      <button onClick={uppercaseAll}>Uppercase All</button>
    </>
  );
}
