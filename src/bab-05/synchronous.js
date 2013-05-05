var fs = require('fs');
var sys = require('sys');

sys.puts('Mulai baca file');
data = fs.readFileSync('./pegawai.json', "utf-8");
console.log(data);
sys.puts('Baris setelah membaca file');

// hasil:
//Mulai baca file
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
//
//Baris setelah membaca file
