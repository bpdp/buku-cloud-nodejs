var express = require('express')
		, app = express()
  	, routes = require('./routes')
	  , http = require('http')
		, server = http.createServer(app)
	  , io = require('socket.io').listen(server)
  	, path = require('path');

server.listen(80);

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
	app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.get('/', routes.index);

io.sockets.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data.my);
	});
});

