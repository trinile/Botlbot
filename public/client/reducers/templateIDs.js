const templateIDs = (state = [], action) => {
  switch (action.type){
    case 'LOAD_IDS':
      return action.ids;
    default:
      return state;
  }

};

export default templateIDs;