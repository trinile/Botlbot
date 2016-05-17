const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const enqueue = require('./templateQueue').enqueue;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));

app.post('/queuetemplate/:id', function(req, res) {
  
});

app.listen(8558);
