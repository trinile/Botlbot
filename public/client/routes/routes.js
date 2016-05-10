import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Dashboard from '../containers/Dashboard';
import MainContainer from '../containers/Main';
import Splash from '../components/Splash';

const Routes = (
    <Route path="/" component={MainContainer}>
      <IndexRoute component={Splash} />
      <Route path="/about" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
    </Route>
);

export default Routes;
