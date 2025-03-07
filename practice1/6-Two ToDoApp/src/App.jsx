import AppName from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Welcometodo from "./components/Welcometodo";
import "./components/App.css";
import { useReducer } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { itemName, itemDueDate },
    };
    dispatchTodoItems(newItemAction);

    //console.log(`Item Name: ${itemName}, Item Date: ${itemDueDate}`);

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
    /* settodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]); */
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { itemName: todoItemName },
    };
    dispatchTodoItems(deleteItemAction);
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
