import React, { useCallback, useEffect, useRef, useState } from "react";
import { getApiTask } from "../../api";
import TaskItem from "./TaskItem";
import TaskItemLoading from "./TaskItemLoading";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMount, setIsMount] = useState(true);
  const timmerGetData = useRef();

  const handleCallApi = useCallback(async () => {
    try {
      if (isMount) {
        setIsLoading(true);

        const data = await getApiTask({
          params: {
            _sort: "id",
            _order: "desc",
          },
        });
        timmerGetData.current = setTimeout(() => {
          setTasks(data);
          setIsLoading(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  }, [isMount]);

  useEffect(() => {
    handleCallApi();
    return () => {
      clearTimeout(timmerGetData.current);
      setIsMount(false);
    };
  }, [isMount, handleCallApi]);
  return (
    <div className="grid grid-cols-4 gap-[15px]">
      {!isLoading && tasks.length > 0
        ? tasks.map((taskItem) => (
            <TaskItem key={taskItem.id} taskItem={taskItem}></TaskItem>
          ))
        : Array(8)
            .fill(null)
            .map((itemTaskLoading, index) => <TaskItemLoading key={index} />)}
    </div>
  );
};

export default Task;
