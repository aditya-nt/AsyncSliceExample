import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { counter } from "../../slices";

export const Counter = () => {
  const dispatch = useDispatch();

  let val = useSelector((state) => state.counter.val);
  let actions = bindActionCreators(counter.actions, dispatch);

  return (
    <div>
      {val} ...<button onClick={() => actions.increment()}>Add</button>
      <button onClick={() => actions.triple()}>Triple</button>
    </div>
  );
};
