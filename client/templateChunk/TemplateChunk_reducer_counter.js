const chunkIDCounter = (state = 0, action) => {
  switch (action.type){
    case 'INCREMENT_COUNTER':
      return state + 1;
    case 'LOAD_HIGHEST_ID': 
    // for when you load a template for editing
    // NOTE: editing an existing chunk shouldn't change its id
      let highestID = action.template.reduce((memo, chunk) => {
        return Math.max(memo, chunk.id);
      }, 0);
      return highestID + 1;
    default:
      return state;
  }

};

export default chunkIDCounter;
