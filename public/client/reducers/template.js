const template = (state = [], action) => {
  switch (action.type) {
    case 'TRASH_TEMPLATE':
      return [];
    case 'SAVE_TEMPLATE':
      return state; // WILL NEED TO BECOME ASYNC ACTION
    case 'ADD_CHUNK':
      return [
        ...state.slice(0, action.id),
        action.chunk,
        ...state.slice(action.id)
      ];
    case 'EDIT_CHUNK':
      return [
        ...state.slice(0, action.id),
        action.chunk,
        ...state.slice(action.id + 1)
      ];
    case 'DELETE_CHUNK':
      return [
        ...state.slice(0, action.id),
        ...state.slice(action.id + 1)
      ];
    default:
      return state;
  }
};

export default template;
