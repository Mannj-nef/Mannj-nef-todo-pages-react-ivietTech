import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducers from "./reducers";

const store =
  process.env.NODE_ENV === "production"
    ? createStore(rootReducers)
    : createStore(rootReducers, devToolsEnhancer());

export default store;
