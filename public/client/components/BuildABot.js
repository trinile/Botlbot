import React, {PropTypes} from 'react';
import TemplateContainer from '../containers/TemplateContainer';

const BuildABot = (props, context) => {
  return (
  <main>
    <h1>Build a bot!</h1>
    <TemplateContainer />
  </main>
)};

BuildABot.contextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
}
export default BuildABot;
