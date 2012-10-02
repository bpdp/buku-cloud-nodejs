var express = require("express");
var app = express();

app.get('/', function(req, res) {
      res.send('Hello from Cloud Foundry with NodeJS ' + process.version);
});
app.listen(3000);
