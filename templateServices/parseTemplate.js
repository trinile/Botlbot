const Promise = require('bluebird');
const chunkHandler = {
  'my feed': (params, userId, n) => require('./myFeed')(userId, n),
  'random tweet': (params, userId, n) => require('./tweetsByKeyword')(userId, params.keyword, n),
  text: (params, userId, n) => require('./text')(params.content, n),
  reaction: (params, userId, n) => require('./reactions')(keyword),
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
