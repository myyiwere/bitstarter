var express = require('express');
var app = app=express();
var fs = require('fs');
buf =new Buffer(256);
buf = fs.readFileSync('index.html')
app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
