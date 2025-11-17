// // // variables 

// // // var - global scope

// // // let  - block scope

// // // const - block scope

// // // rules

// // // var

// // var a = 10  // declration  // intialiazation

// // a = 20     // reuse  // reintialiazation

// // var a = 22  // redeclation

// // console.log(a)

// // // let 

// // let b = 20  // declration // intialiazation

// // b = 25      // reuse      // reIntialiazation

// // // let b = 30  // reDeclration

// // console.log(b);

// // // const 

// // const c = 30  // declration // intialiazation

// // // c = 40     // not accepted for reuse & reInt

// // // const c = 56 // not acc redeclration

// // console.log(c);


// // examples 


// // 1
// var x = 5;
// x = 10;
// var x = 15;
// console.log(x);  // 15

// // 2
// let y = 8;
// y = 12;
// // let y = 20;
// console.log(y); // 12

// // 3
// const z = 25;
// // z = 30;
// // const z = 40;
// console.log(z); // 25

// // 4
// var a = 50;
// a = a + 20;
// var a = a + 10;
// console.log(a); // 80

// // 5
// let b = 100;
// b = b - 40;
// // let b = 200;
// console.log(b); // 60

// // 6
// const c = 10;
// // c = c + 5;
// // const c = 20;
// console.log(c); // 10

// // 7
// var price = 200;
// price = price * 2;
// var price = price / 4;
// console.log(price); // 100

// // 8
// let value = 15;
// value = value + 10;
// // let value = 50;
// console.log(value); // 25


// // printing statement

// // 1. console.log()

// let all = 1

// console.log(all);

// console.log(100);



// // 2. alert()

// // alert("hello everyone , good morning")

// // 3. confirm()

// // confirm("did you know javascript")


// // 4. prompt()

// // prompt("what is your name")

// // 5. document.writeln()

// // document.writeln("hello")


// // console method 

// // 1. console.log()

// console.log(100);


// // 2. console.warn()

// console.warn(100);


// // 3. console.error()

// console.error(100);


// // 4. console.clear()

// console.clear()



// // dataTypes

// // primitive data type

// // 1. string - ""

// let str = "123"

// console.log(typeof(str));




// // 2. number

// let num = 123

// console.log(typeof(num));


// // 3. boolean

// let boo = false

// console.log(typeof(boo));


// // 4. undefined

// let un;

// console.log(un);


// // 5. null

// // let null1 = prompt()

// // console.log(null1);


// // non primitive data type

// // array

// // []

// let fruit = ["graphs","apple","orange","banana","cherry","pine apple"]

// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[3]);

// // dynamically access first val

// console.log(fruit[0]);

// console.log(fruit[fruit.length-1]);


// // object

// // {}

// let obj1 = {
//     redFruit : ["apple","cherry"],
//     yellowFruit : ["banana","pine apple"],
//     smallFruit : "graphs"
// }

// console.log(obj1);

// console.log(obj1.redFruit[0]);
// console.log(obj1.yellowFruit[1]);
// console.log(obj1.smallFruit);


// // operators 

// // 1. arithmetic operator

// // meaning            operator 

// // 1. addition            +

// // 2. subraction          -

// // 3. multiplication      *

// // 4. division            / 

// // 5. modulus             %

// // 6. exponencial        **

// // 7. increament         ++,  post = var ++ , pre = ++ var

// // 8. decreament         -- , post = var --, pre = -- var.

// console.log(1 + 2);
// console.log(1 - 2);
// console.log(1 * 2);
// console.log(1 / 2);
// console.log(1 % 2);
// console.log(1 ** 2); // 1^2 = 1*1 = 1


// // ++ = 1

// let num1 = 2  // 0

// num1  = ++num1 // ++num1 = 3

// console.log(num1);


// let num2 = 2     

// let num3 = num2++ // 2++ = 3

// console.log("num2 :",num2);
// console.log("num3 :",num3);


// console.clear();





// // 2. assignment operator

// let num4 = 2
// let additionval = 100

// // num4 = num4 + additionval  // num4 += additionVal

// num4 += additionval


// console.log(num4);

// let num5 = 4


// num5 -= additionval
// num5 *= additionval
// num5 /= additionval
// num5 %= additionval
// num5 **= additionval
// console.log(num5);





// // 3. comparision operator

// // meaning          operator          example       results

// // lessthen            <                5<4          false 

// // greaterThen         >                5>4          true

// // lessThenEqual       <=               5<=5         true

// // greaterThenEq       >=               5>=4         true

// // loosyTypeEq         ==               5=="5"       true

// // strictlyTypeEq      ===              5==="5"      false

// // loosyNotEq          !=               5!="5"       false

// // strictlyNotEq       !==              5!=="5"      true


// // example

// // 1.
// console.log(8 < 10);

// // true

// // 2.
// console.log(15 >= 20);

// // false

// // 3.
// console.log("25" == 25);

// // true

// // 4.
// console.log("50" === 50);

// // false

// // 5.
// console.log(5 != "5"); // 5=="5" = true, ! = false

