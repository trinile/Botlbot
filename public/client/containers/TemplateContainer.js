import { connect } from 'react-redux';
import Template from '../components/Template';
import { updateTemplate, trashTemplate } from '../actions/template';

const mapStateToProps = (state) => ({ template: state.template });
const mapDispatchToProps = (dispatch) => ({
  updateTemplate: (template) => {
    dispatch(updateTemplate(template));
  },
  trashTemplate: () => {
    dispatch(trashTemplate());
  }
});

const TemplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template);

export default TemplateContainer;
