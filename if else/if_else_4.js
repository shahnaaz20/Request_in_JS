var readlineSync = require('readline-sync');
let num_1 = readlineSync.question("please inter a num");
let num_2 = readlineSync.question("please inter a num");
if(num_1>num_2){
    console.log(num_1)
}else{
    console.log(num_2)
}