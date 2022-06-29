import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import Form from "../components/form/Form";
import schema from "../components/form/schemaValidate";
import { action } from "../redux/actions";

const CreactTask = () => {
  const selector = useSelector((state) => state.taskReducer.listTask);
  const dispatch = useDispatch();
  console.log(selector);

  const useFormWidthHook = useForm({
    resolver: yupResolver(schema),
  });

  const { setFocus, reset } = useFormWidthHook;

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  const onSubmit = (values) => {
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver();
        dispatch(action.creactNewTask("quanDev"));
        console.log(values);
        reset();
      }, 2000);
    });
  };

  return (
    <div className="flex mt-[70px] justify-center">
      <Form formSubmit={onSubmit} useFormWidthHook={useFormWidthHook}></Form>
    </div>
  );
};

export default CreactTask;
