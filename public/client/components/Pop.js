import React, { PropTypes } from 'react';
import Chunk from './Chunk';
import AddButton from './AddButton';
import Source from './Source';
import SourceContainerWithContext from '../containers/SourceContainer';
import Popover from 'react-popover';

const Pop = ({
  item
}, {
  muiTheme, 
  store
}) => {
  return (
    <Popover 
      preferPlace='below'
      body={<SourceContainerWithContext muiTheme={muiTheme} store={store} />}
      isOpen={true}
      onOuterAction={() => {console.log('hi')}}
    >
      {item.source ?
        <Chunk item={item} />
        : <AddButton />
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
