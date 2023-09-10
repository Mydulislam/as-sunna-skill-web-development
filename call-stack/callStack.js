/* =============================================
                Recursion:
================================================*/

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const result = factorial(5);
console.log(result); // Outputs 120


/* =============================================
                Recursion: 2 
================================================*/

function x(y){
    if(y < 1){
        return 5;
    }
    var z = x(y-1) + 1;
    console.log(z);
    return z
}

x(3) // output: 6 , 7 , 8




/* =============================================
                Event Loop and Callbacks:
================================================*/

setTimeout(() => {
    console.log('Timeout function');
  }, 1000);
  
  console.log('Main thread execution');
  





/* =============================================
                Promise Chaining:
================================================*/

function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/users');
  }
  
  fetchData()
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  





/* =============================================
                Synchronous Execution:
================================================*/
function func1() {
    console.log('Function 1');
    func2();
  }
  
  function func2() {
    console.log('Function 2');
    func3();
  }
  
  function func3() {
    console.log('Function 3');
  }
  
  func1();
  





  /* =============================================
        Function Calls and the Call Stack:
  ================================================*/
  function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  function sayHello() {
    console.log('Calling greet function...');
    greet('Alice');
    console.log('Function execution complete.');
  }
  
  sayHello();
  





/* =============================================
                Handling Errors:
================================================*/

function throwError() {
    throw new Error('This is an error');
  }
  
  function main() {
    try {
      throwError();
    } catch (error) {
      console.error('Caught an error:', error.message);
    }
  }
  
  main();
  












/* =============================================
                Event Loop and Callbacks:
================================================*/






/* =============================================
                Event Loop and Callbacks:
================================================*/