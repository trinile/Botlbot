var TwitterStrategy = require('passport-twitter').Strategy;
var Twit = require('twit');
require('dotenv').config();


module.exports = function(passport) {

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    console.log('===================== \n user is', user);
    done(null, user);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    console.log('===================== \n id is', id);
    done(null, id);
  });

  passport.use(
    new TwitterStrategy({
      consumerKey: process.env.CONSUMER_KEY,
      consumerSecret: process.env.CONSUMER_SECRET,
      callbackURL: 'http://127.0.0.1:1337/auth/callback' // NOTE you must use 127.0.0.1, not localhost
    },

    function(token, tokenSecret, profile, done) {
      console.log('authentication is happening');

      var T = new Twit({
        consumer_key:         process.env.CONSUMER_KEY,
        consumer_secret:      process.env.CONSUMER_SECRET,
        access_token:         token,
        access_token_secret:  tokenSecret,
        timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
      });

      T.post(
        'statuses/update',
        { status: `haha! I have posted on your account!${Math.random()}` },
        function(err, data, response) {
          return err ? console.error(err) : console.log('posted:', data, 'response:', response);
        }
      );

      done(null, profile);

      // Once we have a DB and a User model, we'll do something like:
      // User.findOrCreate(..., function(err, user) {
      //   if (err) { return done(err); }
      //   done(null, user);
      // });
    })
  );
};