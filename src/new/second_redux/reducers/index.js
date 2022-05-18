import { combineReducers } from "redux";
import { userReducer } from "./user";
import { postReducer } from "./post";

combineReducers({
  user: userReducer,
  posts: postReducer,
});

export default combineReducers;
