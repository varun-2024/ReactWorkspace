import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} />
      ))}
    </>
  );
}

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TodoItems;
