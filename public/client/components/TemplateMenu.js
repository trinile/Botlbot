import React, { PropTypes } from 'react';
import { Menu, MenuItem, TextField, SelectField } from 'material-ui';
import AddButton from './AddButton';
import menuTree from '../menuTree';

var formatter = ({templateMenu, chunkInProgress, navigateDown, setChunkType, updateChunk}) => {
  const currentLevel = templateMenu.reduce(function(menuTree, key){return menuTree[key];}, menuTree);
  const menu = [];
  if (currentLevel.leaf) {
    for (let key in currentLevel) {
      if (Array.isArray(currentLevel[key])) {
        menu.push(
          <SelectField 
            // autoWidth={true}
            style={{'width': '13.5rem', 'marginLeft': '1.5rem'}}
            hintText={key}
            key={key}
            onChange={(e, index, value) => {updateChunk(key, value)}}
            value={chunkInProgress.params ? chunkInProgress.params[key] : null}
          >
            {
              currentLevel[key].map((value, index) => {
                return (
                  <MenuItem 
                    style={{'width': 'auto'}}
                    className={"noPropagation"}
                    value={value} 
                    primaryText={value} 
                    key={index} 
                  />
                )
              })
            }
          </SelectField>
        );
      }
      if (typeof currentLevel[key] === 'number') {
        menu.push(
          <TextField 
            style={{'width': '6rem', 'marginLeft': '1.5rem'}}
            floatingLabelText={key} 
            type={'number'} 
            key={key} 
            onChange={(e) => updateChunk(key, e.target.value)}/>
        )
      }
      if (typeof currentLevel[key] === 'string') {
        menu.push(
          <TextField 
            multiLine={key === 'content'}
            style={{'width': 'auto'}}
            floatingLabelText={key} 
            key={key} 
            onChange={(e) => updateChunk(key, e.target.value)}/>
        )
      }
    }
  } else {
    return (
      <Menu 
        autoWidth={true}
        children={Object.keys(currentLevel).map((item, index) => {
          return (
            <MenuItem 
              value={item} 
              primaryText={item} 
              key={index} 
              onTouchTap={() => {navigateDown(item); setChunkType(item)}}
            />
          )
      })} />
    )
  }

  return (
    <Menu autoWidth={true}>
      {menu}
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <AddButton icon={'back'} />
        <AddButton icon={'cancel'} />
        <AddButton icon={'save'} />
      </div>
    </Menu>
  )
};

// onItemTouchTap={addTemplateMenu}
const TemplateMenu = (props) => {
  return formatter(props)
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