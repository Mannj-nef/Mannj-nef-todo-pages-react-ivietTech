import React from "react";
import { Link } from "react-router-dom";
import useActive from "../../hooks/useActive";
import "./style.scss";

const MenuTask = () => {
  useActive(".link-item");
  return (
    <ul className="list-task">
      <li className="task-item mb-10 -mt-14">
        <Link to="/home" className="link-item active">
          <i className="fa-solid fa-house text-3xl pointer-events-none"></i>
        </Link>
      </li>
      <li className="task-item">
        <Link to="/allTask" className="link-item">
          <i className="fa-solid fa-border-all pointer-events-none"></i>
          All Task
        </Link>
      </li>
      <li className="task-item">
        <Link to="/newTask" className="link-item">
          <i className="fa-solid fa-newspaper pointer-events-none"></i>
          New Task
        </Link>
      </li>
      <li className="task-item">
        <Link to="/doingTask" className="link-item">
          <i className="fa-solid fa-hand pointer-events-none"></i>
          Doing Task
        </Link>
      </li>
      <li className="task-item">
        <Link to="/doneTask" className="link-item">
          <i className="fa-solid fa-square-check pointer-events-none"></i>
          Done Task
        </Link>
      </li>
    </ul>
  );
};

export default MenuTask;
