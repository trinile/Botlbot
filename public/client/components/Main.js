import React, { Component, PropTypes} from 'react';
import styles from '../styles/main.css';
import Login from './Login';
import Logout from './Logout';

const Main = () => {
  const { dispatch, isAuthenticated } = this.props
  return (
    <div>
      <Login />
    </div>
  );
};

App.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default Main;
