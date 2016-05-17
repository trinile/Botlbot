const initialState = {
    isAdding: false,
    isEditing: false,
    isSelecting: false,
    id: null
};

const templateBuilder = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_ADDING':
      return {isAdding: true, isEditing: false, isSelecting: false, id: action.id};
    case 'TOGGLE_EDITING':
      return {isAdding: false, isEditing: true, isSelecting: false, id: action.id};
    case 'TOGGLE_SELECTING':
      return Object.assign({}, state, {isSelecting: !state.isSelecting});
    case 'TOGGLE_STATUS':
      return {isAdding: false, isEditing: false, isSelecting: false, id: null};
    default:
      return state;
  }
};

export default templateBuilder;
