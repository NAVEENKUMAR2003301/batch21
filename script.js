// // // // // // variables 

// // // // // // var - global scope

// // // // // // let  - block scope

// // // // // // const - block scope

// // // // // // rules

// // // // // // var

// // // // // var a = 10  // declration  // intialiazation

// // // // // a = 20     // reuse  // reintialiazation

// // // // // var a = 22  // redeclation

// // // // // console.log(a)

// // // // // // let 

// // // // // let b = 20  // declration // intialiazation

// // // // // b = 25      // reuse      // reIntialiazation

// // // // // // let b = 30  // reDeclration

// // // // // console.log(b);

// // // // // // const 

// // // // // const c = 30  // declration // intialiazation

// // // // // // c = 40     // not accepted for reuse & reInt

// // // // // // const c = 56 // not acc redeclration

// // // // // console.log(c);


// // // // // examples 


// // // // // 1
// // // // var x = 5;
// // // // x = 10;
// // // // var x = 15;
// // // // console.log(x);  // 15

// // // // // 2
// // // // let y = 8;
// // // // y = 12;
// // // // // let y = 20;
// // // // console.log(y); // 12

// // // // // 3
// // // // const z = 25;
// // // // // z = 30;
// // // // // const z = 40;
// // // // console.log(z); // 25

// // // // // 4
// // // // var a = 50;
// // // // a = a + 20;
// // // // var a = a + 10;
// // // // console.log(a); // 80

// // // // // 5
// // // // let b = 100;
// // // // b = b - 40;
// // // // // let b = 200;
// // // // console.log(b); // 60

// // // // // 6
// // // // const c = 10;
// // // // // c = c + 5;
// // // // // const c = 20;
// // // // console.log(c); // 10

// // // // // 7
// // // // var price = 200;
// // // // price = price * 2;
// // // // var price = price / 4;
// // // // console.log(price); // 100

// // // // // 8
// // // // let value = 15;
// // // // value = value + 10;
// // // // // let value = 50;
// // // // console.log(value); // 25


// // // // // printing statement

// // // // // 1. console.log()

// // // // let all = 1

// // // // console.log(all);

// // // // console.log(100);



// // // // // 2. alert()

// // // // // alert("hello everyone , good morning")

// // // // // 3. confirm()

// // // // // confirm("did you know javascript")


// // // // // 4. prompt()

// // // // // prompt("what is your name")

// // // // // 5. document.writeln()

// // // // // document.writeln("hello")


// // // // // console method 

// // // // // 1. console.log()

// // // // console.log(100);


// // // // // 2. console.warn()

// // // // console.warn(100);


// // // // // 3. console.error()

// // // // console.error(100);


// // // // // 4. console.clear()

// // // // console.clear()



// // // // // dataTypes

// // // // // primitive data type

// // // // // 1. string - ""

// // // // let str = "123"

// // // // console.log(typeof(str));




// // // // // 2. number

// // // // let num = 123

// // // // console.log(typeof(num));


// // // // // 3. boolean

// // // // let boo = false

// // // // console.log(typeof(boo));


// // // // // 4. undefined

// // // // let un;

// // // // console.log(un);


// // // // // 5. null

// // // // // let null1 = prompt()

// // // // // console.log(null1);


// // // // // non primitive data type

// // // // // array

// // // // // []

// // // // let fruit = ["graphs","apple","orange","banana","cherry","pine apple"]

// // // // console.log(fruit);
// // // // console.log(fruit[0]);
// // // // console.log(fruit[3]);

// // // // // dynamically access first val

// // // // console.log(fruit[0]);

// // // // console.log(fruit[fruit.length-1]);


// // // // // object

// // // // // {}

// // // // let obj1 = {
// // // //     redFruit : ["apple","cherry"],
// // // //     yellowFruit : ["banana","pine apple"],
// // // //     smallFruit : "graphs"
// // // // }

// // // // console.log(obj1);

// // // // console.log(obj1.redFruit[0]);
// // // // console.log(obj1.yellowFruit[1]);
// // // // console.log(obj1.smallFruit);


// // // // // operators 

// // // // // 1. arithmetic operator

// // // // // meaning            operator 

// // // // // 1. addition            +

// // // // // 2. subraction          -

// // // // // 3. multiplication      *

// // // // // 4. division            / 

// // // // // 5. modulus             %

// // // // // 6. exponencial        **

