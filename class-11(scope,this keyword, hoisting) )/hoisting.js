/*=======================================================================
Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during compilation.
==========================================================================*/

/* =========================================================
                1. Variable Hoisting:
=============================================================*/
console.log(var1); // Outputs 'undefined'
var var1 = "I'm hoisted!";
console.log(var1); // Outputs "I'm hoisted!"



/* =========================================================
                2. Function Hoisting::
=============================================================*/
sayHello(); // Outputs "Hello!"

function sayHello() {
    console.log("Hello!");
}


/* =========================================================
                3. Function Expression Hoisting
=============================================================*/
// sayHi(); // Throws an error: sayHi is not a function

var sayHi = function() {
  console.log("Hi!");
};



/* =========================================================
                4. Block Scope and Hoisting
=============================================================*/


console.log(xy); // Outputs 'undefined'
if (true) {
  var xy = 5;
}
console.log(xy); // Outputs 5




/* =========================================================
                5. Hoisting with Function Expressions
=============================================================*/

var double = function(num) {
    return num * 2;
};

console.log(double(5)); // Outputs 10

var triple = function(num) {
    return num * 3;
};

console.log(triple(5)); // Outputs 15

/* =========================================================
                6. Hoisting and Variable Shadowing
=============================================================*/

var yourMessage = "Global";

function printMessage() {
  console.log(yourMessage); // Outputs "undefined"
  var yourMessage = "Local";
  console.log(yourMessage); // Outputs "Local"
}

printMessage();
