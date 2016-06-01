import React, { Component } from 'react';
import Login from './Login';
import Logo from './Logo';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../styles/logo.css';
import splashStyles from '../styles/splash.css';

import { 
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll
} from 'react-scroll'; 

class About extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <div>
        <style>{`
          body {
            margin: 0px;
          }
        `}
        </style>
        <Element name="intro" className={splashStyles.element}>
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
              <Link to="howItWorks" smooth={true} duration={500} >
                <RaisedButton label='How it works' style={{marginLeft: '1.5rem'}}/>
              </Link>
            </div>
          </div>
        </Element>
        <Element name="howItWorks" className={splashStyles.element}>
          HOW IT WORKS
          <Link to="team" smooth={true} duration={500} >
            the team
          </Link>
        </Element>
        <Element name="team" className={splashStyles.element}>
          THE TEAM
          <Link to="intro" smooth={true} duration={500} >
            to top
          </Link>
        </Element>
        <Login />
        <p>botlbot lets you build your own twitterbots with a simple, easy-to-use visual editor.</p>
        <p>botlbot was built by:</p>
        <div>
          <img src={require('../assets/blackgear.png')} />
        </div>
      </div>
    );
  }
};

export default About;