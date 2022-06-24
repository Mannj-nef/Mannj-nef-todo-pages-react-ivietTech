import React from "react";

const Button = ({ title, ...props }) => {
  return (
    <button className="btn" {...props}>
      {title}
    </button>
  );
};

export default Button;
