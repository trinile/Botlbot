import React from 'react';
import Login from '../auth/Auth_component_Login';
import styles from '../logo/styles/logo.css';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

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
    <div style={{alignSelf: 'flex-end', marginRight: '25%', fontFamily: 'Roboto, sans-serif'}}>
      <h1 style={{backgroundColor: 'inherit', color: 'inherit', marginBottom: '4px'}}>botlbot</h1>
      <p style={{marginTop: '0px', marginBottom: '3rem'}}>your twitterbot in a bottle</p>
      <div style={{display: 'flex'}}> 
        <Login />
        <RaisedButton style={{marginLeft: '1.5rem'}} label='About' containerElement={<Link to="/about" />}/>
      </div>
    </div>
  </div>
);

export default Splash;
