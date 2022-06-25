import React from "react";
import { ROUTER } from "../../routers/constanRouters";
import { useHistory } from "react-router-dom";
import Search from "../search/Search";
import "./style.scss";

const Header = () => {
  const history = useHistory();
  const toCreacTask = () => {
    history.push(ROUTER.CREACT_TASK.path);
  };

  return (
    <div className="header">
      <button className="btn" onClick={toCreacTask}>
        Create New Task
      </button>
      <Search></Search>
    </div>
  );
};

export default Header;
