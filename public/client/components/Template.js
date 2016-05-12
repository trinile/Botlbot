import React, { PropTypes } from 'react';
import Pop from './Pop';
import SourceContainer from '../containers/SourceContainer';
import styles from '../styles/template.css';
// import { FlatButton } from 'material-ui';

const Template = ({
  template,
  // updateTemplate,
  trashTemplate,
  saveTemplate
}) => (
  <article >
    <style>{`
      .Popover-body {
        display: inline-flex;
        flex-direction: column;
        padding: 0.5rem;
        background: hsl(0, 0%, 27%);
        color: white;
        border-radius: 0.3rem;
      }
      .Popover-tipShape {
        fill: hsl(0, 0%, 27%)
      }`}
    </style>
    <h3>Template</h3>
    <div 
      className={styles.template}
    >
      <Pop
        item={{'Add!':true}}
      />
    {
      template.map((item, index) => {
        console.log(item);
        return (
          <span key={index}>
            <Pop 
              item={item}
            />
            <Pop // + button
              item={{'Add!':true}}
            />
          </span>
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

Template.propTypes = {
  template: PropTypes.array,
  updateTemplate: PropTypes.func,
  trashTemplate: PropTypes.func,
};

export default Template;
