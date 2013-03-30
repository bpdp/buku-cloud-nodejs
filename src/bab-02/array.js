var arrMembers = ['one','two',,'three',];
// sengaja ada koma di bagian akhir
console.log(arrMembers[0]);
// hasil: one
console.log(arrMembers[2]);
// hasil: undefined
console.log(arrMembers[3]);
// hasil: three
console.log(arrMembers[4]);
// hasil: undefined - karena tidak ada
console.log(arrMembers.length);
// hasil: 4
var multiArray = [
	['0-0','0-1','0-2'],
	['1-0','1-1','1-2'],
	['2-0','2-1','2-2']];
console.log(multiArray[0][2]);
// hasil: 0-2
console.log(multiArray[1][2]);
// hasil: 1-2
