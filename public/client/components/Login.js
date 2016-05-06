import React from 'react';
import styles from '../styles/main.css';

const Login = () => (
  <div>
    <div className={styles.login}>
      <form action="http://127.0.0.1:1337/auth">
        <input type="submit" className={styles.button} value="Login to Twitter" />
      </form>
    </div>
  </div>
);

export default Login;
