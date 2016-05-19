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

const emojiMap = _.reduce(
  require('./emojiMap'), 
  (memo, value, key) => { memo[value[2]] = key; return memo; }, 
  {}
);

const keys = Object.keys(emojiMap);

// function findSurrogatePair(point) {
//   // assumes point > 0xffff
//   var offset = parseInt(point, 16) - 0x10000,
//       lead = 0xd800 + (offset >> 10),
//       trail = 0xdc00 + (offset & 0x3ff);
//   return [lead.toString(16), trail.toString(16)];
// }

function emojiFromUnicode(unicode) {
  return emojiMap[unicode] || emojiMap[keys[Math.floor(keys.length * Math.random())]];
}

module.exports = {
  list,
  indexCache,
  emojiFromUnicode
};
