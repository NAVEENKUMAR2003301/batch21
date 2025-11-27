// // // // variables 

// // // // var - global scope

// // // // let  - block scope

// // // // const - block scope

// // // // rules

// // // // var

// // // var a = 10  // declration  // intialiazation

// // // a = 20     // reuse  // reintialiazation

// // // var a = 22  // redeclation

// // // console.log(a)

// // // // let 

// // // let b = 20  // declration // intialiazation

// // // b = 25      // reuse      // reIntialiazation

// // // // let b = 30  // reDeclration

// // // console.log(b);

// // // // const 

// // // const c = 30  // declration // intialiazation

// // // // c = 40     // not accepted for reuse & reInt

// // // // const c = 56 // not acc redeclration

// // // console.log(c);


// // // examples 


// // // 1
// // var x = 5;
// // x = 10;
// // var x = 15;
// // console.log(x);  // 15

// // // 2
// // let y = 8;
// // y = 12;
// // // let y = 20;
// // console.log(y); // 12

// // // 3
// // const z = 25;
// // // z = 30;
// // // const z = 40;
// // console.log(z); // 25

// // // 4
// // var a = 50;
// // a = a + 20;
// // var a = a + 10;
// // console.log(a); // 80

// // // 5
// // let b = 100;
// // b = b - 40;
// // // let b = 200;
// // console.log(b); // 60

// // // 6
// // const c = 10;
// // // c = c + 5;
// // // const c = 20;
// // console.log(c); // 10

// // // 7
// // var price = 200;
// // price = price * 2;
// // var price = price / 4;
// // console.log(price); // 100

// // // 8
// // let value = 15;
// // value = value + 10;
// // // let value = 50;
// // console.log(value); // 25


// // // printing statement

// // // 1. console.log()

// // let all = 1

// // console.log(all);

// // console.log(100);



// // // 2. alert()

// // // alert("hello everyone , good morning")

// // // 3. confirm()

// // // confirm("did you know javascript")


// // // 4. prompt()

// // // prompt("what is your name")

// // // 5. document.writeln()

// // // document.writeln("hello")


// // // console method 

// // // 1. console.log()

// // console.log(100);


// // // 2. console.warn()

// // console.warn(100);


// // // 3. console.error()

// // console.error(100);


// // // 4. console.clear()

// // console.clear()



// // // dataTypes

// // // primitive data type

// // // 1. string - ""

// // let str = "123"

// // console.log(typeof(str));




// // // 2. number

// // let num = 123

// // console.log(typeof(num));


// // // 3. boolean

// // let boo = false

// // console.log(typeof(boo));


// // // 4. undefined

// // let un;

// // console.log(un);


// // // 5. null

// // // let null1 = prompt()

// // // console.log(null1);


// // // non primitive data type

// // // array

// // // []

// // let fruit = ["graphs","apple","orange","banana","cherry","pine apple"]

// // console.log(fruit);
// // console.log(fruit[0]);
// // console.log(fruit[3]);

// // // dynamically access first val

// // console.log(fruit[0]);

// // console.log(fruit[fruit.length-1]);


// // // object

// // // {}

// // let obj1 = {
// //     redFruit : ["apple","cherry"],
// //     yellowFruit : ["banana","pine apple"],
// //     smallFruit : "graphs"
// // }

// // console.log(obj1);

// // console.log(obj1.redFruit[0]);
// // console.log(obj1.yellowFruit[1]);
// // console.log(obj1.smallFruit);


// // // operators 

// // // 1. arithmetic operator

// // // meaning            operator 

// // // 1. addition            +

// // // 2. subraction          -

// // // 3. multiplication      *

// // // 4. division            / 

// // // 5. modulus             %

// // // 6. exponencial        **

// // // 7. increament         ++,  post = var ++ , pre = ++ var

// // // 8. decreament         -- , post = var --, pre = -- var.

// // console.log(1 + 2);
// // console.log(1 - 2);
// // console.log(1 * 2);
// // console.log(1 / 2);
// // console.log(1 % 2);
// // console.log(1 ** 2); // 1^2 = 1*1 = 1


