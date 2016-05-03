import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Login from '../components/Login';

const Routes = (
  <Route path="/" component={Login} />
);

export default Routes;