import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Dashboard from '../containers/Dashboard';
import MainContainer from '../containers/Main';
import BuildABot from '../components/BuildABot';
import Splash from '../components/Splash';
import SideMenu from '../components/SideMenu';
import PostedTweets from '../containers/PostedTweets';

const Routes = (
    <Route path="/" component={MainContainer}>
      <IndexRoute components={{ main: Splash }} />
      <Route path="/about" components={{main: Dashboard}}/>
      <Route path="/dashboard" components={{main: Dashboard, sidebar: SideMenu}} />
      <Route path="/postedTweets" components={{main: PostedTweets, sidebar: SideMenu}}/>
      <Route path="/build" component={BuildABot} />
    </Route>
);

export default Routes;
