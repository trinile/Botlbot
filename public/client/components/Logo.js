import React from 'react';
import styles from '../styles/logo.css';

const Logo = () => (
  <div style={{position: 'relative', left: '1rem', minHeight: '64px'}}>
    <img
      src={require('../assets/littlebottle.png')}
      className={styles.bottle}
    />
    <img
      src={require('../assets/littlegear.png')}
      className={styles.gear}
    />
    <img
      src={require('../assets/littlegear.png')}
      className={styles.littlegear}
    />
  </div>
);

export default Logo;
