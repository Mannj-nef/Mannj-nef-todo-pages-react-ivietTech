import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import DoneTask from "../pages/DoneTask";
import NewTask from "../pages/NewTask";
import DoingTask from "../pages/DoingTask";
import AllTask from "../pages/AllTask";
import CreactTask from "../pages/CreactTask";
import UpdateTask from "../pages/UpdateTask";

const index = () => {
  return (
    <div className="p-[15px] pb-[30px]">
      <Switch>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/allTask">
          <AllTask></AllTask>
        </Route>
        <Route path="/newTask">
          <NewTask></NewTask>
        </Route>
        <Route path="/doingTask">
          <DoingTask></DoingTask>
        </Route>
        <Route path="/doneTask">
          <DoneTask></DoneTask>
        </Route>
        <Route path="/creact-task">
          <CreactTask></CreactTask>
        </Route>
      </Switch>
    </div>
  );
};

export default index;
