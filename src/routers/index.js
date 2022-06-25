import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTER } from "./constanRouters";

import Home from "../pages/Home";
import DoneTask from "../pages/DoneTask";
import NewTask from "../pages/NewTask";
import DoingTask from "../pages/DoingTask";
import AllTask from "../pages/AllTask";
import CreactTask from "../pages/CreactTask";

const index = () => {
  return (
    <div className="p-[15px] pb-[30px]">
      <Switch>
        <Route
          exact={ROUTER.HOME.exact}
          path={ROUTER.HOME.path}
          component={Home}
        />
        <Route
          path={ROUTER.ALL_TASK.path}
          exact={ROUTER.ALL_TASK.exact}
          component={AllTask}
        />
        <Route
          path={ROUTER.NEW_TASK.path}
          exact={ROUTER.NEW_TASK.exact}
          component={NewTask}
        />
        <Route
          path={ROUTER.DOING_TASK.path}
          exact={ROUTER.DOING_TASK.exact}
          component={DoingTask}
        />
        <Route
          path={ROUTER.DONE_TASK.path}
          exact={ROUTER.DONE_TASK.exact}
          component={DoneTask}
        />
        <Route
          path={ROUTER.CREACT_TASK.path}
          exact={ROUTER.CREACT_TASK.exact}
          component={CreactTask}
        />
      </Switch>
    </div>
  );
};

export default index;
