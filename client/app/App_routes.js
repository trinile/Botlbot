import React from 'react';
import { Router, Route } from 'react-router';
import Dashboard from '../dashboard/Dashboard_container';
import MainContainer from './App_container_Main';
import BuildABot from '../template/Template_component_BuildABot';
import EditABotContainer from '../template/Template_container_EditABot';
import SideMenuContainer from '../sideMenu/SideMenu_container';
import PostedTweetsContainer from '../tweets/Tweets_container_PostedTweets';
import ScheduledTweetsContainer from '../tweets/Tweets_container_ScheduledTweets';
import About from '../splash/About_component';

const Routes = ({ history }) => (
  <Router history={ history } >
    <Route path="/" component={ About } />
    <Route component={ MainContainer }>
      <Route path="/dashboard" components={{main: Dashboard, sidebar: SideMenuContainer}} />
      <Route path="/posted" components={{main: PostedTweetsContainer, sidebar: SideMenuContainer}}/>
      <Route path="/scheduled" components={{main: ScheduledTweetsContainer, sidebar: SideMenuContainer }}/>
      <Route path="/build" components={{main: BuildABot, sidebar: SideMenuContainer}} />
      <Route path="/edit/:id" components={{main: EditABotContainer, sidebar: SideMenuContainer}} />
    </Route>
  </Router>
);

export default Routes;
