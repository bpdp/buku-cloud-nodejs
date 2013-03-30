try {
  var a = 1/0;
  throw "Pembagian oleh angka 0";
} catch (e) {
  console.log ("Error: " + e);
};

// hasil:
// Error: Pembagian oleh angka 0
