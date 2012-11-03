// Definisi obyek
function Kelas(param) {
  this.property1 = new String(param);
}

Kelas.prototype.methodSatu = function() {
  return this.property1; 
}

var kelasSatu = new Kelas("ini parameter 1 dari kelas 1");

console.log("Property 1 dari kelasSatu = " + kelasSatu.property1);
console.log("Property 1 dari kelasSatu, diambil dari method  = " + kelasSatu.methodSatu());

// Definisi inheritance:
// SubKelas merupakan anak dari Kelas yang didefinisikan
// di atas.

SubKelas.prototype = new Kelas();
SubKelas.prototype.constructor = SubKelas;

function SubKelas(param) {
  this.property1 = new String(param);
}

// method overriding
SubKelas.prototype.methodSatu = function(keHurufBesar) {
  console.log("Ubah ke huruf besar? = " + keHurufBesar);
  if (keHurufBesar) {
    return this.property1.toUpperCase();
  } else {
    return this.property1.toLowerCase();
  }
}

SubKelas.prototype.methodDua = function() {
  console.log("Berada di method dua dari SubKelas");
}

// mari diuji
var subKelasSatu = new SubKelas("Parameter 1 Dari Sub Kelas 1");

console.log("Property 1 dari sub kelas 1 = " + subKelasSatu.property1);
console.log("Property 1 dari sub kelas 1, diambil dari method+param = " + subKelasSatu.methodSatu(true));
console.log("Property 1 dari sub kelas 1, diambil dari method+param = " + subKelasSatu.methodSatu(false));

console.log(subKelasSatu.methodDua());
// hasil:
//
//Property 1 dari kelasSatu = ini parameter 1 dari kelas 1
//Property 1 dari kelasSatu, diambil dari method  = ini 
//parameter 1 dari kelas 1
//Property 1 dari sub kelas 1 = Parameter 1 Dari Sub Kelas 1
//Ubah ke huruf besar? = true
//Property 1 dari sub kelas 1, diambil dari method+param = 
//PARAMETER 1 DARI SUB KELAS 1
//Ubah ke huruf besar? = false
//Property 1 dari sub kelas 1, diambil dari method+param = 
//parameter 1 dari sub kelas 1
//Berada di method dua dari SubKelas
