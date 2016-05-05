import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Login from '../components/Login';
import Tweet from '../components/Tweet';
import Dashboard from '../components/Dashboard';
import Main from '../containers/Main';

const Routes = (
  <Route>
    <Route path="/" component={Main} />
    <Route path="/dashboard" component={Dashboard} />
  </Route>
);

export default Routes;
