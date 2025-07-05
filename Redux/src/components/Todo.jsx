import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { markAsDone, deleteTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  const dispatch = useDispatch();

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
            <button className="" onClick={() => dispatch(markAsDone(todo.id))}>
              Mark Done
            </button>
            &nbsp;&nbsp;
            <button className="" onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
