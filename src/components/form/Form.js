import React from "react";

import "./style.scss";
import Button from "./Button";
import InputWrapper from "./InputWrapper";
import RadioInput from "./RadioInput";

const Form = ({
  formUpdate = false,
  useFormWidthHook,
  formSubmit,
  handleReset,
  handleDelete,
}) => {
  const { handleSubmit, formState, control } = useFormWidthHook;
  const { errors, isSubmitting } = formState;

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="form"
      autoComplete="off"
    >
      <InputWrapper
        label="Title"
        placeholder="Place holder"
        name="title"
        id="title"
        control={control}
        err={errors.title}
      ></InputWrapper>
      <InputWrapper
        label="Creator"
        placeholder="Name of Creator"
        name="creator"
        id="creator"
        control={control}
        err={errors.creator}
      ></InputWrapper>
      <InputWrapper
        label="Created at"
        placeholder="08-02-2021 07:45:20"
        name="time"
        id="time"
        control={control}
        err={errors.time}
      ></InputWrapper>
      <InputWrapper
        label="Description"
        placeholder="Description Details"
        name="desscription"
        id="desc"
        control={control}
        err={errors.desscription}
      ></InputWrapper>

      {!formUpdate ? (
        <div className="flex justify-center">
          <Button title="Submit" isSubmit={isSubmitting}></Button>
        </div>
      ) : (
        <div className="action-wrapp">
          <div className="flex flex-col items-center gap-5">
            <div className="radio-wrapp">
              <RadioInput
                title="New"
                value="new"
                name="status"
                control={control}
              ></RadioInput>
              <RadioInput
                title="Doing"
                value="doing"
                name="status"
                control={control}
              ></RadioInput>
              <RadioInput
                title="Done"
                value="done"
                name="status"
                control={control}
              ></RadioInput>
            </div>
            {errors?.status?.message && (
              <p className="err-message">{errors?.status.message}</p>
            )}
          </div>
          <div className="btn-wrapp">
            <Button type="submit" title="Save"></Button>
            <Button title="Reset" onClick={handleReset}></Button>
            <Button title="Delete" onClick={handleDelete}></Button>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
