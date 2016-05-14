const template = (state = [], action) => {
  switch (action.type) {
    case 'TRASH_TEMPLATE':
      return [];
    case 'SAVE_TEMPLATE':
      return state; // WILL NEED TO BECOME ASYNC ACTION
    case 'ADD_CHUNK':
      return [
        ...state.slice(0, action.index),
        Object.assign({}, action.chunk, {id: action.id}),
        ...state.slice(action.index)
      ];
    case 'EDIT_CHUNK':
      return [
        ...state.slice(0, action.index),
        // this keeps the chunk's ID attribute intact
        Object.assign({}, state[action.index], action.chunk),
        ...state.slice(action.index + 1)
      ];
    case 'DELETE_CHUNK':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

export default template;
