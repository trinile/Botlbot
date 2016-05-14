    // case 'ADD_CHUNK':
    //   newTemplate = [].concat(
    //     state.template.slice(0, action.id),
    //     chunk,
    //     state.template.slice(action.id));
    //   newStatus = Object.assign({}, initialState.status);
    // return {template: newTemplate, status: newStatus};

const chunkInProgress = (state = {chunkType: null, params: null}, action) => {
  switch (action.type) {
    case 'SET_CHUNK_TYPE':
      return {chunkType: action.chunkType, params: null};
    case 'UPDATE_CHUNK':
      let newParams = Object.assign({}, state.params, action.param);
      let newChunk = Object.assign({}, state, {params: newParams});
      return newChunk;
    default:
      return state;
  }
};

export default chunkInProgress;
