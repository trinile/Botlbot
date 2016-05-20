import React, { PropTypes } from 'react';
import { Link } from 'react-router';
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
  <ToolbarTitle text="botlbot" style={style.title}/>
  <ToolbarGroup>
    <FlatButton
      linkButton={true}
      label="About"
      containerElement={<a href="https://github.com/Sabine-Sardine/botlbot/" target="_blank" />}
      />
    <FlatButton
      linkButton={true}
      label="Home"
      containerElement={<Link to="/" />}
    />
    <FlatButton>
      <Logout onLogoutClick={onLogoutClick}/>
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
