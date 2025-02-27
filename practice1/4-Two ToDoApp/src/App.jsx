import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Welcometodo from "./components/Welcometodo";
import "./components/App.css";
import { useState } from "react";

function App() {
  const [todoItems, settodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`Item Name: ${itemName}, Item Date: ${itemDueDate}`);
    const newtodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    settodoItems(newtodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newTodoItems);
    console.log(`Item Deleted: ${todoItemName}`);
  };
  return (
    <div className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Welcometodo todoItems={todoItems} />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </div>
  );
}

export default App;
