var fs = require('fs');
var sys = require('sys');

sys.puts('Mulai baca file');
fs.readFile('./pegawai.json', "utf-8",  function(err, data) {
  if (err) throw err;
  console.log(data);
})
sys.puts('Baris setelah membaca file');

// hasil:
//Mulai baca file
//Baris setelah membaca file
//{
//  "pegawai": [
//    {
//      "id": "1",
//      "nama": "Zaky",
//      "alamat": "Purwomartani"
//    },
//    {
//      "id": "2",
//      "nama": "Ahmad",
//      "alamat": "Kalasan"
//    },
//    {
//      "id": "3",
//      "name": "Aditya",
//      "alamat": "Sleman"
//    }
//  ]
//}
