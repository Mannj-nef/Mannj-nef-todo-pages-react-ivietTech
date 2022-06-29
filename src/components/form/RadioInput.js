import React from "react";
import { useController } from "react-hook-form";

const RadioInput = ({ title, register, control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });

  return (
    <label className="flex items-center gap-[13px]">
      <input type="radio" className="radio-input" {...field} {...props}></input>
      <span className="radio-label"></span>
      <span>{title}</span>
    </label>
  );
};

export default RadioInput;
