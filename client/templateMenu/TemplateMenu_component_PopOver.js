import React, { PropTypes } from 'react';
import Chunk from '../templateChunk/TemplateChunk_component';
import AddButton from './TemplateMenu_component_AddButton';
// import TemplateMenu from './TemplateMenu_component';
import TemplateMenuContainerWithContext from './TemplateMenu_container';
import Popover from 'react-popover';

const Pop = ({item, isOpen, id, clickHandler, outsideClickHandler}, {muiTheme, store}) => {
  return (
    <Popover 
      preferPlace='below'
      body={<TemplateMenuContainerWithContext muiTheme={muiTheme} store={store} />}
      isOpen={isOpen}
      onOuterAction={outsideClickHandler}
    >
      {item.chunkType 
        ? <Chunk item={item} onClick={() => clickHandler(id)} />
        : <AddButton onClick={() => clickHandler(id)} />
      }
    </Popover>
)}

Pop.propTypes = {
  item: PropTypes.object
};

Pop.contextTypes = {
  store: PropTypes.object,
  muiTheme: PropTypes.object
}

export default Pop;
