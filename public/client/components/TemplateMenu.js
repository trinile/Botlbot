import React, { PropTypes } from 'react';
import { Menu, MenuItem, TextField, SelectField } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import menuTree from '../menuTree';

var formatter = (templateMenu, navigateDown) => {
  const currentLevel = templateMenu.reduce(function(menuTree, key){return menuTree[key];}, menuTree);
  const menu = [];
  if (currentLevel.leaf) {
    for (var key in currentLevel) {
      if (Array.isArray(currentLevel[key])) {
        menu.push(
          <SelectField 
            hintText={key}
            key={key}
            onChange={(e) => {}}
            value={'some part of state'}
          >
            {
              currentLevel[key].map((item, index) => {
                return (
                  <MenuItem 
                    className={"noPropagation"}
                    value={item} 
                    primaryText={item} 
                    key={index} 
                  />
                )
              })
            }
          </SelectField>
          // <TextField hintText={key} />
        );
      }
      if (typeof currentLevel[key] === 'number') {
        menu.push(
          <TextField hintText={key} key={key} />
        )
      }
      if (typeof currentLevel[key] === 'string') {
        menu.push(
          <TextField hintText={key} key={key} />
        )
      }
    }
  } else {
    return (
      <Menu children={Object.keys(currentLevel).map((item, index) => {
        return (
          <MenuItem 
            value={item} 
            primaryText={item} 
            key={index} 
            onTouchTap={() => navigateDown(item)}
          />
        )
      })} />
    )
  }

  return (
    <Menu>
      {menu}
    </Menu>
  )
};

// onItemTouchTap={addTemplateMenu}
const TemplateMenu = ({
  templateMenu,
  navigateDown,
  navigateUp
}) => {
  return formatter(templateMenu, navigateDown)
};

TemplateMenu.propTypes = {
  templateMenu: PropTypes.arrayOf(PropTypes.string),
  navigateDown: PropTypes.func,
  navigateUp: PropTypes.func
};

export default TemplateMenu;


// Object.keys(templateMenu
      //   .reduce((menuTree, key) => menuTree[key], menuTree))
      //   .map((item, index) => (
      //     <MenuItem 
      //       value={item} 
      //       primaryText={item} 
      //       key={index} 
      //       onTouchTap={() => navigateDown(item)}
      //     />
      //   )
      // )