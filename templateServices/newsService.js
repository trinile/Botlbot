//NEWS API ---> - >
require('dotenv').config();
var request = require('request');
var Promise = require('Promise');

//establish date range for news lookup (one week ago)
const getBeginDate = (days) => {
  const today = new Date();
  const beginDate = new Date(today.setDate(today.getDate()-days));

  const month = beginDate.getMonth().toString().length === 1
  ? '0' + beginDate.getMonth().toString()
  : beginDate.getMonth().toString();

  const day = beginDate.getDay().toString().length === 1
  ? '0' + beginDate.getDay().toString()
  : beginDate.getDay().toString();
  //need format date in YYYYMMDD string
  return beginDate.getFullYear().toString() + month + day;
};

function newsRepeater(articles, n) {
  if (articles.length > n) return articles.slice(0, n);
  if (articles.length === 0) return new Array(n);
  if (articles.length === n) return articles;
  while (articles.length < n) {
    articles = articles.concat(articles);
  }
  return newsRepeater(articles, n);
}

function getNewsArticlesByKeyword(keyword, n) {
  const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
  return new Promise(function(resolve, reject) {
    request.get({
      url: url,
      qs: {
        'api-key': process.env.NYT_API_KEY,
        'q': keyword,
        'begin_date': getBeginDate(7)
      },
    }, function (err, response, body) {
        if (err) reject(err);
        var articles = JSON.parse(body).response.docs.map(article => {
          return { 'news_url': article.web_url, headline: article.headline.main }
        });
      // console.log('articles ------->', articles);
        resolve(newsRepeater(articles, n));
      }
    );
  });
}

module.exports = getNewsArticlesByKeyword;
