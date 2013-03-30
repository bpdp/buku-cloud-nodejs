var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
      output: process.stdout
});

rl.question("What do you think of node.js? ", function(answer) {
  console.log("Thank you for your valuable feedback:", answer);
  rl.close();
});

// hasil:
// [bpdp@bpdp-arch modul-2]$ node readline.js 
// What do you think of node.js? awesome!
// Thank you for your valuable feedback: awesome!
// [bpdp@bpdp-arch bab-2]$
