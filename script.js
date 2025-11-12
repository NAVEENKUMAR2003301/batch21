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


// printing statement

// 1. console.log()

let all = 1

console.log(all);

console.log(100);



// 2. alert()

// alert("hello everyone , good morning")

// 3. confirm()

// confirm("did you know javascript")


// 4. prompt()

// prompt("what is your name")

// 5. document.writeln()

// document.writeln("hello")


// console method 

// 1. console.log()

console.log(100);


// 2. console.warn()

console.warn(100);


// 3. console.error()

console.error(100);


// 4. console.clear()

console.clear()



// dataTypes

// primitive data type

// 1. string - ""

let str = "123"

console.log(typeof(str));




// 2. number

let num = 123

console.log(typeof(num));


// 3. boolean

let boo = false

console.log(typeof(boo));


// 4. undefined

let un;

console.log(un);


// 5. null

// let null1 = prompt()

// console.log(null1);


// non primitive data type

// array

// []

let fruit = ["graphs","apple","orange","banana","cherry","pine apple"]

console.log(fruit);
console.log(fruit[0]);
console.log(fruit[3]);

// dynamically access first val

console.log(fruit[0]);

console.log(fruit[fruit.length-1]);


// object

// {}

let obj1 = {
    redFruit : ["apple","cherry"],
    yellowFruit : ["banana","pine apple"],
    smallFruit : "graphs"
}

console.log(obj1);

console.log(obj1.redFruit[0]);
console.log(obj1.yellowFruit[1]);
console.log(obj1.smallFruit);


// operators 

// 1. arithmetic operator

// meaning            operator 

// 1. addition            +

// 2. subraction          -

// 3. multiplication      *

// 4. division            / 

// 5. modulus             %

// 6. exponencial        **

// 7. increament         ++,  post = var ++ , pre = ++ var

// 8. decreament         -- , post = var --, pre = -- var.

console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(1 % 2);
console.log(1 ** 2); // 1^2 = 1*1 = 1


// ++ = 1

let num1 = 2  // 0

num1  = ++num1 // ++num1 = 3

console.log(num1);


let num2 = 2     

let num3 = num2++ // 2++ = 3

console.log("num2 :",num2);
console.log("num3 :",num3);





// 2. assignment operator

// 3. comparision operator

// 4. logical operator






// function

// date


