const initialState = {
    isAdding: false,
    isEditing: false,
    id: null
};

const templateBuilder = (state = initialState, action) => {
  switch (action.type) {
    // case 'ADD_CHUNK':
    //   newTemplate = [].concat(
    //     state.template.slice(0, action.id),
    //     chunk,
    //     state.template.slice(action.id));
    //   newStatus = Object.assign({}, initialState.status);
    //   return {template: newTemplate, status: newStatus};
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
