try {
  gakAdaFungsiIni();
} catch (e) {
  console.log ("Error: " + e.message);
} finally {
  console.log ("Ini adalah semacam bagian untuk 'pembersihan', akan dikerjakan, apapun yang terjadi");
};

// hasil:
// Error: gakAdaFungsiIni is not defined
// Ini adalah semacam bagian untuk 'pembersihan', akan dikerjakan, apapun yang terjadi
