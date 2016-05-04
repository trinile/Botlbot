import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import styles from '../styles/main.css';

class Login extends Component {

  render() {

    return (
      <div>
        <h1 className={styles.login}>Welcome! Login to Twitter!</h1>
        <button onClick={(event) => this.handleClick(event)} className={styles.button}>
          Here
        </button>
      </div>
    )
  }

  handleClick(event) {
    //DO SOMETHING
  }
}

export default Login;
