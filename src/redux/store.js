import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

const store =
  process.env.NODE_ENV === "production"
    ? createStore(rootReducers, middleware)
    : createStore(rootReducers, composeWithDevTools(middleware));

export default store;

sagaMiddleware.run(rootSaga);
