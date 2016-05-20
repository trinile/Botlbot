import React, { PropTypes, Component } from 'react';
import { Menu, MenuItem, TextField, SelectField, FlatButton } from 'material-ui';
import AddButton from './AddButton';
import menuTree from '../menuTree';


// This function determines what you see in the menu.
// If you are at a leaf of the menu tree, it figures out what components
// are appropriate to render based on the data type stored at each key.
  // an array creates a SelectField (menu) with the array values as options
  // a string creates a text field
    // and the special 'content' key produces a multiline text field
  // a number creates a text field that only accepts numbers
  // a null creates a button that lets users select a target for the chunk

const formatter = ({
  templateMenu, 
  chunkInProgress,
  chunkIDCounter,
  templateBuilder, 
  navigateDown, 
  navigateUp, 
  navigateOut,
  toggleStatus,
  toggleSelecting,
  setChunkType, 
  updateChunk, 
  addChunk,
  editChunk,
  deleteChunk,
  incrementCounter
}) => {
  const currentLevel = templateMenu.reduce(function(menuTree, key){return menuTree[key];}, menuTree);
  const menu = [];
  if (currentLevel.leaf) {
    for (let key in currentLevel) {
      if (Array.isArray(currentLevel[key])) {
        menu.push(
          <SelectField 
            // autoWidth={true}
            style={{'width': '10rem'}}
            floatingLabelText={key}
            key={key}
            onChange={(e, index, value) => {updateChunk(key, value)}}
            value={chunkInProgress.params ? chunkInProgress.params[key] : 0}
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
            style={{'width': '6rem'}}
            floatingLabelText={key} 
            type={'number'} 
            key={key} 
            onChange={(e) => updateChunk(key, e.target.value)}
            value={chunkInProgress.params ? chunkInProgress.params[key] : null}
          />
        )
      }
      if (typeof currentLevel[key] === 'string') {
        menu.push(
          <TextField 
            multiLine={key === 'content'}
            style={{'width': 'auto'}}
            floatingLabelText={key} 
            key={key} 
            onChange={(e) => updateChunk(key, e.target.value)}
            value={chunkInProgress.params ? chunkInProgress.params[key] : null}
          />
        )
      }
      if (key === 'target') {
        menu.push(
          <FlatButton 
            // TODO: somehow indicate what target is, ideally with line connecting the two
            backgroundColor={'gray'}
            label={
              (chunkInProgress.params && chunkInProgress.params.target !== undefined) 
              ? 'update target'
              : 'select a target'
            } 
            key={key} 
            onClick={toggleSelecting}
          />
        )
      }
      if (key === 'list') {
        if (chunkInProgress.params && chunkInProgress.params.list.length > 0) {
          let list = chunkInProgress.params.list;
          list.map((item, index) => {
            if (item.length >= 1) {
              menu.push(
                <TextField 
                  style={{'width': 'auto'}}
                  floatingLabelText={'list item'} 
                  key={index} 
                  onChange={(e) => {
                    e.target.value === ''
                    ? updateChunk(key, [...list.slice(0, index), ...list.slice(index + 1)])
                    : updateChunk(key, [...list.slice(0, index), e.target.value, ...list.slice(index + 1)])
                  }}
                  value={item}
                />
              )
            }
          });
          menu.push(
            <TextField 
              style={{'width': 'auto'}}
              floatingLabelText={'list item'} 
              key={list.length}
              onChange={(e) => updateChunk(key, [...list, e.target.value])}
            />
          )
        } else {
          menu.push(
            <TextField 
              style={{'width': 'auto'}}
              floatingLabelText={'list item'} 
              key={0} 
              onChange={(e) => updateChunk(key, [e.target.value])}
            />
          )
        }
      }
    }
  } else {
    return (
      <Menu autoWidth={true}>
        <p style={{color: 'gray', marginLeft: '0.6rem', marginTop: '-0.2rem', marginBottom: '0.1rem', fontFamily: 'Roboto, sans-serif'}}>
          {templateMenu[templateMenu.length - 1] === 'Root' ? '' : templateMenu[templateMenu.length - 1]}
        </p>
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
      <p style={{color: 'gray', marginLeft: '0.6rem', marginTop: '-0.2rem', marginBottom: '0.1rem', fontFamily: 'Roboto, sans-serif'}}>
        {templateMenu[templateMenu.length - 1] === 'Root' ? '' : templateMenu[templateMenu.length - 1]}
      </p>
      {menu}
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <AddButton icon={'back'} onClick={navigateUp} />
        {
          templateBuilder.isEditing 
          ? <AddButton icon={'delete'} onClick={() => {
              deleteChunk(templateBuilder.id);
              toggleStatus(); 
              setTimeout(navigateOut, 300);}} 
            />
          : <AddButton icon={'cancel'} onClick={() => {toggleStatus(); setTimeout(navigateOut, 300);}} />
        }
        <AddButton icon={'save'} onClick={() => {
          if (templateBuilder.isAdding) {
            addChunk(templateBuilder.id, chunkInProgress, chunkIDCounter); 
            incrementCounter();
          } else {
            templateBuilder.isEditing && editChunk(templateBuilder.id, chunkInProgress); 
          }
          toggleStatus(); 
          setTimeout(navigateOut, 300);
        }} />
      </div>
    </Menu>
  )
};

// const TemplateMenu = (props) => {
//   return formatter(props)
// };

class TemplateMenu extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentDidUpdate () {
  //   console.log(currentInput);
  //   console.log('REFS ARE', Object.keys(this.refs));
  //   this.refs[currentInput] && this.refs[currentInput].focus();
  // }

  render() {
    return formatter.call(this, this.props);
  }
}

TemplateMenu.propTypes = {
  templateMenu: PropTypes.arrayOf(PropTypes.string),
  navigateDown: PropTypes.func,
  navigateUp: PropTypes.func
};

export default TemplateMenu;
