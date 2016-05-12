import React, {PropTypes} from 'react';
import TemplateContainer from '../containers/TemplateContainer';
// import Source from './Source';
import SourceContainerWithContext from '../containers/SourceContainer';

const BuildABot = (props, context) => {
  console.log(context);
  return (
  <main>
    <h1>Build a bot!</h1>
    <TemplateContainer />
    {/*<SourceContainerWithContext />*/}
  </main>
)};

BuildABot.contextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
}
export default BuildABot;
