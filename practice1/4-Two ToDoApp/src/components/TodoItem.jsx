import PropTypes from "prop-types";
import { TiDeleteOutline } from "react-icons/ti";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="button red btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
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
