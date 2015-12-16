var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/dist'));
app.use('/fonts', express.static(__dirname + '/src/fonts'));

app.listen(3000);
