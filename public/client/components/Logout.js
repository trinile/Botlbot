import React, { Component, PropTypes } from 'react';
import styles from '../styles/main.css';

export default class Logout extends Component {

  render() {
    const { onLogoutClick } = this.props

    return (
      <div>
        <div className={styles.login}>
        <form action="http://127.0.0.1:1337/logout">
        <input type="submit" className={styles.button} value="Logout" />
        </form>
        </div>
      </div>
    );
  }

};

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
};