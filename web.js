var express = require('express');
var app = express();
fs = require('fs');
buf =new Buffer(256);
buf = fs.readFileSync('/home/ahmed/bitstarter/index.html')
app.use(express.logger());

app.get('/', function(request, response) {
  response.end(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
