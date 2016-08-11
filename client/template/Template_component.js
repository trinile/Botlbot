import React, { PropTypes } from 'react';
import Pop from '../templateMenu/TemplateMenu_component_PopOver';
import styles from './styles/template.css';
import { Paper } from 'material-ui';
import Pure from 'purecss/build/pure-min.css';

const clickOut = (e, toggleStatus, navigateOut) => {
  let parent = e.target.parentNode;
  let shouldToggle = true;
  while(parent) {
    if (parent.className === "noPropagation") {
      shouldToggle = false;
      break;
    }
    parent = parent.parentNode;
  }
  shouldToggle && toggleStatus();
  shouldToggle && setTimeout(navigateOut, 300);
};

const Template = ({
  templateBuilder: status,
  template,
  toggleEditing,
  toggleAdding,
  toggleSelecting,
  toggleStatus,
  navigateOut,
  startAtLeaf,
  loadParams,
  updateChunk
}) => (
  <article
    className={[`${Pure['pure-u-1']}`]}>
    <style>{`
      .Popover {
        z-index: 1400;
      }
      .Popover-body {
        display: inline-flex;
        flex-direction: column;
        padding: 0.5rem;
        background: hsl(0, 0%, 93%);
        color: white;
        width: auto;
        border-radius: 0.3rem;
        max-width: 10rem;
        max-height: 30rem;
        overflow: auto;
        z-index: 1400;
      }
      .Popover-body > div {
        width: auto !important;
      }
      .Popover-tipShape {
        fill: hsl(0, 0%, 93%)
      }`}
    </style>
    <Paper 
      zdepth={2}
      className={[
        `${styles.template}`
      ]}
    >
      <Pop
        item={{'Add!':true}}
        id={0}
        clickHandler={() => {if (!status.isSelecting) toggleAdding(0)}}
        outsideClickHandler={(e) => clickOut(e, toggleStatus, navigateOut)}
        isOpen={!status.isSelecting && status.isAdding && status.id === 0}
      />
    {
      template.map((item, index) => {
        return (
          <span key={index}>
            <Pop // this is the chunk
              item={item}
              id={index}
              clickHandler={() => { 
                if(status.isSelecting) {
                  toggleSelecting();
                  updateChunk('target', template[index].id);
                } else {
                  toggleEditing(index); 
                  startAtLeaf(item.chunkType); 
                  loadParams(item.chunkType, template[index].params);
                }
              }}
              outsideClickHandler={(e) => clickOut(e, toggleStatus, navigateOut)}
              isOpen={!status.isSelecting && status.isEditing && status.id === index}
            />
            <Pop // this is the + button
              item={{'Add!':true}}
              id={index + 1}
              clickHandler={() => {if (!status.isSelecting) toggleAdding(index + 1)}}
              outsideClickHandler={(e) => clickOut(e, toggleStatus, navigateOut)}
              isOpen={!status.isSelecting && status.isAdding && status.id === index + 1}
            />
          </span>
        )
      })
    }
    </Paper>
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
