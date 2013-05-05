// Diambil dengan sedikit perubahan dari:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Closures
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
 
var add5 = makeAdder(5);
var add10 = makeAdder(10);
 
console.log(add5(2));  // 7
console.log(add10(2)); // 12
