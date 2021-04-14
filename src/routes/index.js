import React, { Fragment } from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Activities from "../pages/Activities";
import Home from "../pages/Home";

function Routes() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/activities" exact component={Activities} />
      </Switch>
    </Fragment>
  );
}

export default Routes;
