import React, {PropTypes} from 'react';
import TemplateContainer from '../containers/TemplateContainer';
import TemplateControlsContainer from '../containers/TemplateControlsContainer';
import styles from '../styles/template.css';


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
