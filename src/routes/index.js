import React, { Fragment } from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";
import Activities from "../pages/Activities";
import ShowActivity from "../pages/ShowActivity";

function Routes() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/activities" component={Activities} />
        <Route path="/activity/:id" component={ShowActivity} />
      </Switch>
    </Fragment>
  );
}

export default Routes;
