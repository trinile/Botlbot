import React, { PropTypes } from 'react';
import { Menu, MenuItem, TextField, SelectField, Subheader } from 'material-ui';
import AddButton from './AddButton';
import menuTree from '../menuTree';



const formatter = ({
  templateMenu, 
  chunkInProgress,
  templateBuilder, 
  navigateDown, 
  navigateUp, 
  navigateOut,
  toggleStatus,
  setChunkType, 
  updateChunk, 
  addChunk,
  editChunk
}) => {
  const currentLevel = templateMenu.reduce(function(menuTree, key){return menuTree[key];}, menuTree);
  const menu = [];
  if (currentLevel.leaf) {
    for (let key in currentLevel) {
      if (Array.isArray(currentLevel[key])) {
        menu.push(
          <SelectField 
            // autoWidth={true}
            style={{'width': '13.5rem', 'marginLeft': '1.5rem'}}
            floatingLabelText={key}
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
      <Menu autoWidth={true}>
        <Subheader>{templateMenu[templateMenu.length - 1] === 'Root' ? '' : templateMenu[templateMenu.length - 1]}</Subheader>
        {Object.keys(currentLevel).map((item, index) => {
          return (
            <MenuItem 
              value={item} 
              primaryText={item} 
              key={index} 
              onTouchTap={() => {navigateDown(item); setChunkType(item)}}
            />
          )
        })}
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <AddButton icon={'back'} onClick={navigateUp} disabled={templateMenu.length === 1}/>
          <AddButton icon={'cancel'} onClick={() => {toggleStatus(); setTimeout(navigateOut, 300);}} />
        </div>
      </Menu>
    )
  }

  return (
    <Menu autoWidth={true}>
      <Subheader>{templateMenu[templateMenu.length - 1] === 'Root' ? '' : templateMenu[templateMenu.length - 1]}</Subheader>
      {menu}
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <AddButton icon={'back'} onClick={navigateUp} />
        <AddButton icon={'cancel'} onClick={() => {toggleStatus(); setTimeout(navigateOut, 300);}} />
        <AddButton icon={'save'} onClick={() => {
          templateBuilder.isAdding && addChunk(templateBuilder.id, chunkInProgress); 
          templateBuilder.isEditing && editChunk(templateBuilder.id, chunkInProgress); 
          toggleStatus(); 
          setTimeout(navigateOut, 300);
        }} />
      </div>
    </Menu>
  )
};

const TemplateMenu = (props) => {
  return formatter(props)
};

TemplateMenu.propTypes = {
  templateMenu: PropTypes.arrayOf(PropTypes.string),
  navigateDown: PropTypes.func,
  navigateUp: PropTypes.func
};

export default TemplateMenu;
