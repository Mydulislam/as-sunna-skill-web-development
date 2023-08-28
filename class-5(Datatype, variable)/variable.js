// Javascript variable are declare in 3 ways
// var, let, const (let, const - are javascript es6 fearture)
var pi = 3.1416;
var firstName = "Abdur"; // 'firstName' it is camelCase system variable name
var lastName = "Rahim";
var age = 27;

console.log(firstName) // output: Abdur
console.log(pi) // output: 3.1416


/*========================================
// advaced assign value with example
===========================================*/
console.log('My name is '+firstName + lastName + 'My age is' + age) // output: My name is AbdurRahimMy age is27
console.log('My name is ' + firstName + ' '+ lastName + '. ' + 'My age is ' + age +'.') // My name is Abdur Rahim. My age is 27

/*===========================================
     // not assign value it's result 'undefind'
==============================================*/
var firstNumber;
console.log(firstNumber) //ouptput: undefined
/*===================================================================================
    ********* Please not use 'var' keyowrd. it is problem with 'hoisting' system
    always use 'let' or 'const' *******
=======================================================================================*/

let a = 50;
let b = 50;
console.log(a+b); // output: 100


const num1 = 30;
const num2 = 20;
console.log(num1 + num2) // output: 50

/*===================================================
     // *************** Tricky variable ************
==============================================******/

let trickyVariable1 = '5' + 2 + 3;
console.log(trickyVariable1) //output: 523

let trickyVariable2 = 5 + 2 + '5';
console.log(trickyVariable2) // output: 75

let trickyVariable3 = '5' + '5';
console.log(trickyVariable3) // output: 55

console.log(aVar); //output: undefined
console.log(aLet); // output: Uncaught ReferenceError: Cannot access 'aLet' before initialization
var aVar;
let aLet;

let userName = bangladesh;
console.log(userName) // Uncaught ReferenceError: bangladesh is not defined
let correctUserName = "bangladesh"; // This is correct define variable

var x = 30;
console.log(x*10); // output : 300

var x = '10';
var y = x = 20;
console.log(x + y); // ouput: 40
