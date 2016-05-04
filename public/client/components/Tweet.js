import React, { Component } from 'react';
import styles from '../styles/main.css';

const Tweet = () => (
  <div className={styles.tweet}>
    <h1>Tweet</h1>
    <section>
      <button>Post</button>
      <span> </span>
      <button>Edit</button>
      <span> </span>
      <button>Trash</button>
    </section>
    <section>
      <p>This is where the generated tweet will live. Super cool huh?</p>
    </section>
  </div>
);

export default Tweet;
