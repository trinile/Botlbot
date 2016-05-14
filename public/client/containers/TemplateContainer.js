import { connect } from 'react-redux';
import Template from '../components/Template';
import { trashTemplate, saveTemplate } from '../actions/template';
import { toggleEditing, toggleAdding, toggleStatus } from '../actions/templateBuilder';
import { navigateOut, startAtLeaf } from '../actions/templateMenu';
import { loadParams } from '../actions/chunk';

const mapStateToProps = (state) => ({ 
  template: state.template, 
  templateBuilder: state.templateBuilder, 
  templateMenu: state.templateMenu
});

const mapDispatchToProps = (dispatch) => ({
  trashTemplate: () => {
    dispatch(trashTemplate());
  },
  saveTemplate: () => {
    dispatch(saveTemplate());
  },
  toggleEditing: (index) => {
    dispatch(toggleEditing(index));
  }, 
  toggleAdding: (index) => {
    dispatch(toggleAdding(index));
  },
  toggleStatus: () => {
    dispatch(toggleStatus());
  },
  navigateOut: () => {
    dispatch(navigateOut());
  },
  startAtLeaf: (chunkType) => {
    dispatch(startAtLeaf(chunkType));
  },
  loadParams: (chunkType, params) => {
    dispatch(loadParams(chunkType, params));
  }
});

const TemplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template);

export default TemplateContainer;
