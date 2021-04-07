import React from 'react';
import { Route } from 'react-router-dom';

function RouterWrapper(props) {
  const { component: Component, ...rest } = props;
  return (
    <Route {...rest} component={Component} />
  );
}

export default RouterWrapper;