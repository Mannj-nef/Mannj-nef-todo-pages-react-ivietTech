import React from "react";
import "./style.scss";

const Search = () => {
  // searchTask()
  return (
    <div className="search-wrapp">
      <input type="text" className="input-search" />
      <button className="btn-search">Search</button>
    </div>
  );
};

export default Search;
