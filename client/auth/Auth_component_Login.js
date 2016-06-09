import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

/**
* Login button component for User to authenticate via Twitter
* User is directed to a link to be authenticated
*/

const Login = ({ onLoginClick }) => (
  <div>
    <RaisedButton
      label="LOGIN"
      href="http://127.0.0.1:1337/auth"
      linkButton={true}
    />
  </div>
);

export default Login;
