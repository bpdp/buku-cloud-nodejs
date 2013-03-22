var url = require('url');

// Definisi obyek
function Halaman(alamatUrl) {
  this.url = alamatUrl;
  console.log("Mengakses alamat " + alamatUrl);
}

Halaman.prototype.getDomainName = function() {
  return url.parse(this.url, true).host; 
}
// sampai disini definisi obyek
// Halaman.prototype.getDomainName => menetapkan method getDomainName
// untuk obyek

var halSatu = new Halaman("http://nodejs.org/api/http.html");
var halDua = new Halaman("http://bpdp.name/login?fromHome");

console.log("Alamat URL yang diakses oleh halSatu = " + halSatu.url);
console.log("Alamat URL yang diakses oleh halDua = " + halDua.url);

console.log("Nama domain halDua = " + halDua.getDomainName());

// hasil:
// Mengakses alamat http://nodejs.org/api/http.html
// Mengakses alamat http://bpdp.name/login?fromHome
// Alamat URL yang diakses oleh halSatu = http://nodejs.org/api/http.html
// Alamat URL yang diakses oleh halDua = http://bpdp.name/login?fromHome
// Nama domain halDua = bpdp.name
