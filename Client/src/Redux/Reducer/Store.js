import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { reducers } from "./inde,x";

const initialState = {};
const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware))
);
