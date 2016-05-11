import { connect } from 'react-redux';
import Template from '../components/Template';
import { updateTemplate, trashTemplate, saveTemplate } from '../actions/template';
import debounce from 'lodash.debounce';

const update = debounce(
  (val, dispatch) => {
    dispatch(updateTemplate(val));
  },
  300,
  {maxWait: 1000}
);

const mapStateToProps = (state) => ({ template: state.template });
const mapDispatchToProps = (dispatch) => ({
  updateTemplate: (e) => { // NOTE: this code is not currently used, I also removed the updateTemplate reducer
    let val = e.target.value;
    update(val, dispatch);
  },
  trashTemplate: () => {
    dispatch(trashTemplate());
  },
  saveTemplate: () => {
    dispatch(saveTemplate());
  }
});

const TemplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template);

export default TemplateContainer;
