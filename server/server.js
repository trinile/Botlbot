var express = require('express');
var path = require('path');
var session = require('express-session');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var Twit = require('twit');
require('dotenv').config();

passport.use(new TwitterStrategy({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:1337/auth/callback" // NOTE you must use 127.0.0.1, not localhost
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

    T.post('statuses/update', {status: 'haha! I have posted on your account!' + Math.random()}, function(err, data, response) {
      return err ? console.error(err) : console.log('posted:', data);
    });

    done(null, profile);

    // Once we have a DB and a User model, we'll do something like:
    // User.findOrCreate(..., function(err, user) {
    //   if (err) { return done(err); }
    //   done(null, user);
    // });
  }
));

var app = express();

app.use(express.static(__dirname + '/../build/'));

app.use(session({
  secret: 'SLDGJLSDHGLSKDJGLSKDGSECRET',
  resave: false,
  saveUninitialized: true
  // NOTE we also need to be using a sessionStore –
  // looks like connect-redis is a good option
}));

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

app.use(passport.initialize());
app.use(passport.session());

// Redirect the user to Twitter for authentication.  When complete, Twitter
// will redirect the user back to the application at
//   /auth/callback
app.get('/auth', passport.authenticate('twitter'));

// Twitter will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
app.get('/auth/callback',
  passport.authenticate('twitter', { successRedirect: '/dashboard',
                                     failureRedirect: '/' })
);

var ensureAuthenticated = function(req, res, next) {
  // console.log('================================== \n req is:', req);
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.send('you suck');
    // Return error content: res.jsonp(...) or redirect: res.redirect('/login')
  }
};


app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


app.get('*', ensureAuthenticated, function(req, res) {
  res.sendFile(path.join(__dirname, '/../build/index.html'));
});

app.listen(1337);
console.log('Listening on port 1337');
