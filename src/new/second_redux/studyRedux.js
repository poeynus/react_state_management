import { applyMiddleware, compose, createStore } from "redux";
import combineReducers from "./reducers/index";
import { addPost } from "./actions/post";
import { login, logout } from "./actions/user";

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (dispatch) => (action) => {
  console.log("로깅", action);
  dispatch(action);
};

const thunkMiddleware = (store) => (dispatch) => (action) => {
  if (typeof action === "function") {
    // 비동기
    return action(store.dispatch, store.getState);
  }
  return dispatch(action);
};

const enhancer = compose(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(combineReducers, initialState, enhancer);

store.dispatch(login({ id: 1, name: "yeop", admin: true }));

store.dispatch(addPost({ userID: 1, id: 1, content: "hi" }));

store.dispatch(logout());
