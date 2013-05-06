try {
  gakAdaFungsiIni();
} catch (e) {
  console.log ("Error: " + e.message);
} finally {
  console.log ("Bagian 'pembersihan', akan dikerjakan, apapun yang terjadi");
};

// hasil:
// Error: gakAdaFungsiIni is not defined
// Bagian 'pembersihan', akan dikerjakan, apapun yang terjadi
