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
