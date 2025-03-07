import PropTypes from "prop-types";
import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { TodoItemsContext } from "../../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="button red btn btn-danger"
            onClick={() => deleteItem(todoName)}
          >
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string.isRequired,
};

export default TodoItem;
