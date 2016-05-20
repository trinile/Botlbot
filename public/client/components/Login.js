import React from 'react';
// import styles from '../styles/main.css';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

/**
* Login button component for User to authenticate via Twitter
* User is directed to a link to be authenticated
*/

const Login = ({onLoginClick}) => (
  <div>
  <RaisedButton
      label="LOGIN"
      href="/auth"
      labelColor="white"
      linkButton={true}
      primary={true}
    />
  </div>
);

export default Login;
