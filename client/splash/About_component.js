import React, { Component } from 'react';
import Login from '../auth/Auth_component_Login';
import Logo from '../logo/Logo_component';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../logo/styles/logo.css';
import splashStyles from './styles/splash.css';

import { 
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll
} from 'react-scroll'; 

class About extends Component {

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className={splashStyles.container}>
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
          <div style={{alignSelf: 'flex-end', marginRight: '25%'}}>
            <h1 style={{marginBottom: '4px'}}>botlbot</h1>
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
          <span>
            <h2>How it works</h2>
            <p>botlbot lets you create your own twitterbots, without having to write any code.</p>
          </span>
          <div className={splashStyles.sample}>
            <img src={require('../assets/template.png')} />
            <span className={splashStyles.sampletext}>
              <p>Use the template builder to construct a frame for your tweets. </p>
              <p>Pull in news articles, tweets from your network, emoji, or content from a variety of other sources.</p>
            </span>
          </div>
          <div className={splashStyles.sample}>
            <span className={splashStyles.sampletext}>
              <p>We'll generate tweets for you as soon as you create a template, and we'll refresh your dashboard every half hour after that. </p>
              <p>Edit your tweets, post them right away, or schedule them for later.</p>
            </span>
            <img src={require('../assets/tweet.png')} />
          </div>
          <Link to="team" smooth={true} duration={500} >
            <RaisedButton label='the team'/>
          </Link>
          <br/>
        </Element>
        <Element name="team" className={splashStyles.element}>
          <br/>
          <h2>botlbot was built by:</h2>
          <div className={splashStyles.team}>
            <span className={splashStyles.bio}>
              <img src={require('../assets/littlegear.png')} className={styles.teamgear}/>
              <img src={'https://avatars3.githubusercontent.com/u/5132757'} className={splashStyles.bioimage}/>
              <p><span className={splashStyles.bioname}>Nathaniel Edwards</span> <br/> Software Engineer</p>
              <span className={splashStyles.biobuttons}>
                <a href="https://github.com/nthaniel/" >
                  <img src={require('../assets/github.png')} />
                </a>
                <a href="https://www.linkedin.com/in/nthaniel" >
                  <img src={require('../assets/linkedin.png')} />
                </a>
              </span>
            </span>
            <span className={splashStyles.bio}>
              <img src={require('../assets/littlegear.png')} className={styles.teamgearreverse}/>
              <img src={'https://avatars1.githubusercontent.com/u/13231400'} className={splashStyles.bioimage}/>
              <p><span className={splashStyles.bioname}>Trini Le</span> <br/> Software Engineer</p>
              <span className={splashStyles.biobuttons}>
                <a href="https://github.com/trinile/">
                  <img src={require('../assets/github.png')} />
                </a>
                <a href="https://www.linkedin.com/in/trinile">
                  <img src={require('../assets/linkedin.png')} />
                </a>
              </span>
            </span>
            <span className={splashStyles.bio}>
              <img src={require('../assets/littlegear.png')} className={styles.teamgear}/>
              <img src={'https://avatars3.githubusercontent.com/u/15823817'} className={splashStyles.bioimage}/>
              <p><span className={splashStyles.bioname}>Danny Tuñon</span> <br/> Software Engineer</p>
              <span className={splashStyles.biobuttons}>
                <a href="https://github.com/danieltunon">
                  <img src={require('../assets/github.png')} />
                </a>
                <a href="https://www.linkedin.com/in/dannytunon">
                  <img src={require('../assets/linkedin.png')} />
                </a>
              </span>
            </span>
          </div>
          <br/>
          <div style={{display: 'flex'}}> 
            <Login />
            <Link to="intro" smooth={true} duration={500} >
              <RaisedButton label='to top' style={{marginLeft: '1.5rem'}}/>
            </Link>
          </div>
          <br/>
        </Element>
        <div>
        </div>
      </div>
    );
  }
};

export default About;