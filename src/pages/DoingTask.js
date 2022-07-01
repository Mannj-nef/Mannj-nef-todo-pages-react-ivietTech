import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TaskItem from "../components/task/TaskItem";
import useCheckStatus from "../hooks/useCheckStatus";

const DoingTask = () => {
  const tasklist = useSelector((state) => state.taskReducer.listTask);
  const isDoingList = useCheckStatus(tasklist, "Doing");

  useEffect(() => {
    // call api with Middleware
  }, []);

  return (
    <div className="grid grid-cols-4 gap-[15px]">
      {isDoingList?.length > 0
        ? isDoingList.map((item, index) => (
            <TaskItem key={index} taskItem={item}></TaskItem>
          ))
        : "Doing task"}
    </div>
  );
};

export default DoingTask;
