const fs = require('fs');
const path = require('path');

fs.readFileSync(__dirname + '/emoji.json', 'utf8', (err, data) => {
  const result = {};
  if (err) throw err;
  const foo = data;
  const poo = JSON.parse(foo);
  // console.log(poo);
  // const ha = Object.keys(poo);

  const moo = [];
  for (let k in poo) {
    moo.push({name: k, data: poo[k]});
  }
  const boo = moo.filter(e => e.data.category !== 'flags' && e.data.category !== 'symbols');
  const zoo = boo.reduce((kw, e, i) => {
    e.data.keywords.forEach(w => {
      kw[w] = kw[w] ? kw[w].concat(i) : [i];
    })
    return kw;
  }, {});

  // console.log(zoo)
  // const test1 = findSurrogatePair(parseInt('1f602', 16));
  // console.log(test1)
  // const loo = boo.reduce((kw, e) => {
  //   e.data.keywords.forEach(w => {
  //     kw[w] = kw[w] ? kw[w] + 1 : 1;
  //   })
  //   return kw;
  // }, {});
  // const goo = {};
  // for (let k in loo) {
  //   if (loo[k] >= 3) goo[k] = loo[k];
  // }
  // console.log(goo);
  return {
    list: boo,
    indexCache: zoo
  };
});
// const emojiData = fs.readFileSync(__dirname + '/emoji.json', 'utf8', (err, data) => {
//   if (err) throw err;
//   const foo = data;
//   const poo = JSON.parse(foo);
//   // console.log(poo);
//   // const ha = Object.keys(poo);
//   const moo = [];
//   for (let k in poo) {
//     moo.push({name: k, data: poo[k]});
//   }
//   const boo = moo.filter(e => e.data.category !== 'flags' && e.data.category !== 'symbols');
//   return boo;
// });
console.log(emoji.list)
module.exports = emoji;
