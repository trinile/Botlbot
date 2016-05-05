import React from 'react';
import Route from 'react-router';
import Dashboard from '../components/Dashboard';
import Main from '../containers/Main';

const Routes = (
  <Route>
    <Route path="/" component={Main}>
      <IndexRoute component={Splash} />
      <Route path="/dashboard" component={Dashboard} />
    </Route>
  </Route>
);

export default Routes;
