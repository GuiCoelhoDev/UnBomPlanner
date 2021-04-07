import React, {Fragment} from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Activities from '../pages/Activities';

function Routes () {
  return (
    <Fragment>
      <Switch>
        <Route
          path="/"
          component={Activities}
        />
      </Switch>
    </Fragment>
  );
}

export default Routes;