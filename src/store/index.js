import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { counter, todo, todos, fetchTask } from "../slices";

const reducers = combineReducers({
  counter: counter.reducer,
  todo: todo.reducer,
  todos: todos.reducer
});

export const store = configureStore({
  reducer: reducers
});

// store.subscribe(() => console.log(store.getState().todos))
// store.dispatch(fetchTask())
