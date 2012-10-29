topLabel:
  for(var k = 0; k < 10; k++){
    for(var m = 0; m < 20; m++){
      if(m == 5){
        console.log("Nilai k = " + k);
        console.log("Nilai m = " + m);
        break topLabel;
      }
    }
  }
// hasil: 
//Nilai k = 0
//Nilai m = 5
