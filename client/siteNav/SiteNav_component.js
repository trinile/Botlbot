import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Logout from '../auth/Auth_component_Logout';
// import Dashboard from '../dashboard/Dashboard_container';

const style = {
  title: {
    fontFamily: 'Roboto, sans-serif',
    // fontSize: '1.5em',
  },
  toolbar: {
    backgroundColor: '#89bdd3',
  }
}
const SiteNav = ({ isAuthenticated, onLogoutClick }) => (
  <Toolbar style={style.toolbar}>
  <ToolbarTitle text="botlbot" style={style.title}/>
  <ToolbarGroup>
    <FlatButton
      linkButton={true}
      label="About"
      containerElement={<Link to="/about" />}
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
