import React from "react";
const InputWrapper = ({ label, register, err, ...props }) => {
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
          {...register}
        />
        {err?.message && <p className="err-message">{err?.message}</p>}
      </p>
    </div>
  );
};

export default InputWrapper;
