const template = (state = [], action) => {
  switch (action.type) {
    case 'TRASH_TEMPLATE':
      return [];
    case 'SAVE_TEMPLATE':
      return state; // WILL NEED TO BECOME ASYNC ACTION
    case 'ADD_CHUNK':
      return Object.assign([], [
        ...state.slice(0, action.index),
        Object.assign({}, action.chunk, {id: action.id}),
        ...state.slice(action.index)
      ], {name: state.name});
    case 'EDIT_CHUNK':
      return Object.assign([], [
        ...state.slice(0, action.index),
        // this keeps the chunk's ID attribute intact
        Object.assign({}, state[action.index], action.chunk),
        ...state.slice(action.index + 1)
      ], {name: state.name});
    case 'DELETE_CHUNK':
      return Object.assign([], [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ], {name: state.name});
    case 'UPDATE_NAME':
      let namedTemplate = [...state];
      namedTemplate.name = action.name;
      return namedTemplate;
    case 'LOAD_TEMPLATE':
      let newTemplate = action.wholeTemplate[0].template;
      newTemplate.name = action.wholeTemplate[0].name;
      newTemplate.id = action.wholeTemplate[0].id;
      return newTemplate;
    default:
      return state;
  }
};

export default template;
