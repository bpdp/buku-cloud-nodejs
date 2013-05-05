function induk() {

  var awal = 0;
  function tambahkan() {
    awal++;
  }

  tambahkan();
  tambahkan();
  
  console.log('Nilai = ' + awal);

}

induk();
tambahkan();

// hasil:
// Nilai = 2
//
// /home/bpdp/kerjaan/git-repos/buku-cloud-nodejs/
//  src/bab-02/nested.js:12
// tambahkan();
// ^
// ReferenceError: tambahkan is not defined
//    at Object.<anonymous> (/home/bpdp/kerjaan/git-repos/
//      buku-cloud-nodejs/src/bab-02/nested.js:12:1)
//    at Module._compile (module.js:456:26)
//    at Object.Module._extensions..js (module.js:474:10)
//    at Module.load (module.js:356:32)
//    at Function.Module._load (module.js:312:12)
//    at Function.Module.runMain (module.js:497:10)
//    at startup (node.js:119:16)
//    at node.js:901:3
