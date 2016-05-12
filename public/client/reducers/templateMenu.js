const templateMenu = (state = ['Root'], action) => {
  switch (action.type) {
    case 'NAVIGATE_DOWN':
      return [...state, action.key];
    case 'NAVIGATE_UP':
      return state.slice(0, state.length - 1);
    case 'NAVIGATE_OUT':
      return ['Root'];
    default:
      return state;
  }
};

export default templateMenu;

    // case 'ADD_CHUNK':
    //   newTemplate = [].concat(
    //     state.template.slice(0, action.id),
    //     chunk,
    //     state.template.slice(action.id));
    //   newStatus = Object.assign({}, initialState.status);
    // return {template: newTemplate, status: newStatus};
