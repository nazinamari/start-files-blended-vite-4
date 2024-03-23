import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  initialState: {
    items: [],
  },
  name: 'todos',
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: oldPayload => {
        return {
          payload: {
            ...oldPayload,
            id: nanoid(),
          },
        };
      },
    },
    deleteTodo: (state, action) => {
      const index = state.items.findIndex(todo => todo.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const selectTodos = state => state.todos.items;

export const { addTodo, deleteTodo } = todosSlice.actions;
