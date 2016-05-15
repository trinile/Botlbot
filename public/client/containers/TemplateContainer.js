import { connect } from 'react-redux';
import Template from '../components/Template';
import { toggleEditing, toggleAdding, toggleSelecting, toggleStatus } from '../actions/templateBuilder';
import { navigateOut, startAtLeaf } from '../actions/templateMenu';
import { loadParams, updateChunk } from '../actions/chunk';

const mapStateToProps = (state) => ({ 
  template: state.template, 
  templateBuilder: state.templateBuilder, 
  templateMenu: state.templateMenu
});

const mapDispatchToProps = (dispatch) => ({
  toggleEditing: (index) => {
    dispatch(toggleEditing(index));
  }, 
  toggleAdding: (index) => {
    dispatch(toggleAdding(index));
  },
  toggleSelecting: () => {
    dispatch(toggleSelecting());
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
  },
  updateChunk: (key, value) => {
    dispatch(updateChunk(key, value));
  }
});

const TemplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template);

export default TemplateContainer;
