import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/modules/counter";

export default function Counter() {
  const dispatch = useDispatch();

  // import한 리듀서 이름을 그대로 사용하는 경우
  const count = useSelector((state) => state.counter.number);

  // 리듀서 이름을 지정하는 경우
  // const count = useSelector((state) => state.counterData.number);

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
