import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todoItems: [
    // {
    //   id: 1,
    //   todo: 'hello todo',
    //   completed: false,
    // },
  ],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todoItems = state.todoItems;
      const todo = action.payload;
      const todoItem = {
        id: nanoid(),
        todo,
        completed: false,
      };
      todoItems.push(todoItem);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todoItems = state.todoItems.filter(
        (todoItem) => todoItem.id !== id
      );
    },
    updateTodo: (state, action) => {
      const { todo, id } = action.payload;
      state.todoItems = state.todoItems.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, todo } : todoItem
      );
    },
    toggleTodo: (state, action) => {
      const { id, completed } = action.payload;
      state.todoItems = state.todoItems.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, completed } : todoItem
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
