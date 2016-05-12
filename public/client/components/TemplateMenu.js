import React, { PropTypes } from 'react';
import {Menu, FloatingActionButton, MenuItem} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

const TemplateMenu = ({
  addTemplateMenu
}) => (
  <Menu 
    onItemTouchTap={addTemplateMenu}
  >
    <MenuItem value={'myFeed'} primaryText="My Feed" />
    <MenuItem value={'News'} primaryText="News" />
    <MenuItem value={'randomTweet'} primaryText="Random Tweet" />
  </Menu>
);

TemplateMenu.propTypes = {
//   template: PropTypes.array,
  addTemplateMenu: PropTypes.func
};

export default TemplateMenu;
