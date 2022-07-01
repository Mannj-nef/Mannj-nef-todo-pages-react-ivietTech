import Form from "../components/form/Form";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, useParams } from "react-router-dom";
import schema from "../components/form/schemaValidate";

const UpdateTask = () => {
  const historry = useHistory();
  const { id } = useParams();

  const useFormWidthHook = useForm({
    resolver: yupResolver(schema),
  });
  // console.log("useParams", id);

  const onSubmit = () => {
    console.log("save");
  };
  const handleReset = (e) => {
    e.preventDefault();
    console.log("reset");
  };
  const handleDelete = (e) => {
    e.preventDefault();
    console.log("delete");
  };

  return (
    <div className="flex mt-[70px] justify-center">
      <Form
        formUpdate
        handleReset={handleReset}
        handleDelete={handleDelete}
        formSubmit={onSubmit}
        useFormWidthHook={useFormWidthHook}
      ></Form>
    </div>
  );
};

export default UpdateTask;
