import React from "react";
import useActive from "../../hooks/useActive";
import "./style.scss";

const Paging = () => {
  useActive(".btn");
  return (
    <div className="paging">
      <button className="btn-previous">
        <i className="fa-solid fa-angle-left pointer-events-none"></i>
      </button>
      <button className="btn active">1</button>
      <button className="btn">2</button>
      <button className="btn">3</button>
      <button className="btn-next">
        <i className="fa-solid fa-angle-right pointer-events-none"></i>
      </button>
    </div>
  );
};

export default Paging;