// // // ++ = 1

// // let num1 = 2  // 0

// // num1  = ++num1 // ++num1 = 3

// // console.log(num1);


// // let num2 = 2     

// // let num3 = num2++ // 2++ = 3

// // console.log("num2 :",num2);
// // console.log("num3 :",num3);


// // console.clear();





// // // 2. assignment operator

// // let num4 = 2
// // let additionval = 100

// // // num4 = num4 + additionval  // num4 += additionVal

// // num4 += additionval


// // console.log(num4);

// // let num5 = 4


// // num5 -= additionval
// // num5 *= additionval
// // num5 /= additionval
// // num5 %= additionval
// // num5 **= additionval
// // console.log(num5);





// // // 3. comparision operator

// // // meaning          operator          example       results

// // // lessthen            <                5<4          false 

// // // greaterThen         >                5>4          true

// // // lessThenEqual       <=               5<=5         true

// // // greaterThenEq       >=               5>=4         true

// // // loosyTypeEq         ==               5=="5"       true

// // // strictlyTypeEq      ===              5==="5"      false

// // // loosyNotEq          !=               5!="5"       false

// // // strictlyNotEq       !==              5!=="5"      true


// // // example

// // // 1.
// // console.log(8 < 10);

// // // true

// // // 2.
// // console.log(15 >= 20);

// // // false

// // // 3.
// // console.log("25" == 25);

// // // true

// // // 4.
// // console.log("50" === 50);

// // // false

// // // 5.
// // console.log(5 != "5"); // 5=="5" = true, ! = false

// // //  false

// // // 6.
// // console.log(9 !== "9");

// // // true

// // // 7.
// // let a = 12;
// // let b = 10;
// // console.log(a > b);

// // // true

// // // 8.
// // let x = 7;
// // let y = 7;
// // console.log(x <= y);

// // // true









// // // 4. logical operator


// // AND   -- &&

// // true && false && true  = false

// // false && false && false = false

// // true && true && true = true


// // OR    -- ||

// // true || false || false = true

// // false || false || false = false


// // NOT    -- !

// // !(true) = false , !(false) = true


// // example 

// // 1.
// console.log(true && false);

// // false 

// // 2.
// console.log(false || true);

// // true

// // 3.
// let a = 10;
// let b = 20;
// console.log(a < b && b > 15);

// // true

// // 4.
// let x = 5;
// let y = 8;
// console.log(x > 10 || y < 10);

// // true

// // 5.
// console.log(!(false && true));

// // true

// // 6.
// let p = 12;
// let q = 12;
// console.log(p === q && !(p > q));

// //   true && true = true

// // 7.
// console.log((5 > 2) || (3 === "3"));

// // true

// // 8.
// let isLoggedIn = true;
// let hasPermission = false;
// console.log(isLoggedIn && !hasPermission);

// // true 

// // true && !false = true = true && true = true


// // flow control statement

// // conditional statement

// // if statement

// // condition true = allow

// // if(condition){
// //   // statement
// // }


// if(5=="5"){
//     console.log("hello");
    
// }


// // if else statement

// if((5>5)){
//  console.log("true value");
 
// }else{
//     console.log("false value");  
// }

// // else if statement

// let hour = 100

// if(hour >= 1 && hour <= 6){
//    console.log("good morning");
   
// }else if(hour >= 7 && hour <=12 ){
//     console.log("morning");
    
// }else if(hour >= 13 && hour <= 19){
//     console.log("afternoon");
    
// }else{
//     console.log("good night");
    
// }

// // nested if statement

// // let age = prompt("enter your age :")
// // let height = prompt("enter your height:")
// // let weight = prompt("enter your weight:")

// // if(age >= 18){
// //     if(height >= 150){
// //         if(weight >= 50){
// //             alert("congratulations your selected");
            
// //         }else{
// //             alert("your weight is not selected");
            
// //         }
// //     }else{
// //         alert("your height is not selected");
        
// //     }
// // }else{
// //     alert("your age is not selected");
    
// // }

// // switch statement

