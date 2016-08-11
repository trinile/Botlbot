import React from 'react';
import styles from './styles/dashboard.css';

const EmptyList = () => (
  <div className={styles.container} >
    <h1> Currently No Tweets ...</h1>
    <img 
      src={require('../assets/blackgear.png')} 
      className={styles.gear}
      alt="gear img"
    />
    <img 
      src={require('../assets/blackgear.png')}
      className={styles.littlegear} 
      alt="gear img"
    />
    Go to Templates Builder to generate new tweets
  </div>
);

export default EmptyList;
