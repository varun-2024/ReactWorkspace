import { useRef } from "react";
import { IoAdd } from "react-icons/io5";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} is due on : ${dueDate}`);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            id="id"
            name="name"
            placeholder="Enter Task Name"
            className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
          />
        </div>
        <div className="col-4">
          <input
            ref={dueDateElement}
            type="date"
            id="id"
            name="name"
            placeholder="placeholder"
            className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
          />
        </div>
        <div className="col-2">
          <button className="button green btn btn-success" type="submit">
            <IoAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
