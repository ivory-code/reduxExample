import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/modules/counter";

export default function Counter() {
  const count = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>COUNTER</h1>
      <h4>{count}</h4>
      <br />
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  );
}
