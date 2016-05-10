import React, { PropTypes } from 'react';
import ContentEditable from 'react-contenteditable';
import styles from '../styles/template.css';

const Template = ({
  template,
  updateTemplate,
  trashTemplate,
  saveTemplate
}) => {
  let textarea;

  return (
    <article >
      <h3>Template</h3>
      <ContentEditable 
        ref={(node) => (textarea = node)} 
        html={template}
        onChange={(e) => updateTemplate(e)}
        className={styles.template}
      >
      </ContentEditable>
      <div>
        <button onClick={() => {textarea.html = ''; trashTemplate()}}>Trash</button>
      </div>
      <div>
        <button onClick={saveTemplate}>Save</button>
      </div>
    </article>
  );
};

Template.propTypes = {
  template: PropTypes.string,
  updateTemplate: PropTypes.func,
  trashTemplate: PropTypes.func,
};

export default Template;
