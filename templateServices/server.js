const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));

app.post('/queuetemplate', function(req, res) {

});

app.listen(8558);
