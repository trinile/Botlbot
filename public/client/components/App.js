import React, {Component, PropTypes} from 'react';
import styles from '../styles/main.css';
import Login from './Login';
import Logout from './Logout';

const App = () => {
  const { dispatch, isAuthenticated } = this.props
  return (
    <div>
    {
      <!isAuthenticated && Login onLoginClick={ creds => dispatch(loginUser(creds)) } />
    }
    {
      isAuthenticated && <Logout onLogoutClick={ () => dispatch(logoutUser()) } />
    }
    </div>
  );
};

App.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}
export default App;
