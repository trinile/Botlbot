export function setChunkType(chunkType) {
  return {
    type: 'SET_CHUNK_TYPE',
    chunkType
  };
}

export function updateChunk(key, value) {
  return {
    type: 'UPDATE_CHUNK',
    param: {[key]: value}
  };
}

export function loadParams(chunkType, params) {
  return {
    type: 'LOAD_PARAMS',
    chunkType,
    params
  };
}
