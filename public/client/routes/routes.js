import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Dashboard from '../containers/Dashboard';
import MainContainer from '../containers/Main';
import Splash from '../components/Splash';
import SideMenu from '../components/SideMenu';

const Routes = (
    <Route path="/" component={MainContainer}>
      <IndexRoute components={{ main: Splash }} />
      <Route path="/about" components={{main: Dashboard}}/>
      <Route path="/dashboard" components={{main: Dashboard, sidebar: SideMenu}} />
    </Route>
);

export default Routes;