// // // // // 7. increament         ++,  post = var ++ , pre = ++ var

// // // // // 8. decreament         -- , post = var --, pre = -- var.

// // // // console.log(1 + 2);
// // // // console.log(1 - 2);
// // // // console.log(1 * 2);
// // // // console.log(1 / 2);
// // // // console.log(1 % 2);
// // // // console.log(1 ** 2); // 1^2 = 1*1 = 1


// // // // // ++ = 1

// // // // let num1 = 2  // 0

// // // // num1  = ++num1 // ++num1 = 3

// // // // console.log(num1);


// // // // let num2 = 2     

// // // // let num3 = num2++ // 2++ = 3

// // // // console.log("num2 :",num2);
// // // // console.log("num3 :",num3);


// // // // console.clear();





// // // // // 2. assignment operator

// // // // let num4 = 2
// // // // let additionval = 100

// // // // // num4 = num4 + additionval  // num4 += additionVal

// // // // num4 += additionval


// // // // console.log(num4);

// // // // let num5 = 4


// // // // num5 -= additionval
// // // // num5 *= additionval
// // // // num5 /= additionval
// // // // num5 %= additionval
// // // // num5 **= additionval
// // // // console.log(num5);





// // // // // 3. comparision operator

// // // // // meaning          operator          example       results

// // // // // lessthen            <                5<4          false 

// // // // // greaterThen         >                5>4          true

// // // // // lessThenEqual       <=               5<=5         true

// // // // // greaterThenEq       >=               5>=4         true

// // // // // loosyTypeEq         ==               5=="5"       true

// // // // // strictlyTypeEq      ===              5==="5"      false

// // // // // loosyNotEq          !=               5!="5"       false

// // // // // strictlyNotEq       !==              5!=="5"      true


// // // // // example

// // // // // 1.
// // // // console.log(8 < 10);

// // // // // true

// // // // // 2.
// // // // console.log(15 >= 20);

// // // // // false

// // // // // 3.
// // // // console.log("25" == 25);

// // // // // true

// // // // // 4.
// // // // console.log("50" === 50);

// // // // // false

// // // // // 5.
// // // // console.log(5 != "5"); // 5=="5" = true, ! = false

// // // // //  false

// // // // // 6.
// // // // console.log(9 !== "9");

// // // // // true

// // // // // 7.
// // // // let a = 12;
// // // // let b = 10;
// // // // console.log(a > b);

// // // // // true

// // // // // 8.
// // // // let x = 7;
// // // // let y = 7;
// // // // console.log(x <= y);

// // // // // true









// // // // // 4. logical operator


// // // // AND   -- &&

// // // // true && false && true  = false

// // // // false && false && false = false

// // // // true && true && true = true


// // // // OR    -- ||

// // // // true || false || false = true

// // // // false || false || false = false


// // // // NOT    -- !

// // // // !(true) = false , !(false) = true


// // // // example 

// // // // 1.
// // // console.log(true && false);

// // // // false 

// // // // 2.
// // // console.log(false || true);

// // // // true

// // // // 3.
// // // let a = 10;
// // // let b = 20;
// // // console.log(a < b && b > 15);

// // // // true

// // // // 4.
// // // let x = 5;
// // // let y = 8;
// // // console.log(x > 10 || y < 10);

// // // // true

// // // // 5.
// // // console.log(!(false && true));

// // // // true

// // // // 6.
// // // let p = 12;
// // // let q = 12;
// // // console.log(p === q && !(p > q));

// // // //   true && true = true

// // // // 7.
// // // console.log((5 > 2) || (3 === "3"));

// // // // true

// // // // 8.
// // // let isLoggedIn = true;
// // // let hasPermission = false;
// // // console.log(isLoggedIn && !hasPermission);

// // // // true 

// // // // true && !false = true = true && true = true


// // // // flow control statement

// // // // conditional statement

// // // // if statement

// // // // condition true = allow

// // // // if(condition){
// // // //   // statement
// // // // }


// // // if(5=="5"){
// // //     console.log("hello");
    
// // // }


// // // // if else statement

// // // if((5>5)){
// // //  console.log("true value");
 
// // // }else{
// // //     console.log("false value");  
// // // }

// // // // else if statement

// // // let hour = 100

// // // if(hour >= 1 && hour <= 6){
// // //    console.log("good morning");
   
// // // }else if(hour >= 7 && hour <=12 ){
// // //     console.log("morning");
    
