import React, { PropTypes } from 'react';
import {Menu, FloatingActionButton, MenuItem} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import menuTree from '../menuTree';

// onItemTouchTap={addTemplateMenu}
const TemplateMenu = ({
  templateMenu,
  navigateDown,
  navigateUp
}) => (
  <Menu>
    {
      Object.keys(templateMenu
        .reduce((menuTree, key) => menuTree[key], menuTree))
        .map((item, index) => (
          <MenuItem 
            value={item} 
            primaryText={item} 
            key={index} 
            onTouchTap={() => navigateDown(item)}
          />
        )
      )
    }
  </Menu>
);

TemplateMenu.propTypes = {
//   template: PropTypes.array,
  addTemplateMenu: PropTypes.func
};

export default TemplateMenu;


/*<MenuItem value={'myFeed'} primaryText="My Feed" />
<MenuItem value={'News'} primaryText="News" />
<MenuItem value={'randomTweet'} primaryText="Random Tweet" />*/
