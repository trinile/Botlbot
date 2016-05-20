import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Login from '../components/Login';
import Logout from '../components/Logout';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Dashboard from '../containers/Dashboard';

const style = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    // fontSize: '1.5em',
  },
  toolbar: {
    backgroundColor: 'rgb(167, 184, 193)',
  }
}
const SiteNav = ({ isAuthenticated, onLogoutClick }) => (
  <Toolbar style={style.toolbar}>
  <ToolbarTitle text="Botlbot" style={style.title} />
  <ToolbarGroup>
    <FlatButton
      linkButton={true}
      label="About"
      containerElement={<Link to="/about" />}
      />
    <FlatButton
      linkButton={true}
      label="Home"
      containerElement={<Link to="/" />}
    />
    <FlatButton 
      linkButton={true}
      label="Dashboard" 
      containerElement={<Link to="/dashboard" />}
    />
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
