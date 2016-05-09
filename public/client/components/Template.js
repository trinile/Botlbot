import React, { PropTypes } from 'react';

const Template = ({
  template,
  updateTemplate,
  trashTemplate
}) => {
  let textarea;

  return (
    <article >
      <h3>Template</h3>
      <textarea ref={(node) => (textarea = node)} defaultValue={template}></textarea>
      <div>
        <button onClick={() => {textarea.value = ''; trashTemplate()}}>Trash</button>
      </div>
      <div>
        <button onClick={() => updateTemplate(textarea.value)}>Save</button>
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
