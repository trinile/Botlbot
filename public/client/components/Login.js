import React from 'react';
// import styles from '../styles/main.css';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  button: {
    margin: 12,
  }
};

/**
* Login button component for User to authenticate via Twitter
* User is directed to a link to be authenticated
*/

const Login = ({onLoginClick}) => (
  <div>
  <RaisedButton
      label="LOGIN TO TWITTER"
      href="http://127.0.0.1:1337/auth"
      labelColor="white"
      linkButton={true}
      primary={true}
      style={styles.button}
    />
  </div>
);

export default Login;
