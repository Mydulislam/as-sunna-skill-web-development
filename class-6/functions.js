// Functions in javscript
function firstFunctionn (){
    console.log("Oh, Hello. I am Basic functions");
}
firstFunctionn()

// *****************************Add two value using function****************************
function add(){
    let a = 10;
    let b = 20;
    console.log(a + b);
}
add();

//*********************** */ Subtract two value using function****************************
function sub(){
    let a = 10;
    let b = 20;
    console.log(a - b);
}
sub();

// ***********************************add and sub with one function***************************
function addWithSub(a,b){
    let add = a + b ;
    let sub = a - b;
    console.log(add, sub);
}
addWithSub(10,15)

//*****************************Print 'Bangladesh' 10 times with using functions*************************
function myCountry(){
    console.log("Bangladesh");
}
for(let i = 1; i <= 10; i++){
    myCountry()
}

// ******************************* Function arguments with parameter ********************************

//Example : 1
function addWithParam(a, b){
    return a + b;

} 
let z = addWithParam(5,6);
console.log("The addition result is: " + z);

// Example : 2

let first = [5,6,7,8];
let second = [5,6,7,8];
let third = [5,6,7,8];
let sum = 0;
let increas = 1;
function arraySum (arr){
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(increas++ +'st Array' + " Total Sum :" + sum);
}
arraySum(first);
arraySum(second);
arraySum(third);

// ***************************************** Function arguments Methode **********************************
function argument(){
    for(let i=0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}
argument(1,2,3)

// Arguments addition
function addAgruments(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    } 
    console.log(sum);
}
addAgruments(5,6,7)

// ************************************** Function Return Statement *******************************

// Example: 1 Return a statement
function returnSta(){
    return "Hello"
}
let singleReturn = returnSta();
console.log(singleReturn);

// Example: 2 multiple statement return
function returnState(name, email){
    return{
        name,email
    }
}
let returnArgu = returnState('Mydul', 'mydulislam@gmail.com');
console.log(returnArgu);
console.log(returnArgu["name"]);
console.log(returnArgu.email);

// Example: 3 Return add and subtract
function returnWithAddSub(a,b){
    let add = a + b;
    let sub = a - b;
    return {add, sub}
}
let resultadd = returnWithAddSub(5,6);
console.log(resultadd.add , resultadd.sub);

// *********************************************** Function Expression ********************************
let functionExpression = function myFunc(){
    console.log( 5 + 5 + 5);
}
functionExpression();

// Return with Function Expression
let functionExWithReturn = function myExReturn(a,b){
    return a + b;
}
console.log(functionExWithReturn(8,9));

// *********************************************** Inner Function  ********************************

// Example: 1
function motherFunc(a,b){
    function innerFunc(){   // This is inner Function
         console.log(a + b);
    }
    return innerFunc()
}
motherFunc(5,6);

// Example: 2

function somthing (great, name){
    function saySomthing(){
        if(name){
            return name.split(' ')[0]
        }
        else{
            return " "
        }
    }
    let congrates = great + " " + saySomthing()
    console.log(congrates);
}
somthing('Congratulations,' , "MYDUL ISLAM");

// *********************************************** Function Scoping  **********************************
function scope (number){
    function a (){
        return number % 3 == 0;
    }
    function b (){
        return number % 5 == 0;
    }
    if(a() && b()){
        console.log("The number is divisible by 3 and 5");
    }
    else{
        console.log('The number is not divisible by 3 and 5');
    }
}
scope(5);
scope(15);

// *********************************************** Pure Function   **********************************
function squart (n){
    return n * n;
} 
console.log(squart(5));
console.log(squart(5));
console.log(squart(5));

// *********************************************** UnPure Function   **********************************

// Example: 1
let pureValue = 5;
function pureValueChange (){
    pureValue = 200;
    return pureValue;
}
console.log(pureValueChange());

// Example: 2
let pureObject = {
    x : 45,
    y : 40
}

function changePureObject (pureObject){
    pureObject.x = 30;
    pureObject.y = 35;
    console.log(pureObject);
}
changePureObject(pureObject);
console.log(pureObject);

// *********************************************** First Class Function   **********************************

// A function can be stored in a variable
function firstClass1(num1, num2){
    return num1 + num2;
}
let firstClass1Result = firstClass1(5,15);
console.log(firstClass1Result);

// A function can be stored in an array
function storedArrayFunction (a,b){
    return a + b;
}

let arrayValue = [];
arrayValue.push(storedArrayFunction(5,3));
console.log(arrayValue );

// A function can be stored in an object

function storedFunctoIntoObject (a, b){
    return a + b;
}

let objectIntoFunc = {
    addValue : storedFunctoIntoObject
}
console.log(objectIntoFunc.addValue(6,6));
console.log(objectIntoFunc.addValue(7,6));
console.log(objectIntoFunc.addValue(8,6));

// We can created a function when we needed
setTimeout(function(){
    console.log('I come after 3 second');
},3000)

// *********************************************** Higher Order Function   **********************************
function add(a,b){
    return a + b;
}

function higerOderFunction (a,b,agerFunction){
    let x = a + b;
    let y = a - b;
    return function multiply(){
        return x * y * agerFunction(a,b)
    }
    
}
let higher = higerOderFunction(5,6,add);
console.log(higher());

// ******************* Tricky concept of javascript Function   ****************************

// Example 1: Hoisting

hoistedFunction(); // This will work, even though the function is called before it's defined.
function hoistedFunction() {
  console.log("This function was hoisted!");
}




// Example 2: Function Expression
// This will throw an error because function expressions are not hoisted.

//unhoistedFunction(); // Uncommenting this line will result in an error.
var unhoistedFunction = function() {
    console.log("This function was NOT hoisted!");
  };




// Example 3: Arrow Function Behavior
const arrowFunction = () => {
    console.log(this); // Arrow functions don't have their own 'this'.
  };
  arrowFunction(); // 'this' will refer to the outer context.




// Example 4: Function Context
const obj = {
    name: "My Object",
    regularFunction: function() {
      console.log(this.name); // 'this' refers to the object calling the method.
    },
    arrowMethod: () => {
      console.log(this.name); // Arrow functions don't have their own 'this', so it will not work as expected.
    }
  };
  
  obj.regularFunction(); // Outputs: "My Object"
  obj.arrowMethod();     // Outputs: undefined




// Example 5: Arguments Object
function exampleFunction() {
    console.log(arguments); // The 'arguments' object contains all passed arguments.
  }
  exampleFunction(1, "hello", [2, 3]);




// Example 6: Overriding Function
function overriddenFunction() {
    console.log("Original function");
  }
  overriddenFunction(); // Outputs: "Original function"
  
  overriddenFunction = function() {
    console.log("Overridden function");
  };
  overriddenFunction(); // Outputs: "Overridden function"


  // Example: 7 Callback function
  function callbackRegular(callback){
    let data = 'Hi I am Mydul islam';
    callback(data)
  }
  function mm(data){
    console.log(data);
  }
  callbackRegular(mm);



  // Example 8: Callback function
  function fetchData(callback) {
    setTimeout(function() {
      var data = "Fetched data from server";
      callback(data);
    }, 1000);
  }
  
  function displayData(data) {
    console.log(data);
  }
  
  fetchData(displayData); // Output (after 1 second): "Fetched data from server"

// Example: 9 
function createCounter() {
    let count = 0;
  
    function increment() {
      count++;
      console.log(count);
    }
  
    return increment;
  }
  
  const counter = createCounter();
  counter(); // Output: 1
  counter(); // Output: 2
  