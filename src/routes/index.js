import React, { Fragment } from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import Home from "../pages/Home";
import Activities from "../pages/Activities";
import ShowActivity from "../pages/ShowActivity";
import EditActivity from "../pages/EditActivity";
import NewActivity from "../pages/NewActivity";

function Routes() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/activities" component={Activities} />
        <Route path="/activity/new" component={NewActivity} />
        <Route exact path="/activity/:id" component={ShowActivity} />
        <Route path="/activity/:id/edit" component={EditActivity} />
      </Switch>
    </Fragment>
  );
}

export default Routes;