// //  false

// // 6.
// console.log(9 !== "9");

// // true

// // 7.
// let a = 12;
// let b = 10;
// console.log(a > b);

// // true

// // 8.
// let x = 7;
// let y = 7;
// console.log(x <= y);

// // true









// // 4. logical operator


// AND   -- &&

// true && false && true  = false

// false && false && false = false

// true && true && true = true


// OR    -- ||

// true || false || false = true

// false || false || false = false


// NOT    -- !

// !(true) = false , !(false) = true


// example 

// 1.
console.log(true && false);

// false 

// 2.
console.log(false || true);

// true

// 3.
let a = 10;
let b = 20;
console.log(a < b && b > 15);

// true

// 4.
let x = 5;
let y = 8;
console.log(x > 10 || y < 10);

// true

// 5.
console.log(!(false && true));

// true

// 6.
let p = 12;
let q = 12;
console.log(p === q && !(p > q));

//   true && true = true

// 7.
console.log((5 > 2) || (3 === "3"));

// true

// 8.
let isLoggedIn = true;
let hasPermission = false;
console.log(isLoggedIn && !hasPermission);

// true 

// true && !false = true = true && true = true


// flow control statement

// conditional statement

// if statement

// condition true = allow

// if(condition){
//   // statement
// }


if(5=="5"){
    console.log("hello");
    
}


// if else statement

if((5>5)){
 console.log("true value");
 
}else{
    console.log("false value");  
}

// else if statement

let hour = 100

if(hour >= 1 && hour <= 6){
   console.log("good morning");
   
}else if(hour >= 7 && hour <=12 ){
    console.log("morning");
    
}else if(hour >= 13 && hour <= 19){
    console.log("afternoon");
    
}else{
    console.log("good night");
    
}

// nested if statement

// let age = prompt("enter your age :")
// let height = prompt("enter your height:")
// let weight = prompt("enter your weight:")

// if(age >= 18){
//     if(height >= 150){
//         if(weight >= 50){
//             alert("congratulations your selected");
            
//         }else{
//             alert("your weight is not selected");
            
//         }
//     }else{
//         alert("your height is not selected");
        
//     }
// }else{
//     alert("your age is not selected");
    
// }

// switch statement

// switch(){
//     case value : statement ; break
//     case value : statement ; break
//     case value : statement ; break
// }

let trafficLight = "green"

switch(trafficLight){
    case "red" : console.log("vechile stop");break
    case "yellow" : console.log("vechile start");break
    case "green"   : console.log("vechile go"); break   
}

// ternary operator


// condition ? statement : statement;


let pwd = false

pwd ? console.log("welcome home page") : console.log("your password is incorrect");


console.clear();



// looping statement


// 1. for loop 

// for(intialization ; condition ; iteration){
//  statements
//}

for(let i = 1 ; i<=5 ; i++){
    
    if(i%2==1){
        console.log(i); // 1 2 3 4 5

    }
    
}

// i = 1 ; 1<=5 = true ; 1++ = 2

// i = 2 ; 2<=5 = true ; 2++ = 3

// i = 3 ; 3<=5 = true ; 3++ = 4

// i = 4 ; 4<=5 = true ; 4++ = 5

// i = 5 ; 5<=5 = true ; 5++ = 6

// i = 6 ; 6<=5 = false

// 2. while loop

console.log("while loop");


// intialiazation

// while(condition){
//     // statement

//     iteration
// }


let e = 4

while(e>=10){ // 4>=0 = true , 3>=0 = true , 2>=0 = true , 1>=0 = true,0>=0 = true , -1>=0 =false

    console.log(e); // 4 // 3 // 2 // 1 // 0

    e-- // 4-- = 3, 3-- = 2 , 2-- = 1 , 1-- = 0 , 0-- = -1 
    
}




// 3. do while loop

// intialiazation

// do{
//     //statement  // iteration
// }

// while(condition)

let h = 9

do{
    console.log(h);  h--
    
}

while(h>=0)

// 4. for of loop

// string , array , function

let str = "javascript"

for(let h1 of str){
    console.log(h1);
    
}

let games = ["kabadi","cricket","volley ball"]

for(let a1 of games){
    console.log(a1);
    
}

// 5. for in loop

// object

let obj = {
    redFruit : ["apple","orange"],
    yellowFruit : "banana",
    bigFruit : "water melon"
}

for(let a2 in obj){
    console.log(obj[a2]);
    
}


// // function

function one(a,b){
    console.log("hello");
    console.log(a);
    console.log(b);
    
    
    
}

one(1,"john")

let employee = {
    name1 : "bharath",
    role : "employee"
}

function detials(){
    console.log(employee.name1);
    
}

detials()


// function types

// named function

function named(parameter){
    console.log("named function");
    
}

named("argument")

// annonymous function

let annonymous = function(parameter){
   console.log("annonymous function");
   
}

annonymous("argument")

// arrow function

let arrow = (parameter)=>{
   console.log("arrow function");
   
}

arrow("argument")


// // date


