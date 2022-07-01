import React, { memo } from "react";
import { generatePath, useHistory } from "react-router-dom";
import { ROUTER } from "../../routers/constanRouters";
import "./style.scss";

const TaskItem = ({ taskItem }) => {
  const history = useHistory();

  const handleRedirectToEdit = (id) => {
    history.push(
      generatePath(ROUTER.EDIT_TASK.path, {
        id: id,
      })
    );
  };

  const handleCheckStatus = () => {
    let statusClass;
    switch (taskItem.status) {
      case "Done":
        statusClass = "done";
        break;
      case "Doing":
        statusClass = "doing";
        break;
      case "New":
        statusClass = "new";
        break;
      default:
        break;
    }
    return statusClass;
  };
  return (
    <div
      className="task-item p-5 cursor-pointer"
      onClick={() => handleRedirectToEdit(taskItem.id)}
    >
      <h3 className="title">Title: {taskItem.title}</h3>
      <p className="cteator">Creator: {taskItem.creator}</p>
      <p className={handleCheckStatus()}>Status: {taskItem.status}</p>
      <p className="desc">
        <span className="desc-main">Desscription:</span>{" "}
        <span>{taskItem.desscription}</span>
      </p>
    </div>
  );
};

export default memo(TaskItem);
