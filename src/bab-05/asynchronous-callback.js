var fs = require('fs');
var sys = require('sys');

sys.puts('Mulai baca file');
fs.readFile('./pegawai.json', "utf-8",  function(err, data) {
  if (err) throw err;
  console.log(data);
})
sys.puts('Baris setelah membaca file');
