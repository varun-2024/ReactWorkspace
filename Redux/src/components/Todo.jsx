import { useSelector } from "react-redux";
import AddForm from "./AddForm";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <>
      <h1>Todo List</h1>
      <AddForm />
      <h2>Tasks</h2>
      <ul className="">
        {todos.map((todo) => (
          <li className="" key={todo.id}>
            {todo.task} - {todo.isDone ? "Done" : "Pending"}
            &nbsp;&nbsp;
            <button className="">Mark Done</button>
            &nbsp;&nbsp;
            <button className="">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
