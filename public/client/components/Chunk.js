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
      {chunkType}{params.keyword ? ': ' + params.keyword : ''}{params.content ? ': ' + params.content : ''}
    </span>
  );
};

Chunk.propTypes = {
  item: PropTypes.object
};

export default Chunk;
