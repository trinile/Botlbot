import React, {PropTypes} from 'react';
import TemplateContainer from '../containers/TemplateContainer';
import TemplateControlsContainer from '../containers/TemplateControlsContainer';

const EditABot = (props, context) => {
  return (
  <main>
    <h1>Edit an existing bot!</h1>
    <TemplateContainer />
    <TemplateControlsContainer />
  </main>
)};

EditABot.contextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
}
export default EditABot;
