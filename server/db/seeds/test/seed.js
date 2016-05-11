
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(() => knex('users').insert([
    {
      user_twitter_id: '12345',
      token: 'this is a token',
      tokenSecret: 'this is a tokensecret',
      username: 'testuser',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_twitter_id: '727615201575469056',
      token: '727615201575469056-j4ZG03wgkgJ33RamEr9EPBFeIoEnkR0',
      tokenSecret: 'ecbv7GmYnPjxZ96NRcXgtPwAZjcmPfGXubq3UPhx3P1qO',
      username: 'botltest',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]))
  .then(() => knex('generatedtweets').del())
  .then(() => knex('generatedtweets').insert([
    {
      bot_tweet_id: '1',
      user_twitter_id: '727615201575469056',
      retweet_count: 5,
      favorite_count: 2,
      user_screen_name: 'funtimes',
      user_followers_count: '200',
      tweet_text: 'a test generated tweet ' + Math.random(),
      tweet_id_str: '12345abcde',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      bot_tweet_id: '2',
      user_twitter_id: '727615201575469056',
      retweet_count: 46,
      favorite_count: 2098433,
      user_screen_name: 'sadtimes',
      user_followers_count: 'infinity',
      tweet_text: 'a great generated tweet ' + Math.random(),
      tweet_id_str: '67890fghij',
      created_at: new Date(),
      updated_at: new Date(),
    }
  ]))
  .catch(function(err) {
    console.log(err);
  });
};
