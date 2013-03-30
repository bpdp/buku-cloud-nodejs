var n = 0;
var x = 0;

while (n < 5) {
  n ++;
  x += n;

  if (x%2 == 0) {
    continue;
  };

  if (x>10) {
    break;
  };

  console.log("Nilai n = " + n);
  console.log("Nilai x = " + x);

};
// hasil:
//Nilai n = 1
//Nilai x = 1
//Nilai n = 2
//Nilai x = 3
