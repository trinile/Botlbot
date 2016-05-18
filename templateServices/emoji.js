const emoji = require('./helpers/').emoji;
const _ = require('lodash');

function randomValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getIndexCache(keyword) {
  return emoji.indexCache[keyword] || emoji.indexCache.poop;
}

const getEmoji = _.flow(getIndexCache, randomValue, (i) => emoji.list[i])

function getUnicodeFromEmoji(emoji) {
  return emoji.data.unicode;
}


// function formatUnicodeForHTML(unicode) {
//   // return `&#x${unicode};`;
//   // return `\\u${emoji.findSurrogatePair(unicode).join('\\u')}`;
//   return '\\u' + emoji.findSurrogatePair(unicode).join('\\u');
//   // return '\\u{' + unicode + '}';
// }

const getEmojiUnicode = _.flow(getEmoji, getUnicodeFromEmoji, emoji.emojiFromUnicode);

function getEmojiUnicodeNTimes(keyword, n) {
  return _.range(n).map(() => getEmojiUnicode(keyword));
}

module.exports = getEmojiUnicodeNTimes;
