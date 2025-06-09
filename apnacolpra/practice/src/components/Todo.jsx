import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodos, setNewTodos] = useState("");

  let addNewTodo = () => {
    console.log("todos accepted");
    setTodos((prevTodos) => {
      console.log("Previous Todos:", prevTodos);
      return [...prevTodos, { task: newTodos, id: uuidv4(), isDone: false }];
    });
    setNewTodos("");
  };
  let updateNewTodo = (event) => {
    console.log("Event Target Value", event.target.value);
    setNewTodos(event.target.value);
  };
  let delTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };
  let uppercaseOne = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return todo;
        }
      })
    );
  };
  let markasDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  let markAllDone = () =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, isDone: true }))
    );

  return (
    <>
      <h2 className="">Todo App</h2>
      <input
        type="todoitem"
        id=""
        name="todoitem"
        placeholder="Enter Task Here"
        className="todoitem"
        value={newTodos}
        onChange={updateNewTodo}
      />
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button className="" onClick={addNewTodo}>
        Submit
      </button>
      <ul className="">
        <h4>Tasks</h4>
        <hr></hr>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
              {todo.task}
            </span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="" onClick={() => delTodo(todo.id)}>
              Delete
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="" onClick={() => uppercaseOne(todo.id)}>
              UpperCase
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="" onClick={() => markasDone(todo.id)}>
              Done
            </button>
          </li>
        ))}
      </ul>
      <button className="" onClick={upperCaseAll}>
        UpperCase All
      </button>
      <button className="" onClick={markAllDone}>
        Mark All as Done
      </button>
    </>
  );
}
