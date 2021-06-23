import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { todo } from "../../slices";

export const Todo = () => {
  const ref = useRef("");

  let list = useSelector((state) => state.todo);
  let actions = bindActionCreators(todo.actions, useDispatch());

  const handlePush = () => {
    if (ref.current.value !== "") actions.addItems(ref.current.value);
    ref.current.value = "";
  };

  const handlePop = (data) => {
    actions.removeItem(data);
  };

  return (
    <div>
      <input placeholder="Enter Item" ref={ref} />
      <button onClick={handlePush}>Add</button>
      <br />
      <ul>
        {list.map((item, index) => {
          return (
            <li key={index}>
              {" "}
              <button onClick={() => handlePop(item)}>x</button>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
