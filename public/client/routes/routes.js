import React from 'react';
import Route from 'react-router';
import Dashboard from '../components/Dashboard';
import Main from '../containers/Main';

const Routes = (
  <Route>
    <Route path="/" component={Main} />
    <Route path="/dashboard" component={Dashboard} />
  </Route>
);

export default Routes;
