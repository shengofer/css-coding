var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8000;


app.use(bodyParser.json());

app.use('/dist', express.static('./dist'));
app.use('/', express.static(__dirname + '/dist'));


app.listen(port, function () {
    'use strict';
    // console.log('Express server listening on port ' + port);
});