// // // }else if(hour >= 13 && hour <= 19){
// // //     console.log("afternoon");
    
// // // }else{
// // //     console.log("good night");
    
// // // }

// // // // nested if statement

// // // // let age = prompt("enter your age :")
// // // // let height = prompt("enter your height:")
// // // // let weight = prompt("enter your weight:")

// // // // if(age >= 18){
// // // //     if(height >= 150){
// // // //         if(weight >= 50){
// // // //             alert("congratulations your selected");
            
// // // //         }else{
// // // //             alert("your weight is not selected");
            
// // // //         }
// // // //     }else{
// // // //         alert("your height is not selected");
        
// // // //     }
// // // // }else{
// // // //     alert("your age is not selected");
    
// // // // }

// // // // switch statement

// // // // switch(){
// // // //     case value : statement ; break
// // // //     case value : statement ; break
// // // //     case value : statement ; break
// // // // }

// // // let trafficLight = "green"

// // // switch(trafficLight){
// // //     case "red" : console.log("vechile stop");break
// // //     case "yellow" : console.log("vechile start");break
// // //     case "green"   : console.log("vechile go"); break   
// // // }

// // // // ternary operator


// // // // condition ? statement : statement;


// // // let pwd = false

// // // pwd ? console.log("welcome home page") : console.log("your password is incorrect");


// // // console.clear();



// // // // looping statement


// // // // 1. for loop 

// // // // for(intialization ; condition ; iteration){
// // // //  statements
// // // //}

// // // for(let i = 1 ; i<=5 ; i++){
    
// // //     if(i%2==1){
// // //         console.log(i); 

// // //     }
    
// // // }

// // // // i = 1 ; 1<=5 = true ; 1++ = 2

// // // // i = 2 ; 2<=5 = true ; 2++ = 3

// // // // i = 3 ; 3<=5 = true ; 3++ = 4

// // // // i = 4 ; 4<=5 = true ; 4++ = 5

// // // // i = 5 ; 5<=5 = true ; 5++ = 6

// // // // i = 6 ; 6<=5 = false

// // // // 2. while loop

// // // console.log("while loop");


// // // // intialiazation

// // // // while(condition){
// // // //     // statement

// // // //     iteration
// // // // }


// // // let e = 4

// // // while(e>=10){ // 4>=0 = true , 3>=0 = true , 2>=0 = true , 1>=0 = true,0>=0 = true , -1>=0 =false

// // //     console.log(e); // 4 // 3 // 2 // 1 // 0

// // //     e-- // 4-- = 3, 3-- = 2 , 2-- = 1 , 1-- = 0 , 0-- = -1 
    
// // // }




// // // // 3. do while loop

// // // // intialiazation

// // // // do{
// // // //     //statement  // iteration
// // // // }

// // // // while(condition)

// // // let h = 9

// // // do{
// // //     console.log(h);  h--
    
// // // }

// // // while(h>=0)

// // // // 4. for of loop

// // // // string , array , function

// // // let str = "javascript"

// // // for(let h1 of str){
// // //     console.log(h1);
    
// // // }

// // // let games = ["kabadi","cricket","volley ball"]

// // // for(let a1 of games){
// // //     console.log(a1);
    
// // // }

// // // // 5. for in loop

// // // // object

// // // let obj = {
// // //     redFruit : ["apple","orange"],
// // //     yellowFruit : "banana",
// // //     bigFruit : "water melon"
// // // }

// // // for(let a2 in obj){
// // //     console.log(obj[a2]);
    
// // // }


// // // // // function

// // // function one(a,b){
// // //     console.log("hello");
// // //     console.log(a);
// // //     console.log(b);
    
    
    
// // // }

// // // one(1,"john")

// // // let employee = {
// // //     name1 : "bharath",
// // //     role : "employee"
// // // }

// // // function detials(){
// // //     console.log(employee.name1);
    
// // // }

// // // detials()

// // // console.clear();

// // // // function types

// // // // named function

// // // named("argument")
// // // function named(parameter){
// // //     console.log("named function");
    
// // // }


// // // // annonymous function

// // // var annonymous = function(parameter){
// // //     console.log("annonymous function");
    
// // // }

// // // annonymous("argument")

// // // // arrow function

// // // let arrow = (parameter)=>{
// // //    console.log("arrow function");
   
// // // }

// // // arrow("argument")



// // // // scope

// // // // var - global scope

// // // // let - block scope

