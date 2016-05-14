const chunkInProgress = (state = {chunkType: null, params: null}, action) => {
  switch (action.type) {
    case 'SET_CHUNK_TYPE':
      return {chunkType: action.chunkType, params: null};
    case 'UPDATE_CHUNK':
      let newParams = Object.assign({}, state.params, action.param);
      let newChunk = Object.assign({}, state, {params: newParams});
      return newChunk;
    case 'LOAD_PARAMS': // for loading existing params so user can edit them
      return {chunkType: action.chunkType, params: action.params};
    default:
      return state;
  }
};

export default chunkInProgress;
