import React, { PropTypes, Component } from 'react';
import TemplateContainer from '../containers/TemplateContainer';
import TemplateControlsContainer from '../containers/TemplateControlsContainer';
import { getTemplateAsync } from '../actions/template';
import styles from '../styles/template.css';

class EditABot extends Component {

  componentWillMount() {
    this.context.store.dispatch(getTemplateAsync(this.props.params.id));
  }

  componentWillReceiveProps(newprops) {
    // I KNOW THIS IS BAD, OK?
    console.log(newprops.params.id);
    this.context.store.dispatch(getTemplateAsync(newprops.params.id));
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
