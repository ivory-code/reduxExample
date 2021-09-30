import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import styled from "styled-components";

const countState = atom({
  key: "countState",
  default: 0,
});

const increaseState = selector({
  key: "increaseState",
  get: ({ get }) => {
    return get(countState) + 1;
  },
});

const decreaseState = selector({
  key: "decreaseState",
  get: ({ get }) => {
    return get(countState) - 1;
  },
});

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div>
      <h4>{count}</h4>
      {/* <br /> */}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

const CounterInfo = () => {
  const result = useRecoilState(countState);
  const increment = useRecoilValue(increaseState);
  const decrement = useRecoilValue(decreaseState);

  return (
    <div>
      <h4>
        {result} + 1 = {increment}
      </h4>
      <br />
      <h4>
        {result} - 1 = {decrement}
      </h4>
    </div>
  );
};

export const RecoilCounter = () => {
  return (
    <RecoilRoot>
      <div>
        <h1>Recoil Counter</h1>
        <RecoilWrapper>
          <Counter />
          <CounterInfo />
        </RecoilWrapper>
      </div>
    </RecoilRoot>
  );
};

const RecoilWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;
