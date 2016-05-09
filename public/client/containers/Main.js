import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SiteNav from '../components/SiteNav';
import { logoutUser } from '../actions/Logout';
import { loginUser } from '../actions/Login';

const Main = ({ dispatch, isAuthenticated, children }) => (
  <div>
    <SiteNav 
      isAuthenticated={isAuthenticated} 
      onLoginClick={() => dispatch(loginUser())}
      onLogoutClick={() => dispatch(logoutUser())}/>
    {children}
  </div>
);

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.object,
};

// These props come from the application's
// state when it is started
function mapStatetoProps(state) {
  const { authStatus } = state;
  const { isAuthenticated } = authStatus;
  return {
    isAuthenticated
  };
}

const MainContainer = connect(
  mapStatetoProps
)(Main);

export default MainContainer;