// // // // const - block scope 

// // // function add(){
// // //    if(true){
// // //     var a2 = "global scope"
// // //     let b2 = "block scope"
// // //     const c2 = "block scope"
// // //     console.log(b2);
// // //     console.log(c2);
// // //    }

// // //    console.log(a2);
   
   
   
// // // }

// // // add()

// // // console.log(a3);
// // // var a3 = 10


// // // let b3 = 15
// // // console.log(b3);

// // // const c3 = 20
// // // console.log(c3);

// // // console.clear();



// // // // self invoke function

// // // // (function(parameter){
// // // //   //statement
// // // // })("argument")

// // // // (function(offer){
// // // //     alert(`offers going on ${offer}% `)
// // // // })(100)

// // // // default parameter 

// // // function form(a,b,c,d="no"){
// // //     console.log("name : ",a);
// // //     console.log("department : ",b);
// // //     console.log("cgpa : ",c);
// // //     console.log("disability : ",d);
    
// // // }

// // // form("bharath","ece",9.1)

// // // // higherorder and call back function

// // // function function1(){
// // //     console.log("higherorder function");
    
// // // }

// // // function function2(){
// // //     console.log("callback function");
    
// // // }

// // // function1(function2())

// // // // generator function

// // // function* gen(){
// // //     yield "try again"
// // //     yield "you will get 10% off"
// // //     yield "you will get 50% off"
// // //     yield "better luck next time"
// // // }

// // // let genVal = gen()

// // // console.log(genVal.next().value);
// // // console.log(genVal.next().value);
// // // console.log(genVal.next().value);
// // // console.log(genVal.next().value);
// // // console.log(genVal.next());

// // // console.clear();


// // // // es6 edition

// // // // spread operator

// // // // array , object

// // // // [...] , {...}

// // // let arr1 = [1,2,3,4]
// // // let arr2 = [5,6,7,8]

// // // let finalArr = [...arr1,...arr2]

// // // console.log(finalArr);

// // // let obj1 = {
// // //     name11 : "john",
// // //     role1 : "trainee"
// // // }

// // // let obj2 = {
// // //     name1 : "john paul",
// // //     role : "developer"
// // // }

// // // let finalObj = {...obj1,...obj2}

// // // console.log(finalObj);


// // // // you want to merge to arr or obj you will spread operator

// // // // rest operator

// // // // function

// // // // (...)

// // // // you want to store multiple argument in single parameter

// // // function random(a,b,...c){
// // //  console.log(a+b);
// // //  console.log(c);
 
 
// // // }

// // // random(1,2,3,4,5,6,7,8,9)

// // // // destracture

// // // let arr3 = [1,2,3,4]

// // // let val1 = arr3[0]
// // // let val2 = arr3[1]

// // // console.log(val1+val2);


// // // let [d1,d2,d3,d4] = arr3

// // // console.log(d1);

// // // let obj3 ={
// // //     name1 : "sri",
// // //     role : "developer"
// // // }

// // // let {name1} = obj3

// // // console.log(name1);



// // // let nested = [1,2,3,[4,5,6,[7]]]

// // // console.log(nested[3][3][0]);


// // // destracture


// // let fruit = [1,2,3,4]

// // let a1 = fruit[0]
// // let a2 = fruit[1]
// // let a3 = fruit[2]
// // let a4 = fruit[3]

// // console.log(a1+a2+a3+a1);
// // console.log(a2);


// // let [b1,b2,b3,b4] = fruit

// // console.log(b1+b2+b1+b3);


// // let nestedArr = [1,2,3,[4,5,[6]]]

// // let c1 = (nestedArr[3][2][0]);
// // let c2 = (nestedArr[3][1]);

// // console.log(c1+c2);


// // let [e1,e2,e3,[e4,e5,[e6]]] = nestedArr

// // console.log(e1+e6);


// // // Array advanced

// // let normalArr = [1,2,3,4,"hello",true,undefined,null,[1,2],{k:1}]


// // console.log(normalArr[0]);
// // console.log(normalArr[normalArr.length-1]);

// // // homogeneous

// // // hetrogeneous

// // // flexible

// // // array manipulated method

// // // if you use add method u can add multiple value.
// // // if you use remove method u can remove one value.

// // // pop() - we can remove array last value
// // // push()- we can add array last value
// // // shift() - we can remove array first value
// // // unshift() - we can add array first value
// // // splice()


