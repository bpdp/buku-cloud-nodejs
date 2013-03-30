var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
      output: process.stdout
});

console.log("Menu");
console.log("====");
console.log("1. Mengisi data");
console.log("2. Mengedit data");
console.log("3. Menghapus data");
console.log("4. Mencari data");
rl.question("Masukkan angka pilihan anda: ", function(answer) {
  console.log("Pilihan anda: " + answer);
  switch (answer) {
    case "1":
      console.log("Anda memilih menu pengisian data");
      break;
    case "2":
      console.log("Anda memilih menu pengeditan data");
      break;
    case "3":
      console.log("Anda memilih menu penghapusan data");
      break;
    case "4":
      console.log("Anda memilih menu pencarian data");
      break;
    default:
      console.log("Anda tidak memilih salah satu dari menu di atas");
      break;
  }
  rl.close();
});

// hasil:
// $ node switch.js 
// Menu
// ====
// 1. Mengisi data
// 2. Mengedit data
// 3. Menghapus data
// 4. Mencari data
// Masukkan angka pilihan anda: 10
// Pilihan anda: 10
// Anda tidak memilih salah satu dari menu di atas
// $ node switch.js 
// Menu
// ====
// 1. Mengisi data
// 2. Mengedit data
// 3. Menghapus data
// 4. Mencari data
// Masukkan angka pilihan anda: 2
// Pilihan anda: 2
// Anda memilih menu pengeditan data
