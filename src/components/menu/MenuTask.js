import React from "react";
import { Link } from "react-router-dom";
import useActive from "../../hooks/useActive";
import { ROUTER } from "../../routers/constanRouters";
import "./style.scss";

const MenuTask = () => {
  useActive(".link-item");

  return (
    <ul className="list-task">
      <li className="task-item mb-10 -mt-14">
        <Link to={ROUTER.HOME.path} className="link-item active">
          <i className="fa-solid fa-house text-3xl pointer-events-none"></i>
        </Link>
      </li>
      <li className="task-item">
        <Link to={ROUTER.ALL_TASK.path} className="link-item">
          <i className="fa-solid fa-border-all pointer-events-none"></i>
          {ROUTER.ALL_TASK.name}
        </Link>
      </li>
      <li className="task-item">
        <Link to={ROUTER.NEW_TASK.path} className="link-item">
          <i className="fa-solid fa-newspaper pointer-events-none"></i>
          {ROUTER.NEW_TASK.name}
        </Link>
      </li>
      <li className="task-item">
        <Link to={ROUTER.DOING_TASK.path} className="link-item">
          <i className="fa-solid fa-hand pointer-events-none"></i>
          {ROUTER.DOING_TASK.name}
        </Link>
      </li>
      <li className="task-item">
        <Link to={ROUTER.DONE_TASK.path} className="link-item">
          <i className="fa-solid fa-square-check pointer-events-none"></i>
          {ROUTER.DONE_TASK.name}
        </Link>
      </li>
    </ul>
  );
};

export default MenuTask;
