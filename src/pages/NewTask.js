import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TaskItem from "../components/task/TaskItem";

const NewTask = () => {
  const tasklist = useSelector((state) => state.taskReducer.listTask);

  console.log(tasklist);

  useEffect(() => {
    // call api with Middleware
  }, []);

  return (
    <div className="grid grid-cols-4 gap-[15px]">
      {tasklist.length > 0
        ? tasklist.map(
            (item, index) =>
              item.status === "New" && (
                <TaskItem key={index} taskItem={item}></TaskItem>
              )
          )
        : "New Task"}
    </div>
  );
};

export default NewTask;
