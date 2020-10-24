var readlineSync = require('readline-sync');
var num = readlineSync.question("please inter a num");
if(num%2===0){
    console.log(num," is a even number")
}else{
    console.log(num,"is a odd number")
}