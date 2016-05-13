const template = (state = [], action) => {
  switch (action.type) {
    case 'TRASH_TEMPLATE':
      return [];
    case 'SAVE_TEMPLATE':
      return state; // WILL NEED TO BECOME ASYNC ACTION
    // ADD CASE UPDATE_TEMPLATE that takes in a complete chunkinprogress
    default:
      return state;
  }
};

export default template;
