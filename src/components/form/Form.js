import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./style.scss";
import Button from "./Button";
import InputWrapper from "./InputWrapper";
import RadioInput from "./RadioInput";

const schema = Yup.object({
  title: Yup.string()
    .required("Required")
    .min(2, "Must be 2 characters ro more")
    .max(20, "Must be 20 characters ro lest"),
  creator: Yup.string()
    .required("Required")
    .min(2, "Must be 2 characters ro more")
    .max(20, "Must be 20 characters ro lest"),
  time: Yup.string()
    .required("Required")
    .min(2, "Must be 2 characters ro more")
    .max(20, "Must be 20 characters ro lest"),
  desc: Yup.string()
    .required("Required")
    .min(2, "Must be 2 characters ro more")
    .max(100, "Must be 100 characters ro lest"),
});

const Form = ({ formUpdate }) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form" autoComplete="off">
      <InputWrapper
        label="Title"
        placeholder="Place holder"
        register={{ ...register("title") }}
        err={errors.title}
      ></InputWrapper>
      <InputWrapper
        label="Creator"
        placeholder="Name of Creator"
        register={{ ...register("creator") }}
        err={errors.creator}
      ></InputWrapper>
      <InputWrapper
        label="Created at"
        placeholder="08-02-2021 07:45:20"
        register={{ ...register("time") }}
        err={errors.time}
      ></InputWrapper>
      <InputWrapper
        label="Description"
        placeholder="Description Details"
        register={{ ...register("desc") }}
        err={errors.desc}
      ></InputWrapper>

      {!formUpdate ? (
        <div className="flex justify-center">
          <Button title="Submit"></Button>
        </div>
      ) : (
        <div className="action-wrapp">
          <div className="radio-wrapp">
            <RadioInput
              title="New"
              value="New"
              register={register("status")}
            ></RadioInput>
            <RadioInput
              title="Doing"
              value="Doing"
              register={register("status")}
            ></RadioInput>
            <RadioInput
              title="Done"
              value="Done"
              register={register("status")}
            ></RadioInput>
          </div>
          <div className="btn-wrapp">
            <Button title="Save"></Button>
            <Button title="Reset"></Button>
            <Button title="Delete"></Button>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
