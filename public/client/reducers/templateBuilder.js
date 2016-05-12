const initialState = {
    isAdding: false,
    isEditing: false,
    id: null
};

const templateBuilder = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_ADDING':
      return {isAdding: true, isEditing: false, id: action.id};
    case 'TOGGLE_EDITING':
      return {isAdding: false, isEditing: true, id: action.id};
    case 'TOGGLE_STATUS':
      return {isAdding: false, isEditing: false, id: null};
    default:
      return state;
  }
};

export default templateBuilder;
