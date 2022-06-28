import { combineReducers } from "redux";
import { tasksReducers } from "./tasksReducers";

const appreducer = combineReducers({
  task: tasksReducers,
});
export default appreducer;
