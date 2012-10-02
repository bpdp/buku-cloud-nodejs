var http = require('http');
var url = require("url");

http.createServer(function (req, res) {

    var pathname = url.parse(req.url).pathname;

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello NodeJS <u>" + process.version + "</u>");
    res.write("<br />Request for <b>" + pathname + "</b> received.");
    res.end();

}).listen(1337);
