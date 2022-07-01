import TYPE from "../../constants/type/type";

export const creactNewTask = (payload) => ({
  type: TYPE.CREATE_NEW_TASK,
  payload,
});

export const updateTask = (payload) => ({
  type: TYPE.UPDATE_TASK,
  payload,
});

export const deleteTask = (payload) => ({
  type: TYPE.DELETE_TASK,
  payload,
});

export const getAllTask = (payload) => ({
  type: TYPE.GET_ALL_TASK,
  payload,
});

export const getTaskById = (payload) => ({
  type: TYPE.GET_TASK_BY_ID,
  payload,
});
export const searchTask = (payload) => ({
  type: TYPE.SEARCH_TASK,
  payload,
});
