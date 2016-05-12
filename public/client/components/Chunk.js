import React, { PropTypes } from 'react';
import styles from '../styles/chunk.css';

const Chunk = ({
  item,
  onClick
}) => {
  return (
    <span 
      className={styles.chunk}
      onClick={onClick}
    >
      {item.source}
    </span>
  );
};

Chunk.propTypes = {
  item: PropTypes.object
};

export default Chunk;
