import { configureStore, createSlice } from "@reduxjs/toolkit";

// Simple counter slice for demonstration
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;

// This file sets up the Redux store and exports actions.
