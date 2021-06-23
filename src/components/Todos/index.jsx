import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from "../../slices";

export const Todos = () => {
  const dispatch = useDispatch();

  let todo_list = useSelector((state) => state.todos.task);
  let loading = useSelector((state) => state.todos.loading);

  const handleFetch = () => {
    dispatch(fetchTask({ limit: 1 }));
  };

  return (
    <div>
      <h1>Fetched Todos</h1>
      <ul>
        {todo_list ? (
          todo_list.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })
        ) : loading ? (
          <li> loading.... </li>
        ) : (
          <li onClick={handleFetch}> click to fetch </li>
        )}
      </ul>
    </div>
  );
};
