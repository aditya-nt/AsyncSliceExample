import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTask = createAsyncThunk(
  "todos/fetchTodoTask",
  async ({ limit }, { dispatch, getState }) => {
    console.log(getState);
    return fetch(
      `https://jsonplaceholder.typicode.com/todos/?_limit=${
        getState().counter.val
      }`
    )
      .then((response) => response.json())
      .then((json) => json);
  }
);

export const todos = createSlice({
  name: "todos",
  initialState: {
    task: null,
    loading: false,
    err: null
  },
  extraReducers: {
    [fetchTask.fulfilled]: (state, action) => {
      state.task = action.payload;
      state.loading = false;
    },
    [fetchTask.pending]: (state) => {
      state.loading = true;
    },
    [fetchTask.rejected]: (state, action) => {
      state.err = action.error;
      state.loading = false;
    }
  }
});
