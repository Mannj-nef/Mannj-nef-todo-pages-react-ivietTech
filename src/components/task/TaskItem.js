import React, { memo } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./style.scss";

const TaskItem = ({ id, title, author, status, desc }) => {
  const { url } = useRouteMatch();

  const handleCheckStatus = () => {
    let statusClass;
    switch (status) {
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
    <Link to={`${url}/update/${id}`} className="task-item p-5">
      <h3 className="title">Title: Task {title}</h3>
      <p className="cteator">Creator: {author}</p>
      <p className={handleCheckStatus()}>Status: {status}</p>
      <p className="desc">
        <span className="desc-main">Desscription:</span> <span>{desc}</span>
      </p>
    </Link>
  );
};

export default memo(TaskItem);
