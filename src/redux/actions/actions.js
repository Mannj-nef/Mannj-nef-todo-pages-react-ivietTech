import TYPE from "../../constants/type/type";

export const creactNewTask = (payload) => ({
  type: TYPE.CREATE_NEW_TASK,
  payload,
});

export const updateTask = (payload) => ({
  type: TYPE.UPDATE_TASK,
  payload,
});
