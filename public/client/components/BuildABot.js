import React, {PropTypes} from 'react';
import TemplateContainer from '../containers/TemplateContainer';
import TemplateControlsContainer from '../containers/TemplateControlsContainer';

const BuildABot = (props, context) => {
  return (
  <main>
    <h1>Build a bot!</h1>
    <TemplateContainer />
    <TemplateControlsContainer />
  </main>
)};

BuildABot.contextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
}
export default BuildABot;
