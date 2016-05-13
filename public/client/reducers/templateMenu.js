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
