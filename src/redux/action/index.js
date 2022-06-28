import { TYPE_TASK } from "../../constants/typeTask";

export const actGetAllTasks = () => ({
  type: TYPE_TASK.GET_ALL_TASK,
});

export const actAddNewTask = (payload) => ({
  type: TYPE_TASK.ADD_NEW_TASK,
  payload,
});
