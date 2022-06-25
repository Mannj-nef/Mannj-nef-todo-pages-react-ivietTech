import React from "react";
import { Controller } from "react-hook-form";

const InputWrapper = ({ label, control, ...props }) => {
  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue=""
      render={({ filed }) => {
        return (
          <div className="input-wrapp">
            <label htmlFor={label} className="title">
              {label}
            </label>
            <p className="flex-1">
              <input
                type="text"
                className={`input-control`}
                {...props}
                {...filed}
              />
              {props.err?.message && (
                <p className="err-message">{props.err?.message}</p>
              )}
            </p>
          </div>
        );
      }}
    />
  );
};

export default InputWrapper;
