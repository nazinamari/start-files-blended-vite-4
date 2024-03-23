import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  initialState: {
    items: [],
  },
  name: 'todos',
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const selectTodos = state => state.todos.items;

export const { addTodo } = todosSlice.actions;
