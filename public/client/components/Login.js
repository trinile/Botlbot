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


const Login = () => (
  <div>
  <RaisedButton
      label="LOGIN TO TWITTER"
      labelColor="white"
      linkButton={true}
      href="http://127.0.0.1:1337/auth"
      primary={true}
      style={styles.button}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
    />
  </div>
);

export default Login;
