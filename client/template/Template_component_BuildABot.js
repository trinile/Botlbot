import React, { PropTypes } from 'react';
import TemplateContainer from './Template_container';
import TemplateControlsContainer from './Template_container_Controls';
import styles from './styles/template.css';


const BuildABot = (props, context) => {
  return (
  <main>
    <h1 className={styles.title}>Build a bot!</h1>
    <div className={styles.container}>
      <TemplateContainer />
      <TemplateControlsContainer />
    </div>
  </main>
)};

BuildABot.contextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
}
export default BuildABot;
