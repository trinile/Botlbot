import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Dashboard from '../components/Dashboard';
import Main from '../containers/Main';
import Splash from '../components/Splash';

const Routes = (
  <Route>
    <Route path="/" component={Main}>
      <IndexRoute component={Splash} />
      <Route path="/about" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
    </Route>
  </Route>
);

export default Routes;
