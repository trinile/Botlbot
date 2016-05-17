const chunkIDCounter = (state = 0, action) => {
  switch (action.type){
    case 'INCREMENT_COUNTER':
      return state + 1;
    case 'LOAD_HIGHEST_ID': 
    // for when you load a template for editing
    // NOTE: editing an existing chunk shouldn't change its id
      return action.id + 1;
    default:
      return state;
  }

};

export default chunkIDCounter;