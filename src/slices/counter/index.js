import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: {
    val: 3
  },
  reducers: {
    increment: (state) => {
      state.val += 1;
    },
    triple: (state) => {
      state.val *= 3;
    }
  }
});