// // let one = [1,2,3,4]

// // one.pop()
// // one.push(4,5,6,7,8,9)
// // one.shift()
// // one.unshift(0,1)

// // console.log(one);


// // // splice(// starting Index, // delete count , // adding value)

// // let two = [10,2,3,4,50,60]

// // two.splice(1,3,20,30,40)

// // console.log(two);


// // // array merge method

// // // 1. concat()

// // let arr1 = [1,2,3,4]
// // let arr2 = [5,6,7,8]

// // let totalArr = arr1.concat(arr2,9,10)

// // console.log(totalArr);


// // // 2. slice()

// // let three = [1,2,3,4,5]

// // let sliceVal = three.slice(2,5) // si , ei

// // console.log(sliceVal);




// // // 3. flat()

// //   let nestedVal = [1,2,3,[4,5,6,[7,8,[9]]]]

// //   let flatVal = nestedVal.flat(Infinity)

// //   console.log(flatVal);
  
  
  

// // // 5. sort()

// // let random = [1,1000,9,222,4,"A",8,408,2,3,6,0]



// // let sortVal = random.sort()

// // console.log(sortVal);


// // // 6. includes()

// // let five = [1,2,3,4]

// // let includesVal  = five.includes(12)

// // console.log(includesVal);


// // // 4. fill()

// // let four = [1,2,3,4] // 1,2,"four","four"

// // four.fill("four",2,4)// "value",si,ei

// // console.log(four);

// // console.clear();



// // // 7. indexOf()

// // let six = [1,2,3,5,6,2,1] 

// // let indexOfVal = six.indexOf(2,2)// value,FromIndex

// // console.log(indexOfVal);


// // // 8. lastIndexOf()

// // let seven = [1,2,3,4,5,4,2,3,2,1]

// // let lastIndexOfVal = seven.lastIndexOf(1,8)// value,fromIndex

// // console.log(lastIndexOfVal);


// // // array higher order method

// // let game = ["gta","sub","ff","pubg","cod"]

// // // 1. forEach()



// // let forEachVal = game.forEach((c,i,t)=>{
// //   return(c);
  
  
// // })

// // console.log(forEachVal);


// // // 2. map()

// // let mapVal = game.map((c,i,t)=>{

// //   return(c);
// // })

// // console.log(mapVal);



// // // 3. filter()

// // let employee = [
// //   {ename : "a",eSalary : 100000},
// //   {ename : "b",eSalary : 200000},
// //   {ename : "c",eSalary : 300000},
// //   {ename : "d",eSalary : 400000},
// //   {ename : "e",eSalary : 500000},
// // ]

// // let filterVal = employee.filter((c,i,t)=>{
// //   return c.eSalary>200000
// // })

// // console.log(filterVal);


// // // 4. find()

// // let findVal = employee.find((c,i,t)=>{
// //  return c.eSalary>200000
// // })

// // console.log(findVal);



// // // 5. reduce()

// // employee = [
// //   { ename: "a", eSalary: 100000 },
// //   { ename: "b", eSalary: 200000 },
// //   { ename: "c", eSalary: 300000 },
// //   { ename: "d", eSalary: 400000 },
// //   { ename: "e", eSalary: 500000 },
// // ];


// // let reduceVal = employee.reduce((acc,c,i,t)=>{
// //  return acc+c.eSalary

// //  //  0 + 1 = 1
// //  //  1 + 2 = 3
// //  //  3 + 3 = 6
// //  //  6 + 4 = 10
// //  //  10 + 5 = 15

// // //  return acc + c.salary = 15 + 0  = 15

// // },0) // 1 // 3 // 6 // 10 // 15

// // console.log(reduceVal);


// // // array higherorder function method

// // // 1.sort()

// // let sortArr = [1,33,55,5,2,3000,7,8]

// // let sortVal1 = sortArr.sort((a,b)=>{
// //  return b-a
// // })

// // console.log(sortVal1);



// // // 2.some() - logical Or

// // let some1 = [1,2,3,4,5]

// // let someVal = some1.some((c,i,t)=>{
// //  return c%2==1

// //  // 1%2==1 = true
// //  // 2%2==1 = false
// //  // 3%2==1 = true
// //  // 4%2==1 = false
// //  // 5%2==1 = true

// // //  true || false || true || false || true = true 
// // })

// // console.log(someVal);



// // // 3.every() - logical And

// // let every1 = [2,2,2,2]

