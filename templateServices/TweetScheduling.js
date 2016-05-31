var moment = require('moment');
// const currentDate = moment();
// var last = '2016-05-17 17:03:08-07';
// console.log(moment(last).isValid());

// console.log(moment(last).add(24, 'hours').isBefore(currentDate));
// const currentDate = new Date();
// const hours = currentDate.getHours();
// const hours = currentDate.getMinutes();

function deleteGeneratedTweets() {
  var currentDate = moment();
  return knex.select('created_at', 'bot_tweet_id')
  .from('generatedtweets')
  .then(function(dates) {
    console.log('dates ------->', dates);
    dates.forEach(function(date) {
      if (moment(date.created_at).add(24, 'hours').isBefore(currentDate)) {
        //delete tweets from database that are more than 24 hours old
        knex.table('generatedtweets')
        .where({'bot_tweet_id': date.bot_tweet_id })
        .del();
      }
    return dates;
    });
  });
};

function postScheduledTweets() {
  // do a lookup of each scheduled tweet
  var currentDate = moment();
  var within15 = moment().add('15', 'minutes').format('X');
  console.log(within15);


  // return knex('scheduledtweets')
  // .where({ sc})

}

var fifteen = moment().add('15', 'minutes').format('X');
console.log(moment.unix(fifteen).calendar());
console.log(moment().add('30', 'minutes').format('X'));
var x = moment().add('30', 'minutes').unix();

// console.log(moment.unix(x)._d);
// var day = moment.unix(1463753686);
// console.log(day);
