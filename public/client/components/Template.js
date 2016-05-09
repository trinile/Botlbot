import React, { PropTypes } from 'react';

const Template = ({
  template = {garbage: 'balp'},
  updateTemplate,
  trashTemplate
}) => (
  <article >
    <h3>Template</h3>
    <textarea onChange={updateTemplate}>{JSON.stringify(template)}</textarea>
    <div>
      <button onClick={trashTemplate}>Trash</button>
    </div>
  </article>
);

Template.propTypes = {
  template: PropTypes.object,
  updateTemplate: PropTypes.func,
  trashTemplate: PropTypes.func,
};

export default Template;
