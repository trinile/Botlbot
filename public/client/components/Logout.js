import React, { Component, PropTypes } from 'react';
import styles from '../styles/main.css';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

const Logout = ({onLogoutClick}) => (

  <div>
  <RaisedButton
      onClick={onLogoutClick}
      label="LOGOUT"
      labelColor="white"
      linkButton={true}
      primary={true}
    />
  </div>
);

Logout.propTypes = {
  onLogoutClick:PropTypes.func
};
export default Logout;
