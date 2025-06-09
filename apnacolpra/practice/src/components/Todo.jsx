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
            <button className="">Delete</button>
            &nbsp; &nbsp; &nbsp; &nbsp;
          </li>
        ))}
      </ul>
    </>
  );
}
