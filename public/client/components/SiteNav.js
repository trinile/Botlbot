import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Login from '../components/Login';
import Logout from '../components/Logout';
import styles from '../styles/sitenav.css';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Dashboard from '../containers/Dashboard';

const SiteNav = ({ isAuthenticated, onLogoutClick }) => (
  <Toolbar>
  <ToolbarTitle text="BOTLBOT APP"/>
  <ToolbarGroup>
    <FlatButton
      linkButton={true}
      label="About"
      href="/"
    />
    <FlatButton
      linkButton={true}
      label="Home"
      href="/"
    />
    <FlatButton 
      label="Dashboard" 
      href="/dashboard"
      linkButton={true}>
    </FlatButton>
    <FlatButton>
    {isAuthenticated ? <Logout onLogoutClick={onLogoutClick}/> : <Login /> 
    }
    </FlatButton>
  </ToolbarGroup>
  </Toolbar>
);

SiteNav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLoginClick: PropTypes.func,
  onLogoutClick: PropTypes.func,
};

export default SiteNav;

/*
    // <nav>
    //   <img
    //     src="http://res.publicdomainfiles.com/pdf_view/2/13494514811992.png"
    //     alt="bottle silhouette"
    //     className={styles.brand}
*/