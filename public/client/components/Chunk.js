import React, { PropTypes } from 'react';
import styles from '../styles/chunk.css';

const Chunk = ({
  item: {
    chunkType,
    params
  },
  onClick
}) => {
  return (
    <span 
      className={styles.chunk}
      onClick={onClick}
    >
      {chunkType}{
        params && params.keyword ? `: ${params.keyword}` : ''
      }{
        params && params.content ? `: ${params.content}` : ''
      }{
        params && params.type ? `: ${params.type}` : ''
      }{
        params && params.list ? `: ${params.list[0]}...` : ''
      }
    </span>
  );
};

Chunk.propTypes = {
  item: PropTypes.object
};

export default Chunk;
