import React from 'react';
import Login from './Login';
import Logo from './Logo';

const About = () => (
  <div>
    <Logo />
    <Login />
    <p>botlbot lets you build your own twitterbots with a simple, easy-to-use visual editor.</p>
    <p>botlbot was built by:</p>
    <div>
      <img src={require('../assets/blackgear.png')} />
      <img src={require('../assets/blackgear.png')} />
      <img src={require('../assets/blackgear.png')} />
    </div>
  </div>
);

export default About;