import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
// import PrivateRoute from './PrivateRoute';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      {/* <PrivateRoute path="/dashboard" exact component={Dashboard} /> */}
    </Switch>
  );
};

export default Routes;
