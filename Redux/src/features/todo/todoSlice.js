import { createSlice, nanoid } from "@reduxjs/toolkit";
//import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 0, task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo);
    },
  },
});
