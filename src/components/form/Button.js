import React from "react";

const Button = ({ title, isSubmit, ...props }) => {
  return (
    <button className="btn" {...props}>
      {isSubmit ? <div className="btn-loading animate-spin"></div> : title}
    </button>
  );
};

export default Button;
