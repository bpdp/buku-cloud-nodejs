// Diambil dari 
// http://stackoverflow.com/questions/3865335/what-is-a-lambda-language
// dengan beberapa perubahan

function applyOperation(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a+b;
}

function subtract(a, b) {
  return a-b;
}

console.log('1,2, add: ' + applyOperation(1,2, add));
console.log('43,21, subtract: ' + applyOperation(43,21, subtract));

console.log('4^3: ' + applyOperation(4, 3, function(a,b) {return Math.pow(a, b)}))

// hasil:
// 1,2, add: 3
// 43,21, subtract: 22
// 4^3: 64