// // switch(){
// //     case value : statement ; break
// //     case value : statement ; break
// //     case value : statement ; break
// // }

// let trafficLight = "green"

// switch(trafficLight){
//     case "red" : console.log("vechile stop");break
//     case "yellow" : console.log("vechile start");break
//     case "green"   : console.log("vechile go"); break   
// }

// // ternary operator


// // condition ? statement : statement;


// let pwd = false

// pwd ? console.log("welcome home page") : console.log("your password is incorrect");


// console.clear();



// // looping statement


// // 1. for loop 

// // for(intialization ; condition ; iteration){
// //  statements
// //}

// for(let i = 1 ; i<=5 ; i++){
    
//     if(i%2==1){
//         console.log(i); 

//     }
    
// }

// // i = 1 ; 1<=5 = true ; 1++ = 2

// // i = 2 ; 2<=5 = true ; 2++ = 3

// // i = 3 ; 3<=5 = true ; 3++ = 4

// // i = 4 ; 4<=5 = true ; 4++ = 5

// // i = 5 ; 5<=5 = true ; 5++ = 6

// // i = 6 ; 6<=5 = false

// // 2. while loop

// console.log("while loop");


// // intialiazation

// // while(condition){
// //     // statement

// //     iteration
// // }


// let e = 4

// while(e>=10){ // 4>=0 = true , 3>=0 = true , 2>=0 = true , 1>=0 = true,0>=0 = true , -1>=0 =false

//     console.log(e); // 4 // 3 // 2 // 1 // 0

//     e-- // 4-- = 3, 3-- = 2 , 2-- = 1 , 1-- = 0 , 0-- = -1 
    
// }




// // 3. do while loop

// // intialiazation

// // do{
// //     //statement  // iteration
// // }

// // while(condition)

// let h = 9

// do{
//     console.log(h);  h--
    
// }

// while(h>=0)

// // 4. for of loop

// // string , array , function

// let str = "javascript"

// for(let h1 of str){
//     console.log(h1);
    
// }

// let games = ["kabadi","cricket","volley ball"]

// for(let a1 of games){
//     console.log(a1);
    
// }

// // 5. for in loop

// // object

// let obj = {
//     redFruit : ["apple","orange"],
//     yellowFruit : "banana",
//     bigFruit : "water melon"
// }

// for(let a2 in obj){
//     console.log(obj[a2]);
    
// }


// // // function

// function one(a,b){
//     console.log("hello");
//     console.log(a);
//     console.log(b);
    
    
    
// }

// one(1,"john")

// let employee = {
//     name1 : "bharath",
//     role : "employee"
// }

// function detials(){
//     console.log(employee.name1);
    
// }

// detials()

// console.clear();

// // function types

// // named function

// named("argument")
// function named(parameter){
//     console.log("named function");
    
// }


// // annonymous function

// var annonymous = function(parameter){
//     console.log("annonymous function");
    
// }

// annonymous("argument")

// // arrow function

// let arrow = (parameter)=>{
//    console.log("arrow function");
   
// }

// arrow("argument")



// // scope

// // var - global scope

// // let - block scope

// // const - block scope 

// function add(){
//    if(true){
//     var a2 = "global scope"
//     let b2 = "block scope"
//     const c2 = "block scope"
//     console.log(b2);
//     console.log(c2);
//    }

//    console.log(a2);
   
   
   
// }

// add()

// console.log(a3);
// var a3 = 10


// let b3 = 15
// console.log(b3);

// const c3 = 20
// console.log(c3);

// console.clear();



// // self invoke function

// // (function(parameter){
// //   //statement
// // })("argument")

// // (function(offer){
// //     alert(`offers going on ${offer}% `)
// // })(100)

// // default parameter 

// function form(a,b,c,d="no"){
//     console.log("name : ",a);
//     console.log("department : ",b);
//     console.log("cgpa : ",c);
//     console.log("disability : ",d);
    
// }

// form("bharath","ece",9.1)

// // higherorder and call back function

// function function1(){
//     console.log("higherorder function");
    
// }

