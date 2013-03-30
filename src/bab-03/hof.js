function forEach(array, action) {
	for (var i = 0; i < array.length; i++ )
		action(array[i]);
}

function print(word) {
	console.log(word);
}

function makeUpperCase(word) {
	console.log(word.toUpperCase());
}

forEach(["satu", "dua", "tiga"], print);
forEach(["satu", "dua", "tiga"], makeUpperCase);

// hasil:
//satu
//dua
//tiga
//SATU
//DUA
//TIGA
