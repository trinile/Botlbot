const template = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TEMPLATE':
      return action.template;
    case 'TRASH_TEMPLATE':
      return '';
    default:
      return state;
  }
};

export default template;
