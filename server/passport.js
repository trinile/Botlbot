var TwitterStrategy = require('passport-twitter').Strategy;
var Twit = require('twit');
var client = require('./db/redisClient.js');
require('dotenv').config();


module.exports = function(passport) {

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, { id: user.id, username: user.username });
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    done(null, id); // NOTE: not sure if this is how things should be...
  });

  passport.use(
    new TwitterStrategy({
      consumerKey: process.env.CONSUMER_KEY,
      consumerSecret: process.env.CONSUMER_SECRET,
      callbackURL: 'http://127.0.0.1:1337/auth/callback'
      // NOTE you must use 127.0.0.1, not localhost
      // ALSO this must match the callback URL provided on apps.twitter.com settings page
    },

    function(token, tokenSecret, profile, done) {
      console.log('authentication is happening', profile.id);
      // Saves user, access token, and access token secret in redis hash at key user:twitterid
      client.hmset('user:' + profile.id, 'token', token, 'tokenSecret', tokenSecret);

      // var T = new Twit({
      //   consumer_key:         process.env.CONSUMER_KEY,
      //   consumer_secret:      process.env.CONSUMER_SECRET,
      //   access_token:         token,
      //   access_token_secret:  tokenSecret,
      //   timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
      // });

      // T.post(
      //   'statuses/update',
      //   { status: `haha! I have posted on your account!${Math.random()}` },
      //   function(err, data, response) {
      //     // return err ? console.error(err) : console.log('posted:', data, 'response:', response);
      //   }
      // );

      done(null, profile);
    })
  );
};
