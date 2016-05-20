import React from 'react';
import Login from './Login';
import styles from '../styles/logo.css';

const Splash = () => (
  <div style={{
    backgroundColor: 'black', 
    color: 'white', 
    // height: window.innerHeight + 16,
    // width: window.innerWidth + 16,
    height: '105%',
    width: '105%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    left: '-8px',
    top: '-8px'
  }}>
    <span style={{
      position: 'relative', 
      height: '20rem',
      width: '45rem'
    }}>
      <img
        src={require('../assets/whitebottle.png')}
        className={styles.bigbottle}
      />
      <img
        src={require('../assets/blackgear.png')}
        className={styles.biggear}
      />
      <img
        src={require('../assets/blackgear.png')}
        className={styles.biglittlegear}
      />
    </span>
    <div style={{alignSelf: 'flex-end', marginRight: '25%'}}>
      <h1 style={{backgroundColor: 'inherit', color: 'inherit', marginBottom: '4px'}}>botlbot</h1>
      <p style={{marginTop: '0', marginBottom: '3rem'}}>your twitterbot in a bottle</p>
      <Login />
    </div>
  </div>
);

export default Splash;
