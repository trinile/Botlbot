var path = require('path');

var getTweets = require('./searchAlgo.js');
const KEYS = {
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

var ensureAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  else {
    res.send('you aren\'t allowed there! try signing in');
    // Return error content: res.jsonp(...) or redirect: res.redirect('/login')
  }
};

const dummyTweets = [
  { status: 'Hey this is a dummy tweet' },
  { status: 'guys check this out: http://www.theverge.com/2016/5/4/11585146/amazonkindleoasisreview' },
  { status: 'hap 👏 py 👏 birth 👏 day' },
  { status: 'wowwowwowwowwowwowowowowowowowowowowowowowowowowowowowowowowowowowowowowowoowowowowowowowowowowowowowowoowowowowowow' },
  { status: 'balp' },
];

module.exports = function(app, passport) {

  // Redirect the user to Twitter for authentication.  When complete, Twitter
  // will redirect the user back to the application at
  //   /auth/callback
  app.get('/auth', passport.authenticate('twitter'));

  // Twitter will redirect the user to this URL after approval.  Finish the
  // authentication process by attempting to obtain an access token.  If
  // access was granted, the user will be logged in.  Otherwise,
  // authentication has failed.
  app.get('/auth/callback',
    passport.authenticate('twitter', { 
      successRedirect: '/dashboard',
      failureRedirect: '/' 
    })
  );

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.get('/dashboard', ensureAuthenticated, function(req, res) {
    res.send('YOU DID IT');
  });

  app.get('/generate', ensureAuthenticated, function(req, res) {
    getTweets(KEYS.access_token, KEYS.access_token_secret, res);
  });

  app.get('/generateDummy', ensureAuthenticated, function(req, res) {
    res.json(dummyTweets);
  });

  app.get('*', function(req, res) {
    console.log(req.session);
    res.sendFile(path.join(__dirname, '/../build/bundle.html'));
  });

};
