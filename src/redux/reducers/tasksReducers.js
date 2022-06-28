import { actAddNewTask, actGetAllTasks } from "../action";

const initStates = {
  tasksList: [],
};
export const tasksReducers = (state = initStates, action) => {
  switch (action) {
    case actGetAllTasks:
      return {
        ...state,
      };
    case actAddNewTask:
      console.log("act task");
      return {
        ...state,
      };

    default:
      return state;
  }
};
