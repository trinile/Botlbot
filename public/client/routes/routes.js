import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Dashboard from '../containers/Dashboard';
import MainContainer from '../containers/Main';
import BuildABot from '../components/BuildABot';
import EditABot from '../components/EditABot';
import Splash from '../components/Splash';
// import SideMenu from '../components/SideMenu';
import SideMenuContainer from '../containers/SideMenuContainer';
import PostedTweets from '../containers/PostedTweets';

const Routes = (
    <Route path="/" component={MainContainer}>
      <IndexRoute components={{ main: Splash }} />
      <Route path="/about" components={{main: Dashboard}}/>
      <Route path="/dashboard" components={{main: Dashboard, sidebar: SideMenuContainer}} />
      <Route path="/postedTweets" components={{main: PostedTweets, sidebar: SideMenuContainer}}/>
      <Route path="/build" components={{main: BuildABot, sidebar: SideMenuContainer}} />
      <Route path="/edit" components={{main: EditABot, sidebar: SideMenuContainer}} />
    </Route>
);

export default Routes;
