import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
  name: "todo",
  initialState: ["first", "second"],
  reducers: {
    addItems: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((item) => item !== action.payload);
    }
  }
});
