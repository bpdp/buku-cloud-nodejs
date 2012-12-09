var fs = require('fs');
var sys = require('sys');

sys.puts('Mulai baca file');
data = fs.readFileSync('./pegawai.json', "utf-8");
console.log(data);
sys.puts('Baris setelah membaca file');
