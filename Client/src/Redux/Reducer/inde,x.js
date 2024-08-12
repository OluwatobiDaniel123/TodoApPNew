import { combineReducers } from "redux";
import auth from "./authReducer";
import todos from "./todoReducer";

export const reducers = combineReducers({
  auth,
  todos,
});
