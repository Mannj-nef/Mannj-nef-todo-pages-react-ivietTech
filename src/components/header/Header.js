import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/Search";
import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/creact-task" className="btn ">
        Create New Task
      </Link>
      <Search></Search>
    </div>
  );
};

export default Header;
