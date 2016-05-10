import { connect } from 'react-redux';
import Source from '../components/Source';
import { addSource } from '../actions/source';


const mapStateToProps = (state) => ({ template: state.template });
const mapDispatchToProps = (dispatch) => ({
  addSource: (e, child) => {
    dispatch(addSource(child.props.value));
  }
});

const SourcesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Source);

export default SourcesContainer;
