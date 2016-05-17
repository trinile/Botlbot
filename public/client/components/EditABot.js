import React, { PropTypes, Component } from 'react';
import TemplateContainer from '../containers/TemplateContainer';
import TemplateControlsContainer from '../containers/TemplateControlsContainer';
import { getTemplateAsync } from '../actions/template';
import { loadHighestId } from '../actions/chunkIDCounter';
import styles from '../styles/template.css';

class EditABot extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // this.context.store.dispatch(getTemplateAsync(this.props.params.id));
    this.props.getTemplate(this.props.params.id);
  }

  componentWillReceiveProps(newprops) {
    console.log('TEMPLATE ID IS', newprops.params.id);
    console.log('store IS', this.context.store);
    // this.context.store.dispatch(getTemplateAsync(newprops.params.id));
    this.props.params.id !== newprops.params.id && this.props.getTemplate(newprops.params.id);
  }

  componentDidUpdate() {
    // FIX THIS
    // this.context.store.dispatch(loadHighestId(this.context.store.template));
    this.props.loadHighestId(this.props.template);
  }

  render() {
    return (
      <main>
        <h1 className={styles.title}>Edit an existing bot!</h1>
        <div className={styles.container}>
          <TemplateContainer />
          <TemplateControlsContainer />
        </div>
      </main>
    )
  }
};

EditABot.contextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
}

export default EditABot;
