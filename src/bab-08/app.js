
/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

server.listen(80);

// all environments
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);

io.sockets.on('connection', function (socket) {
	socket.emit('kirim ke browser', { 
		kalimatDariServer: 'Kalimat ini dikirim dari server' });
	socket.on('dari browser', function (data) {
		console.log(data.kalimatDariBrowser);
	});
});
