import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const updatedTodo = state.todos.find((t) => t.id === id);
      if (updatedTodo) {
        updatedTodo.text = text;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
