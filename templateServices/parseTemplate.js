const Promise = require('bluebird');
const chunkHandler = {
  'my feed': (params, userId, n) => require('./myFeed')(userId, n),
  text: (params, userId, n) => require('./text')(params.content, n),
  reaction: (keyword) => require('./reactions')(keyword),
};

function zip(arrays) {
  const result = [];
  arrays.forEach(arary => arary.forEach((item, i) => {
    result[i] = (result[i] || []).concat(item);
  }));
  return result;
}

function parseTemplate(template, userId, n) {
  return (
    Promise.all(template.map(chunk => chunkHandler[chunk.type](chunk.params, userId, n)))
    .then(zip)
    .catch(err => err)
  );
}

module.exports = parseTemplate;
