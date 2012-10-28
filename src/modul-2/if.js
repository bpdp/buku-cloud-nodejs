var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
      output: process.stdout
});

rl.question("Masukkan angka nilai: ", function(answer) {
  if (answer > 80) {
    console.log("Nilai: A");
  } else if (answer > 70) {
    console.log("Nilai: B");
  } else if (answer > 40) {
    console.log("Nilai: C");
  } else if (answer > 30) {
    console.log("Nilai: D");
  } else {
    console.log("Tidak lulus");
  }
  rl.close();
});
