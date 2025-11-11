// // variables 

// // var - global scope

// // let  - block scope

// // const - block scope

// // rules

// // var

// var a = 10  // declration  // intialiazation

// a = 20     // reuse  // reintialiazation

// var a = 22  // redeclation

// console.log(a)

// // let 

// let b = 20  // declration // intialiazation

// b = 25      // reuse      // reIntialiazation

// // let b = 30  // reDeclration

// console.log(b);

// // const 

// const c = 30  // declration // intialiazation

// // c = 40     // not accepted for reuse & reInt

// // const c = 56 // not acc redeclration

// console.log(c);


// examples 


// 1
var x = 5;
x = 10;
var x = 15;
console.log(x);  // 15

// 2
let y = 8;
y = 12;
// let y = 20;
console.log(y); // 12

// 3
const z = 25;
// z = 30;
// const z = 40;
console.log(z); // 25

// 4
var a = 50;
a = a + 20;
var a = a + 10;
console.log(a); // 80

// 5
let b = 100;
b = b - 40;
// let b = 200;
console.log(b); // 60

// 6
const c = 10;
// c = c + 5;
// const c = 20;
console.log(c); // 10

// 7
var price = 200;
price = price * 2;
var price = price / 4;
console.log(price); // 100

// 8
let value = 15;
value = value + 10;
// let value = 50;
console.log(value); // 25
