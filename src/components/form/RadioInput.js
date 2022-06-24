import React from "react";

const RadioInput = ({ title, register, ...props }) => {
  return (
    <label className="flex items-center gap-[13px]">
      <input
        type="radio"
        className="radio-input"
        {...register}
        {...props}
      ></input>
      <span className="radio-label"></span>
      <span>{title}</span>
    </label>
  );
};

export default RadioInput;
