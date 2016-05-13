    // case 'ADD_CHUNK':
    //   newTemplate = [].concat(
    //     state.template.slice(0, action.id),
    //     chunk,
    //     state.template.slice(action.id));
    //   newStatus = Object.assign({}, initialState.status);
    // return {template: newTemplate, status: newStatus};

const chunkInProgress = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_CHUNK':
      let newChunk = Object.assign({}, state);
      newChunk[action[chunkType]][action[key]] = action[value];
      return newChunk;
    default:
      return state;
  }

