import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Login from '../components/Login';
import Tweet from '../components/Tweet';
import Dashboard from '../components/Dashboard';

const Routes = (
  <Route>
    <Route path="/" component={Login} />
    <Route path="/dashboard" component={Tweet} />
  <Route>
);

export default Routes;
