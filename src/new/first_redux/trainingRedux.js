import { createStore } from "redux";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...prevState,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...prevState,
        user: null,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return {
        prevState,
      };
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);

// action 구체적이기보다 추상적으로 만드는게 좋다
const login = (data) => {
  return { type: "LOG_IN", data };
};

const logout = () => {
  return { type: "LOG_OUT" };
};

const addPost = (data) => {
  return { type: "ADD_POST", data };
};

store.dispatch(login({ id: 1, name: "yeop", admin: true }));

store.dispatch(addPost({ userID: 1, id: 1, content: "hi" }));

store.dispatch(logout());
