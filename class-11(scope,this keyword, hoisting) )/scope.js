/*=======================================================================
    In Javascript are different type of scope
    1) Global Scope
    2) Functions Scope(Local Scope)
    3) Block Scope (ES6)
    4) Module Scope (ES6)
    5) Lexical Scope (static scope)
==========================================================================*/


/*=========================================================================
    Global Scope in javascript More Example
===========================================================================*/

//********* Example 1: Global Scope Variable

var globalVar = "I'm a global variable"; // Declared in global scope

function exampleFunction() {
    console.log(globalVar); // I'm a global variable
}

exampleFunction();
console.log(globalVar); // I'm a global variable



//********* Example 2: Global Scope Variable Conflict

var name = "Alice"; // Global scope variable

function greet() {
    var name = "Bob"; // Function scope variable with the same name
    console.log("Hello, " + name); // Hello, Bob
}

greet();
console.log("Hi, " + name); // Hi, Alice


//********* Example 3: Global Scope from a Nested Function
var outerVar = "I'm in the outer scope";

function outerFunction() {
    console.log(outerVar); // I'm in the outer scope
    innerFunction();

    function innerFunction() {
        console.log(outerVar); // I'm in the outer scope
    }
}

outerFunction();


//********* Example 4: Global Scope within an IIFE (Immediately Invoked Function Expression)

(function () {
    var localVar = "I'm in an IIFE"; // Local to the IIFE, not in the global scope
    console.log(localVar); // Accessible within the IIFE
})();

//console.log(localVar); // Uncaught ReferenceError: localVar is not defined



/***************************** Tricky Concept in Global scope *************************/

// Example 1: Hoisting and Global Scope

console.log(myVar); // Outputs 'undefined'
var myVar = "I'm hoisted!";

function hoistingExample() {
    console.log(myVar); // Outputs 'undefined'
    var myVar = "I'm inside the function";
    console.log(myVar); // Outputs 'I'm inside the function'
}

hoistingExample();
console.log(myVar); // Outputs 'I'm hoisted!'






// Example 2: Global Object (Browser)

console.log(this === window); // Outputs 'true' in a browser context
var globalVar = "I'm a global variable";

function checkGlobalContext() {
    console.log(this === window); // Outputs 'true' in a browser context
    console.log(globalVar); // I'm a global variable
}

checkGlobalContext();
console.log(globalVar); // I'm a global variable






// Example 3: Global Scope and Asynchronous Callbacks

var count = 0;

function incrementCount() {
    count++;
    console.log("Count:", count);
}

setTimeout(incrementCount, 1000); // Executes after 1 second
setTimeout(incrementCount, 2000); // Executes after 2 seconds



/*=========================================================================
    Function Scope / Local Scope in javascript More Example
===========================================================================*/


// Example 1: Variable Visibility within a Function

function exampleFunction() {
    var localVar = "I'm a local variable";
    console.log(localVar); // I'm a local variable
}

exampleFunction();
//   console.log(localVar); // localVar is not defined




// Example 2: Nested Functions and Scoping

function outerFunction() {
    var outerVar = "I'm in the outer function";

    function innerFunction() {
        var innerVar = "I'm in the inner function";
        console.log(outerVar); // Accessible due to lexical scoping
        console.log(innerVar); // Accessible within the inner function
    }

    innerFunction();
    // console.log(innerVar); // This would result in an error since innerVar is not defined here
}

outerFunction();








// Example 3: Function Scope Variable Shadowing


var globalVar = "I'm a global variable";

function exampleFunction() {
    var localVar = "I'm a local variable";
    console.log(globalVar); // Accessible due to higher scope
    console.log(localVar); // Accessible within the function
}

exampleFunction();
console.log(globalVar); // Accessible globally
// console.log(localVar); // This would result in an error since localVar is not defined here






// Example 4: Closures and Function Scope

function outerFunction(outerParam) {
    return function innerFunction(innerParam) {
      console.log("Outer param:", outerParam); // Hello
      console.log("Inner param:", innerParam); // World
    };
  }
  
  // var closure2 = outerFunction("Hello");
  // closure2("World");
  



  /*=========================================================================
    Block Scope (ES6) in javascript More Example
===========================================================================*/

// Example 1: Block Scope in Loops

for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0, 1, 2, 3, 4
  }
  
// console.log(i); // This would result in an error since i is not defined here




// Example 2: Block Scope and Conditional Statements

let condition = true;

if (condition) {
  let blockVar = "I'm in a block";
  console.log(blockVar); // Outputs "I'm in a block"
}

// console.log(blockVar); // This would result in an error since blockVar is not defined here





// Example 3: Block Scope in Functions

function exampleFunction() {
    if (true) {
      let blockVar = "I'm in a block";
      console.log(blockVar); // Outputs "I'm in a block"
    }
  
    // console.log(blockVar); // This would result in an error since blockVar is not defined here
  }
  
  exampleFunction();

  


// Example 4: Block Scope and Functions within Loops

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(i); // Outputs 0, 1, 2 (due to closure preserving the block scope)
    }, 100);
  }



  
/***************************** Tricky Concept in block scope *************************/
  
// Example : 1 
var message1 = "Global";

if (true) {
  var message1 = "Block-scoped";
  console.log(message1); // Outputs "Block-scoped"
}

console.log(message1); // Outputs "Block-scoped"



// Example : 2 
let message = "Global";

if (true) {
  let message = "Block-scoped";
  console.log(message); // Outputs "Block-scoped"
}

console.log(message); // Outputs "Global"


// Example : 3 IIFE and Block Scope
var x = 10;

(function() {
  console.log(x); // Outputs "undefined" (hoisting)
  var x = 20;
})();



// Example : 4 
// let y = 10;

// (() => {
//   console.log(y); // Outputs 10 (block-scoped y)
//   let y = 20;
// })();





/*=========================================================================
    Lexical Scope (Static Scope) in javascript More Example
===========================================================================*/

// 1. Basic Lexical Scope

function outerFunction() {
    const outerVar = "I'm in outer scope";
  
    function innerFunction() {
      console.log(outerVar); // Accesses outerVar from outer scope
    }
  
    innerFunction();
  }
  
  outerFunction();

  
// 2. Nested Lexical Scopes

function outer() {
    const outerVar = "I'm in outer function";
  
    function middle() {
      const middleVar = "I'm in middle function";
  
      function inner() {
        console.log(outerVar, middleVar); // Accesses variables from both outer and middle scopes
      }
  
      inner();
    }
  
    middle();
  }
  
  outer();

  


// 3. Lexical Scope in Arrow Functions

function outer() {
    const outerVar = "I'm in outer function";
  
    const inner = () => {
      console.log(outerVar); // Accesses outerVar from outer scope (lexical scope)
    };
  
    inner();
  }
  
  outer();
  


//   4. Overriding Lexical Scope

function outer() {
    const outerVar = "I'm in outer function";
  
    function inner() {
      const outerVar = "I'm in inner function"; // Overrides the outerVar
  
      console.log(outerVar); // Accesses the inner function's outerVar
    }
  
    inner();
    console.log(outerVar); // Accesses the outer function's outerVar
  }
  
  outer();
  


//   5. Lexical Scope and Closure
function outer() {
    const outerVar = "I'm in outer function";
  
    function inner() {
      console.log(outerVar); // Accesses outerVar from outer scope (closure)
    }
  
    return inner;
  }
  
  const closure1 = outer();
  closure1();
  