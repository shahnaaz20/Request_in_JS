var readlineSync = require('readline-sync');
var num = readlineSync.question("please inter a num");
if(num<10){
    console.log("Smaller than 10")
}else if(num>=10 && num<=20){
    console.log("smaller than 20")
}else{
    console.log("greater than 20")
}