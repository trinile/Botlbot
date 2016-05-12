import React, { PropTypes } from 'react';
import Pop from './Pop';
import TemplateMenuContainer from '../containers/TemplateMenuContainer';
import styles from '../styles/template.css';

const Template = ({
  templateBuilder: status,
  template,
  trashTemplate,
  saveTemplate,
  toggleEditing,
  toggleAdding,
  toggleStatus
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
        id={0}
        clickHandler={toggleAdding}
        outsideClickHandler={toggleStatus}
        isOpen={status.isAdding && status.id === 0}
      />
    {
      template.map((item, index) => {
        console.log(item);
        return (
          <span key={index}>
            <Pop 
              item={item}
              id={index}
              clickHandler={toggleEditing}
              outsideClickHandler={toggleStatus}
              isOpen={status.isEditing && status.id === index}
            />
            <Pop // + button
              item={{'Add!':true}}
              id={index + 1}
              clickHandler={toggleAdding}
              outsideClickHandler={toggleStatus}
              isOpen={status.isAdding && status.id === index + 1}
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
  templateBuilder: PropTypes.object,
  updateTemplate: PropTypes.func,
  trashTemplate: PropTypes.func,
  toggleEditing: PropTypes.func,
  toggleAdding: PropTypes.func,
  toggleStatus: PropTypes.func
};

export default Template;
