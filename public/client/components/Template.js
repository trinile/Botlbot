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
      <div 
        className={styles.template}
      >{
        template.map((item, index) => {
          return (
            <span key={index}>{item.source}</span>
          )
        })
      }
      </div>
      <div>
        <button onClick={() => {trashTemplate()}}>Trash</button>
      </div>
      <div>
        <button onClick={saveTemplate}>Save</button>
      </div>
    </article>
  );
};

Template.propTypes = {
  template: PropTypes.array,
  updateTemplate: PropTypes.func,
  trashTemplate: PropTypes.func,
};

export default Template;
