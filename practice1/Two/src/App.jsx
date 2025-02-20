import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
function App() {
  return (
    <div>
      <AppName />
      <AddTodo />
      <div>
        <div className="row">
          <div className="col-6">Buy Milk</div>
          <div className="col-4">Date</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-6">Buy Ghee</div>
          <div className="col-4">Date</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
