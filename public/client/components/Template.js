import React, { PropTypes } from 'react';
import Chunk from './Chunk';
import Popover from 'react-popover';
import styles from '../styles/template.css';

const Template = ({
  template,
  // updateTemplate,
  trashTemplate,
  saveTemplate
}) => {
  let textarea;

  return (
    <article >
    <style>{`
      .Popover-body {
        display: inline-flex;
        flex-direction: column;
        padding: 2rem 4rem;
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
      >{
        template.map((item, index) => {
          console.log(item);
          return (
            <Popover key={index} isOpen={true} body={'wow!'} place={'below'} >
              <Chunk item={item}/>
            </Popover>
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