// function function2(){
//     console.log("callback function");
    
// }

// function1(function2())

// // generator function

// function* gen(){
//     yield "try again"
//     yield "you will get 10% off"
//     yield "you will get 50% off"
//     yield "better luck next time"
// }

// let genVal = gen()

// console.log(genVal.next().value);
// console.log(genVal.next().value);
// console.log(genVal.next().value);
// console.log(genVal.next().value);
// console.log(genVal.next());

// console.clear();


// // es6 edition

// // spread operator

// // array , object

// // [...] , {...}

// let arr1 = [1,2,3,4]
// let arr2 = [5,6,7,8]

// let finalArr = [...arr1,...arr2]

// console.log(finalArr);

// let obj1 = {
//     name11 : "john",
//     role1 : "trainee"
// }

// let obj2 = {
//     name1 : "john paul",
//     role : "developer"
// }

// let finalObj = {...obj1,...obj2}

// console.log(finalObj);


// // you want to merge to arr or obj you will spread operator

// // rest operator

// // function

// // (...)

// // you want to store multiple argument in single parameter

// function random(a,b,...c){
//  console.log(a+b);
//  console.log(c);
 
 
// }

// random(1,2,3,4,5,6,7,8,9)

// // destracture

// let arr3 = [1,2,3,4]

// let val1 = arr3[0]
// let val2 = arr3[1]

// console.log(val1+val2);


// let [d1,d2,d3,d4] = arr3

// console.log(d1);

// let obj3 ={
//     name1 : "sri",
//     role : "developer"
// }

// let {name1} = obj3

// console.log(name1);



// let nested = [1,2,3,[4,5,6,[7]]]

// console.log(nested[3][3][0]);


// destracture


let fruit = [1,2,3,4]

let a1 = fruit[0]
let a2 = fruit[1]
let a3 = fruit[2]
let a4 = fruit[3]

console.log(a1+a2+a3+a1);
console.log(a2);


let [b1,b2,b3,b4] = fruit

console.log(b1+b2+b1+b3);


let nestedArr = [1,2,3,[4,5,[6]]]

let c1 = (nestedArr[3][2][0]);
let c2 = (nestedArr[3][1]);

console.log(c1+c2);


let [e1,e2,e3,[e4,e5,[e6]]] = nestedArr

console.log(e1+e6);


// Array advanced

let normalArr = [1,2,3,4,"hello",true,undefined,null,[1,2],{k:1}]


console.log(normalArr[0]);
console.log(normalArr[normalArr.length-1]);

// homogeneous

// hetrogeneous

// flexible

// array manipulated method

// if you use add method u can add multiple value.
// if you use remove method u can remove one value.

// pop() - we can remove array last value
// push()- we can add array last value
// shift() - we can remove array first value
// unshift() - we can add array first value
// splice()


let one = [1,2,3,4]

one.pop()
one.push(4,5,6,7,8,9)
one.shift()
one.unshift(0,1)

console.log(one);


// splice(// starting Index, // delete count , // adding value)

let two = [10,2,3,4,50,60]

two.splice(1,3,20,30,40)

console.log(two);


// array merge method

// 1. concat()

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

let totalArr = arr1.concat(arr2,9,10)

console.log(totalArr);


// 2. slice()

let three = [1,2,3,4,5]

let sliceVal = three.slice(2,5) // si , ei

console.log(sliceVal);




// 3. flat()

  let nestedVal = [1,2,3,[4,5,6,[7,8,[9]]]]

  let flatVal = nestedVal.flat(Infinity)

  console.log(flatVal);
  
  
  

// 5. sort()

let random = [1,1000,9,222,4,"A",8,408,2,3,6,0]



let sortVal = random.sort()

console.log(sortVal);


// 6. includes()

let five = [1,2,3,4]

let includesVal  = five.includes(12)

console.log(includesVal);


// 4. fill()

let four = [1,2,3,4] // 1,2,"four","four"

four.fill("four",2,4)// "value",si,ei

console.log(four);




// 7. indexOf()

// 8. lastIndexOf()




















// // // date


