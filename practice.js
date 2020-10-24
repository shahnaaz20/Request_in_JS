const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('enter any number ', number => {
      for(let i = 0; i <= number; i++){
          console.log(i);
      }
    
    
  
    readline.close();
  });

  