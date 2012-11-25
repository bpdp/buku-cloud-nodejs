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

// Hasil:
// Nilai = 2
//
// /home/bpdp/kerjaan/git-repos/buku-cloud-nodejs/src/modul-2/nested.js:12
// tambahkan();
// ^
// ReferenceError: tambahkan is not defined
//     at Object.<anonymous> (/home/bpdp/kerjaan/git-repos/buku-cloud-nodejs/src/modul-2/nested.js:12:1)
//     at Module._compile (module.js:449:26)
//     at Object.Module._extensions..js (module.js:467:10)
//     at Module.load (module.js:356:32)
//     at Function.Module._load (module.js:312:12)
//     at Module.runMain (module.js:492:10)
//     at process.startup.processNextTick.process._tickCallback (node.js:244:9)
//
