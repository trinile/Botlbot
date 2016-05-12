import React, { PropTypes } from 'react';
import {Menu, FloatingActionButton, MenuItem} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

const Source = () => (
  <Menu 
    // onItemTouchTap={addSource}
  >
    <MenuItem value={'myFeed'} primaryText="My Feed" />
    <MenuItem value={'News'} primaryText="News" />
    <MenuItem value={'randomTweet'} primaryText="Random Tweet" />
  </Menu>
);

// Source.propTypes = {
//   template: PropTypes.array,
//   addSource: PropTypes.func
// };

export default Source;
