const snack = (state = {open: false, message: ''}, action) => {
  switch (action.type){
    case 'SET_SNACK_MESSAGE':
      return { message: action.message, open: true };
    case 'CLOSE_SNACK':
      return {open: false, message: ''};
    default:
      return state;
  }
};

export default snack;
