function AddTodo() {
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
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            id="id"
            name="name"
            placeholder="placeholder"
            className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
          />
        </div>
        <div className="col-2">
          <button type="button" className="button green btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
