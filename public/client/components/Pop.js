import React, { PropTypes } from 'react';
import Chunk from './Chunk';
import AddButton from './AddButton';
import TemplateMenu from './TemplateMenu';
import TemplateMenuContainerWithContext from '../containers/TemplateMenuContainer';
import Popover from 'react-popover';

const Pop = ({item, isOpen, id, clickHandler, outsideClickHandler}, {muiTheme, store}) => {
  return (
    <Popover 
      preferPlace='below'
      body={<TemplateMenuContainerWithContext muiTheme={muiTheme} store={store} />}
      isOpen={isOpen}
      onOuterAction={outsideClickHandler}
    >
      {item.source 
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
