// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action Functions
export function increment() {
  return {
    type: INCREMENT,
  };
}
export function decrement() {
  return {
    type: DECREMENT,
  };
}

const initialState = {
  number: 0,
};

// counterReducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}
