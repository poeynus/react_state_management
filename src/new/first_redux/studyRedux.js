import { createStore } from "redux";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_COMP_A":
      return {
        ...prevState,
        compA: action.data,
      };
    case "CHANGE_COMP_B":
      return {
        ...prevState,
        compB: action.data,
      };
    default:
      return {
        prevState,
      };
  }
};

const initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);

console.log(store.getState());

// action 구체적이기보다 추상적으로 만드는게 좋다
const changeCompA = (data) => {
  return { type: "CHANGE_COMP_A", data };
};

store.dispatch(changeCompA("b"));
