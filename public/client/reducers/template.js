const template = (state = [], action) => {
  switch (action.type) {
    case 'TRASH_TEMPLATE':
      return [];
    case 'SAVE_TEMPLATE':
      return state; // WILL NEED TO BECOME ASYNC ACTION
    case 'ADD_SOURCE':
      return state.concat({source: action.source});
    default:
      return state;
  }
};

export default template;
