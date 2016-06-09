import React, { PropTypes } from 'react';
import styles from './styles/templateChunk.css';

const chunkTypeColors = {
  text: 'honeydew',
  reaction: 'lavender',
  'my feed': 'lightblue',
  'random tweet': 'lightblue',
  'random word': 'lightgreen',
  'related word': 'aquamarine',
  news: 'lightgray',
  emoji: 'lightpink',
  wordlist: 'bisque'
};

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
      style={{
        backgroundColor: chunkTypeColors[chunkType],
        // borderWidth: '2px',
        // borderStyle: 'solid',
        // borderColor: params.target !== undefined ? 'gray' : chunkTypeColors[chunkType]
      }}
      onClick={onClick}
    >
      <span className={styles.chunkType} >
        {chunkType}
      </span>
      {
        params && params.keyword ? `: ${params.keyword}` : ''
      }{
        params && params.content ? `: ${params.content}` : ''
      }{
        params && params.type ? `: ${params.type}` : ''
      }{
        params && params.list ? `: ${params.list[0]}...` : ''
      }{
        params && params['part of speech'] ? `: ${params['part of speech']}` : ''
      }
    </span>
  );
};

Chunk.propTypes = {
  item: PropTypes.object
};

export default Chunk;
