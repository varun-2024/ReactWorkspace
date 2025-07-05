import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <>
      <div className="">
        <h2 className="">Add Task</h2>
        <form className="" action="" method="" onSubmit={handleSubmit}>
          <input
            type="text"
            id="id"
            name="name"
            placeholder="Enter Task"
            className=""
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="">Add Task</button>
        </form>
      </div>
    </>
  );
}
