import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodos, setNewTodos] = useState("");

  let addNewTodo = () => {
    console.log("todos accepted");
    setTodos((prevTodos) => {
      console.log("Previous Todos:", prevTodos);
      return [...prevTodos, { task: newTodos, id: uuidv4() }];
    });
    setNewTodos("");
  };
  let updateNewTodo = (event) => {
    console.log("Event Target Value", event.target.value);
    setNewTodos(event.target.value);
  };
  let delTodo = (delid) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== delid));
  };
  let upperCaseAll = () => {
    setTodos(
      todos.map((todo) => {
        let a = { ...todo, task: todo.task.toUpperCase() };
        console.log(a);
        return { ...todo, task: todo.task.toUpperCase() };
      })
    );
  };
  let uppercaseOne = (idUppercase) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == idUppercase) {
          return { ...todo, task: todo.task.toUpperCase() };
        } else {
          return { todo };
        }
      })
    );
  };

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
            {todo.task}
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="" onClick={() => delTodo(todo.id)}>
              Delete
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="" onClick={() => uppercaseOne(todo.id)}>
              UpperCase
            </button>
          </li>
        ))}
      </ul>
      <button className="" onClick={upperCaseAll}>
        UpperCase All
      </button>
    </>
  );
}
