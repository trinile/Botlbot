const Promise = require('bluebird');
const chunkHandler = {
  'random word': (params, userId, n) => require('./randomWord')(params, n),
  'random tweet': (params, userId, n) => require('./tweetsByKeyword')(userId, params.keyword, n),
  'my feed': (params, userId, n) => require('./myFeed')(userId, n),
  news: (params, userId, n) => require('./newsService')(params.keyword, n),
  emoji: (params, userId, n) => require('./emoji')(params.keyword, n),
  text: (params, userId, n) => require('./text')(params.content, n),
  wordlist: (params, userId, n) => require('./wordlist')(params.list, n)
};

function zip(arrays) {
  console.log('zipping', arrays);
  const result = [];
  arrays.forEach(array => array.forEach((item, i) => {
    result[i] = (result[i] || []).concat(item);
  }));
  return result;
}

function parseTemplate(template, userId, n) {
  console.log('in parse');
  // debugger;
  return (
    Promise.all(template.map(
      chunk =>
        chunkHandler[chunk.chunkType](chunk.params, userId, n)
    ))
    .then(zip)
    .catch(err => err)
  );
}

module.exports = parseTemplate;
