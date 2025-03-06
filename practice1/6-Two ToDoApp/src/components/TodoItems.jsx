import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../../store/todo-items-store";
import { useContext } from "react";

function TodoItems({ onDeleteClick }) {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  console.log(todoItems);

  return (
    <>
      {todoItems.map((item, index) => (
        <TodoItem
          key={item.id}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
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
