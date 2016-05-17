const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const parsed = JSON.parse(fs.readFileSync(__dirname + '/emoji.json', 'utf8'));
const formatEmoji = (data, name) => ({ name, data });

const list = _.map(parsed, formatEmoji)
.filter(e => e.data.category !== 'flags' && e.data.category !== 'symbols');

const indexCache = list.reduce((kw, e, i) => {
  e.data.keywords.forEach(w => {
    kw[w] = kw[w] ? kw[w].concat(i) : [i];
  });
  return kw;
}, {});

module.exports = {
  list,
  indexCache
};
