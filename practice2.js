// var person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };


// console.log()
// function f() {
//     return this.a;
//   }
// // console.log(f())  

// var g = f.bind({a: 'azerty'});
// console.log(g())

// var h = g.bind({a: 'yoo'}); // bind only works once!
// console.log(h());

// var o = {a: 37, f: f, g: g, h: h};
// console.log(o.a, o.f(), o.g(), o.h())

// var globalObject = this;
// var foo = (() => this);
// console.log(globalObject)
// console.log(foo() === globalObject);

// let x = 9.12345;
// console.log(x.toExponential());
// console.log(x.toFixed(2)); // 19.01
// console.log(x.toPrecision());
// let numberObject = new Number(10);
// console.log(typeof numberObject);


// var age = 19;
// var canDrive = age > 16 ? 'yes' : 'no';
// console.log(canDrive)


// var speed = 12;
// var message = speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 'OK');
// console.log(message);

// let str = '  JS trim  ';
// let result = str.trim();

// console.log(result);

// setTimeout(function() {  
//     console.log("This message is shown after 3 seconds");
// }, 3000);


// let index = new Promise((resolve, reject) => {
//     let data = 1+1
//     if(data == 5){
//         resolve('success');
//     }else{
//         reject('failed')
//     }
// })
// index.then((message) => {
//     console.log('this  is in the then ' + message);
// }).catch((message) => {
//     console.log('this is in the catch ' + message);
// })

var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return firstName + " " + lastName;
    }
  };
// console.log(person)
var x = this;
console.log(x)