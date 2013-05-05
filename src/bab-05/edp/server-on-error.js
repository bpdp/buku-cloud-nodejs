var net = require('net');

var server = net.createServer(function(sock) {

  // Event dan event-handler
  // 'data' => jika ada data yang dikirimkan dari klien
  sock.on('data', function(data) {
    console.log('data ' + sock.remoteAddress + ': ' + data);
  });

  // 'close' => jika koneksi ditutup
  sock.on('close', function(data) {
    console.log('koneksi ditutup');
  });

});

server.listen(1337, function() {
  console.log('Server aktif di 127.0.0.1:1337');
});

server.on('error', function (e) {

  if (e.code == 'EADDRINUSE') {
    console.log('Error: host dan port sudah digunakan.');
  }

});
