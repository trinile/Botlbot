import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Dashboard from '../containers/Dashboard';
import MainContainer from '../containers/Main';
import BuildABot from '../components/BuildABot';
import EditABotContainer from '../containers/EditABotContainer';
import Splash from '../components/Splash';
import SideMenuContainer from '../containers/SideMenuContainer';
import PostedTweetsContainer from '../containers/PostedTweetsContainer';
import ScheduledTweetsContainer from '../containers/ScheduledTweetsContainer';

const Routes = ({history}) => (
    <Router history={history} >
      <Route path="/" component={ Splash } />
      <Route component={MainContainer}>
        <Route path="/about" components={{main: Dashboard}}/>
        <Route path="/dashboard" components={{main: Dashboard, sidebar: SideMenuContainer}} />
        <Route path="/posted" components={{main: PostedTweetsContainer, sidebar: SideMenuContainer}}/>
        <Route path="/scheduled" components={{main: ScheduledTweetsContainer, sidebar: SideMenuContainer }}/>
        <Route path="/build" components={{main: BuildABot, sidebar: SideMenuContainer}} />
        <Route path="/edit/:id" components={{main: EditABotContainer, sidebar: SideMenuContainer}} />
      </Route>
    </Router>
);

export default Routes;
