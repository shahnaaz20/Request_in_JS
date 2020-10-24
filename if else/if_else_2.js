var readlineSync = require('readline-sync');
var num = readlineSync.question("please inter the litres of water");
if (num>1){
    if(num>1 && num<=10){
        console.log("No need of water")
    }else{
        console.log("water over flow")
    }
}else{
    console.log("need more water")
}
