import React from 'react';
import { connect } from 'react-redux';
import EditABot from './Template_component_EditABot';
import { getTemplateAsync, trashTemplate } from './Template_actions';
import { loadHighestId } from '../templateChunk/TemplateChunk_actions_counter';

const mapStateToProps = (state) => ({
  template: state.template,
});
const mapDispatchToProps = (dispatch) => ({
  getTemplate: (id) => dispatch(getTemplateAsync(id)),
  loadHighestId: (template) => dispatch(loadHighestId(template)),
  trashTemplate: () => dispatch(trashTemplate()),
});

const EditABotContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditABot);

export default EditABotContainer;