// // let everyVal = every1.every((c,i,t)=>{
// // return i%2==0
// // })

// // console.log(everyVal);

// // console.clear()


// // // string methods 

// // // charAt(),

// // let str = "javascript"
// // let charAtVal = str.charAt(2)
// // console.log(charAtVal);

// // //   charCodeAt(),

// // str = "javascript"

// // let charCodeAtVal = str.charCodeAt(1)

// // console.log(charCodeAtVal);



// // //   length,

// // str = "javascript"

// // let lengthVal = str.length

// // console.log(lengthVal);



// // //   slice,

// // str = "javaDeveloper"

// // let sliceVal1 =  str.slice(4,13)

// // console.log(sliceVal1);





// // //   toUpperCase(),

// // let toUpperCaseVal = str.toUpperCase()

// // console.log(toUpperCaseVal);


// // //   toLowerCase(),

// // let toLowerCaseVal = str.toLowerCase()

// // console.log(toLowerCaseVal);



// // //   trim(),

// // str = " data "

// // let trimVal = str.trim()

// // console.log(trimVal);

// // // trimStart()

// // let startVal = str.trimStart()

// // console.log(startVal);

// // // trimEnd()

// // let endVal = str.trimEnd()

// // console.log(endVal);





// // //   includes(),

// // str = "javascript"

// // let includesVal1 = str.includes("j")

// // console.log(includesVal1);



// // //   split(),

// // let str1 = "iron-man"

// // let splitVal = str1.split("a")

// // console.log(splitVal);




// // //   indexOf(),

// // let str2 = "javascript"

// // let indexOfVal1 = str2.indexOf("a",2)

// // console.log(indexOfVal1);


// // // lastIndexof()

// // let lastIndexOf1 = str2.lastIndexOf("a",2)

// // console.log(lastIndexOf1);



// // //   replace(),

// // let str3 = "python Developer"

// // let replaceVal  = str3.replace("python","java") // "old ","new"

// // console.log(replaceVal);



// // //   startsWith(),

// // let str4 = "javascript"

// // let starts = str4.startsWith("j")

// // console.log(starts);


// // //   endsWith();

// // let ends = str4.endsWith("t")

// // console.log(ends);

// // // repeat()

// // let str5 = "hello"

// // let repeatVal = str5.repeat(5)

// // console.log(repeatVal);


// // console.clear();


// // // // // date

// // let date1  = new Date()

// // console.log(date1);

// // // get

// // // year

// // let getYear = date1.getFullYear()

// // console.log(getYear);

// // // month

// // let month = date1.getMonth()

// // console.log(month);

// // // date

// // let date = date1.getDate()

// // console.log(date);

// // // day

// // let day = date1.getDay()

// // console.log(day);

// // // hour

// // let hour = date1.getHours()

// // console.log(hour);

// // // minutes

// // let minutes = date1.getMinutes()

// // console.log(minutes);

// // // seconds

// // let seconds = date1.getSeconds()

// // console.log(seconds);



// // // set

// // console.clear()

// // let date2 = new Date()

// // console.log(date2);

// // // year

// // date2.setFullYear(2003)

// // console.log(date2);

// // // month

// // date2.setMonth(0)

// // console.log(date2);

// // //date

// // date2.setDate(30)

// // console.log(date2);

// // // hour

// // date2.setHours(5)

// // console.log(date2);

// // // minutes


// // date2.setMinutes(5)

// // console.log(date2);

// // // seconds

// // date2.setSeconds(5)

// // console.log(date2);



// // // locale 

// // // time 

// // let time = date1.toLocaleTimeString()

// // console.log(time);

// // let date11 = date1.toLocaleDateString()

// // console.log(date11);

// // let both = date1.toLocaleString()

// // console.log(both);


// // let year = prompt("enter your year dob :-")
// // let date = prompt("enter your date dob :-");
// // let month = prompt("enter your month dob :-");

// // // logic 

// // let date12 = new Date()

// // date12.setFullYear(year)
// // date12.setDate(date)
// // date12.setMonth(month-1)

// // console.log(date12);

// // let getDay = date12.getDay()

// // console.log(getDay);

// // let week = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

// // alert(week[getDay]);


// // async



// // setTimeout

// // setTimeout(()=>{

// //     let date = new Date()

// //     let time = date.toLocaleTimeString()

// //     console.log(time);
    

// // },5000)

// // // setInterval


