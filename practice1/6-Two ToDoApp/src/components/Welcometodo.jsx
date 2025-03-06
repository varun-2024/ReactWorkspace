import { useContext } from "react";
import styles from "./Welcome.module.css";
import { TodoItemsContext } from "../../store/todo-items-store";
function Welcometodo() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
}
export default Welcometodo;
