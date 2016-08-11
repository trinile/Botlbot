import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { ToolbarGroup } from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Logout from '../auth/Auth_component_Logout';
import HomeIcon from 'material-ui/svg-icons/Action/home';

const style = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    color: 'black',
  },
  toolbar: {
    backgroundColor: '#89bdd3',
    zIndex:"",
  }
};

const SiteNav = ({ onLogoutClick, onToggleMenu}) => {
  return (
  <AppBar 
    title="Botlbot"
    showMenuIconButton={false}
    style={style.toolbar} 
    titleStyle={style.title}
    zIndex="2"
  >
  <ToolbarGroup>
    <IconButton
      link={true}
      tooltip="Home" 
      touch={true}
      containerElement={<Link to="/" />}
      iconStyle={{color: 'white', fill: 'white'}}
    >
      <HomeIcon/>
    </IconButton>
    <FlatButton>
      <Logout onLogoutClick={onLogoutClick}/>
    </FlatButton>
  </ToolbarGroup>
  </AppBar>
  )
};

SiteNav.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLoginClick: PropTypes.func,
  onLogoutClick: PropTypes.func,
  onToggleMenu: PropTypes.func,
};

export default SiteNav;
