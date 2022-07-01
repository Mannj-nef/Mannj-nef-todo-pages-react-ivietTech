import React, { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Form from "../components/form/Form";
import schema from "../components/form/schemaValidate";
import { action } from "../redux/actions";
import { ROUTER } from "../routers/constanRouters";

const CreactTask = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const useFormWidthHook = useForm({
    resolver: yupResolver(schema),
  });

  const { setFocus, reset } = useFormWidthHook;

  useEffect(() => {
    setFocus("title");
  }, [setFocus]);

  const handleBackToNewTask = () => {
    console.log(0);
    history.push(ROUTER.NEW_TASK.path);
  };

  const onSubmit = (values) => {
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver();

        dispatch(action.creactNewTask(values));
        handleBackToNewTask();
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
