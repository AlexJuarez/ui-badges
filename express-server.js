var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/dist'));
app.use('/fonts', express.static(__dirname + '/src/fonts'));

app.listen(port, function() {
  console.log('the server is running at http://localhost:' + port);
});
