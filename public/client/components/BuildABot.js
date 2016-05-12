import React, {PropTypes} from 'react';
import TemplateContainer from '../containers/TemplateContainer';
// import TemplateMenu from './TemplateMenu';
import TemplateMenuContainerWithContext from '../containers/TemplateMenuContainer';

const BuildABot = (props, context) => {
  console.log(context);
  return (
  <main>
    <h1>Build a bot!</h1>
    <TemplateContainer />
    {/*<TemplateMenuContainerWithContext />*/}
  </main>
)};

BuildABot.contextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
}
export default BuildABot;
