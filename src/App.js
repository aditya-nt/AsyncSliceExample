import { Provider } from "react-redux";
import { Counter } from "./components/Counter";
import { Todo } from "./components/Todo";
import { Todos } from "./components/Todos";
import { store } from "./store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      <hr />
      <Todo />
      <hr />
      <Todos />
    </Provider>
  );
}
