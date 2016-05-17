const template = (state = [], action) => {
  switch (action.type) {
    case 'TRASH_TEMPLATE':
      return [];
    case 'SAVE_TEMPLATE':
    case 'DELETE_TEMPLATE':
      return state;
    case 'ADD_CHUNK':
      return Object.assign([], [
        ...state.slice(0, action.index),
        Object.assign({}, action.chunk, {id: action.id}),
        ...state.slice(action.index)
      ], {name: state.name}, {id: state.id});
    case 'EDIT_CHUNK':
      return Object.assign([], [
        ...state.slice(0, action.index),
        // this keeps the chunk's ID attribute intact
        Object.assign({}, state[action.index], action.chunk),
        ...state.slice(action.index + 1)
      ], {name: state.name}, {id: state.id});
    case 'DELETE_CHUNK':
      return Object.assign([], [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ], {name: state.name}, {id: state.id});
    case 'UPDATE_NAME':
      return Object.assign([], 
        [...state], 
        {name: action.name}, 
        {id: state.id}
      );
    case 'LOAD_TEMPLATE':
      let newTemplate = action.wholeTemplate[0].template;
      newTemplate.name = action.wholeTemplate[0].name;
      newTemplate.id = action.wholeTemplate[0].template_id;
      return newTemplate;
    default:
      return state;
  }
};

export default template;
