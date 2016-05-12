const template = (state = [], action) => {
  switch (action.type) {
    case 'TRASH_TEMPLATE':
      return [];
    case 'SAVE_TEMPLATE':
      return state; // WILL NEED TO BECOME ASYNC ACTION
    default:
      return state;
  }
};

const initialState = {
  template: [],
  status: {
    isAdding: false,
    isEditing: false,
    id: null
  }
};

const templateBuilder = (state = initialState, action) => {
  let newTemplate;
  let newStatus;
  switch (action.type) {
    case 'ADD_CHUNK':
      // return state.concat({source: action.source});
      newTemplate = [].concat(
        state.template.slice(0, action.id),
        chunk,
        state.template.slice(action.id));
      newStatus = Object.assign({}, initialState.status);
      return {template: newTemplate, status: newStatus};
    case 'TOGGLE_ADDING':
      newStatus = {isAdding: true, isEditing: false, id: action.id};
      return {template: state.template, status: newStatus};
    case 'TOGGLE_EDITING':
      newStatus = {isAdding: false, isEditing: true, id: action.id};
      return {template: state.template, status: newStatus};
    case 'TOGGLE_STATUS':
      newStatus = {isAdding: false, isEditing: false, id: null};
      return {template: state.template, status: newStatus};
    default:
      return state;
  }
};

export { template, templateBuilder };
