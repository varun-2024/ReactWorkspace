import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, settodoName] = useState();
  const [dueDate, setdueDate] = useState();

  const handleNameChange = (event) => {
    settodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setdueDate("");
    settodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            id="id"
            name="name"
            placeholder="Enter Task Name"
            className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
            onChange={handleNameChange}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            id="id"
            name="name"
            placeholder="placeholder"
            className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
            onChange={handleDateChange}
            value={dueDate}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="button green btn btn-success"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