// // setInterval(()=>{
// // let date = new Date();

// // let time = date.toLocaleTimeString();

// // console.log(time);
// // },1000)


// function one(){
//     console.log("one");
    
// }

// function two(){
//     console.log("two");
    
// }


// function three(){
//     console.log("three");
    
// }


// one()
// setTimeout(two,1000)
// three()




// // Promise 

// // resolve - successfull data
// // reject  - error data
// // bending - coming data

// // 'https://fakestoreapi.com/products/1

// fetch('https://fakestoreapi.com/products/')
// .then((data)=>{
//     return data.json()
    
// })

// .then((jsData)=>{
//     console.log(jsData);
//    let price = jsData.filter((c,i,t)=>{
//        return c.price < 10
        
//     })

//     console.log(price);
    
    
// })


// .catch((error)=>{

//     console.error(error);
    

// })

// .finally((h)=>{
//  console.log(h);
 
// })

// console.log("hello");

// // promise 

// fetch("https://fakestoreapi.com/products/1")

// .then((data)=>{
    
//     // JSON( ) --> json data converted to js data
//     return data.json()
// })

// .then((jd)=>{

//     console.log(jd);
    

// })

// .catch((error1)=>{
//     console.log(error1.message);
    
// })




// // Dom - Document object model

// // selecting

// // getElementByTagname

// // let tag = document.getElementsByTagName("h1")

// // console.log(tag);

// // // getElementByClassname

// // let class1 = document.getElementsByClassName("one")

// // console.log(class1);

// // // getElementById

// // // let id1 = document.getElementById("two")

// // // console.log(id1);

// // // querySelector

// // let tag = document.querySelector("h1")

// // console.log(tag);

// // let class1 = document.querySelector(".one")

// // console.log(class1);

// // let id1 = document.querySelector("#two")

// // console.log(id1);




// // // querySelectorAll

// // let h5All = document.querySelectorAll("h5")

// // console.log(h5All);




// // traversing

// // parent element

// let child1 = document.querySelector(".child1")

// console.log(child1);
// console.log(child1.parentElement); // parentElement


// // child element

// let parent = document.querySelector(".parent")

// console.log(parent);
// console.log(parent.children);// children
// console.log(parent.firstElementChild);// firstElementChild
// console.log(parent.lastElementChild);// lastElementChild


// // sibling element

// console.log(child1);
// let child2 = (child1.nextElementSibling);// nextElementSibiling
// console.log(child2.previousElementSibling); // previousElementSibiling


// // manipulating


// // input tag inside value if u want manipulate , (value)

// // other tag inside value if u want manipulate, (1. innerText, 2.innerHtml, 3.TextContent)

// let input  = document.querySelector("input")

// input.value = "hello"


// let h1 = document.querySelector("h1")



// // event handler

// // function one1(){
// //     h1.innerText = "hi" 

// // }




// // event listner

// let button = document.querySelector("button")

// button.addEventListener("click",()=>{
//     h1.innerText = "hi"; 
// })

// // create tag

// let li = document.createElement("li")

// li.innerText = "hellojhghgh"

// let ol = document.querySelector("ol")

// // append

// ol.append(li)

// // add css


// let h3 = document.querySelector("h3")

// h3.innerText =  "welcome"

// h3.style.backgroundColor = "green"
// h3.style.border = "20px solid violet"


// // add attributes

// // setAttributes

// let h4 = document.querySelector("h4")

// h4.innerText = "hello"

// h4.setAttribute("class","active")

// // remove

// // remove()

// // eval()

// console.log(eval(10*10+5-78));



// To do Application


let input = document.querySelector("input")
let button = document.querySelector("button")
let ol = document.querySelector("ol")

button.addEventListener("click",()=>{
    let inputVal = input.value

    let li  = document.createElement("li")
    li.setAttribute("class","open")

    li.innerText = inputVal

    ol.append(li)

    li.addEventListener("click",()=>{
        li.remove()
    })

   
    
})



// traversing 

// parent select 


// child select 

let parent = document.querySelector(".parent")

console.log(parent);
console.log(parent.children);// children
console.log(parent.firstElementChild);// firstElementChild
console.log(parent.lastElementChild);// lastElementChild




// sibling select

// nextElementSibling
// PreviousElementSibling

let child1 = document.querySelector(".child1")

console.log(child1.nextElementSibling);

let child2 = document.querySelector(".child2")

console.log(child2.previousElementSibling);













