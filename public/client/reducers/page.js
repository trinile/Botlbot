const page = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_PAGE':
      return state + 1;
    case 'DECREMENT_PAGE':
      return Math.max(0, state - 1);
    case 'RESET_PAGE':
      return 0;
    default:
      return state;
  }
};

export default page;
