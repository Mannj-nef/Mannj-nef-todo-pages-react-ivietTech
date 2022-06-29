import React from "react";
import { useSelector, useDispatch } from "react-redux";

const DoingTask = () => {
  const selector = useSelector((state) => state.taskReducer.listTask);
  return <div>{selector[0]}</div>;
};

export default DoingTask;
