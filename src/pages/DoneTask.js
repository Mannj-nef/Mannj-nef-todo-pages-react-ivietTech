import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TaskItem from "../components/task/TaskItem";
import useCheckStatus from "../hooks/useCheckStatus";

const DoneTask = () => {
  const tasklist = useSelector((state) => state.taskReducer.listTask);
  const isDoneList = useCheckStatus(tasklist, "Done");

  useEffect(() => {
    // call api with Middleware
  }, []);

  return (
    <div className="grid grid-cols-4 gap-[15px]">
      {isDoneList.length > 0
        ? isDoneList.map((item, index) => (
            <TaskItem key={index} taskItem={item}></TaskItem>
          ))
        : "Done Task"}
    </div>
  );
};

export default DoneTask;
