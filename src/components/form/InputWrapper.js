import React from "react";
import { useController } from "react-hook-form";

const InputWrapper = ({ label, control, ...props }) => {
  const { field } = useController({
    name: props.name,
    control,
    defaultValue: "",
  });

  return (
    <div className="input-wrapp">
      <label htmlFor={label} className="title">
        {label}
      </label>
      <p className="flex-1">
        <input type="text" className={`input-control`} {...props} {...field} />
        {props.err?.message && (
          <span className="err-message">{props.err?.message}</span>
        )}
      </p>
    </div>
  );
};

export default InputWrapper;
