import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import appreducer from "../reducers";

const store =
  process.env.NODE_ENV === "production"
    ? createStore(appreducer)
    : createStore(appreducer, composeWithDevTools());

export default store;
