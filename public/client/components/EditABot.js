import React, {PropTypes} from 'react';
import TemplateContainer from '../containers/TemplateContainer';
import TemplateControlsContainer from '../containers/TemplateControlsContainer';
import styles from '../styles/template.css';

const EditABot = (props, context) => {
  return (
  <main>
    <h1 className={styles.title}>Edit an existing bot!</h1>
    <div className={styles.container}>
      <TemplateContainer />
      <TemplateControlsContainer />
    </div>
  </main>
)};

EditABot.contextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
}
export default EditABot;
