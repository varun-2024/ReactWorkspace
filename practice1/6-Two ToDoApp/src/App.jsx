import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Welcometodo from "./components/Welcometodo";
import "./components/App.css";
import { useState } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function App() {
  const [todoItems, settodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    console.log(`Item Name: ${itemName}, Item Date: ${itemDueDate}`);

    /* settodoItems((currValue) => {
      const newtodoItems = [
        ...currValue,
        {
          name: itemName,
          dueDate: itemDueDate,
        },
      ];
      return newtodoItems;
    });
  }; */
    settodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newTodoItems);
    console.log(`Item Deleted: ${todoItemName}`);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <div className="todo-container">
        <AppName />
        <AddTodo onNewItem={addNewItem} />
        <Welcometodo todoItems={todoItems} />
        <TodoItems todoItems={todoItems} onDeleteClick={deleteItem} />
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
