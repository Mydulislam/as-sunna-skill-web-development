// Javascript Datatypes
/*===================================================
      // There are tw type of datatypes in javascript
      1) Primitive     2) Non-primitive (Object types)
==================================================== */

/*==================================================
    Primitiv Data Tyes
==================================================*/
// 1) String 2) Number 3) Boolean 4) Undefined 5) null

/*==================================================
    Non-Primitiv Data Tyes
==================================================*/
// 1) Object 2) Array 3) Function


/*==================================================
    String Data Tyes
==================================================*/
let str1 = 'Hello, Bangladesh';
console.log(str1) // output: Hello, Bangladesh

let str2 = '5' + 2
console.log(str2) // output: 52

let str3 = "what's your name";
console.log(str3); // output: what's your name

let str4 = 'I live in"Bangladesh"';
console.log(str4); // output: I live in "Bangladesh"

let str5 = "'H2SO4' It is Acid";
console.log(str5); // output: 'H2SO4' It is Acid

/*
Best practices of string literal
*/
let str6 = `I love my country`;
console.log(str6);

let str7 = `${str6}. ${str4}`;
console.log(str7);

/*==================================================
    String Constructor
==================================================*/
//Number convert to string
let str8 = String(12);
console.log(str8); // output: 12. [But it is string]

let str9 = String("This is") // But it is bad practices
console.log(str9);




/*==================================================
   Number Data type
==================================================*/
const number1 = 40;
console.log(number1);
console.log(typeof number1);

const number2 = 30;
const number3 = 25;
const resulSum = number2 + number3;
console.log(resulSum);


//*******************Number Constructor *******************
const number6 = Number(45);
console.log(number6);

//*******************String Convert To  Number *******************
const number7 = Number('45');
console.log(number7); // Result: 45
console.log(typeof number7); // Result : Number

//*******************Number Method parseInt *******************
const number8 = 5.50;
console.log(Number.parseInt(number8)); // Result: 5

//*******************Number Method parseFloat *******************
const number9 = 5;
console.log(Number.parseFloat(number9)); // Result: 5

//*******************Number Tricky Thinks*******************
console.log(Number(true)); // Result: 1
console.log(Number(false)); // Result: 0
console.log(Number("10")); // Result: 10
console.log(Number("  10")); // Result: 10
console.log(Number("10  ")); // Result: 10
console.log(Number(" 10  ")); // Result: 10
console.log(Number("10.33")); // Result: 10.33
console.log(Number("10,33")); // Result: NaN (Not a Number)
console.log(Number("10 33")); // Result: Nan (Not a number)
console.log(Number("John")); // Result: NaN 
console.log(NaN === NaN); // false
console.log("5" * 2); // 10
console.log("5" + 2); // "52"
console.log(NaN + 1); // NaN
console.log(3 * NaN); // NaN
console.log("not a number" / 2 - 1); // NaN
const number4 = 21;
const number5 = "21";
console.log(number4 + number5); // Result : 2121

/*==================================================
   Boolean Data type (true , false)
====================================================*/
let boolean1 = true;
console.log(boolean1) // Result : true;

let boolean2 = false;
console.log(boolean2); // Result: false;

//*******************Boolean Constructor *******************
console.log(10 > 9); // Result: true
console.log(5 < 3); // Result: false

//*******************Boolean Tricky Thinks*******************
console.log(Boolean(100)); // Result: true;
console.log(Boolean(3.14)); // Result: true;
console.log(Boolean(-15));  // Result: true;
console.log(Boolean("Hello")); // Result: true;
console.log(Boolean("false"));  // Result: true;
console.log(Boolean(7+1+3.2)); // Result: true;
console.log(Boolean(0)); // Result: false
console.log(Boolean(-0)); // Result: false
console.log(Boolean("")); // Result: false;
console.log(Boolean(undefined)); //Result: false;
console.log(Boolean(null)); // Result: false;
console.log(Boolean(NaN)); // Result: false;
console.log(Boolean(10 / "Hello")); // Result: false;
console.log(new Boolean(false) == false); // Result: true;
console.log(new Boolean(false) === false); // Result: false
console.log(new Boolean(false) == new Boolean(false)); // Result: false;
console.log(new Boolean(false) === new Boolean(false)); // Result: false;
if ("false" || "0" || "null" || "undefined" || "NaN") {
    console.log("This will be executed"); // "This will be executed"
}
console.log(!"HELLO"); // Result: false
console.log(!!"HELLO"); // Result: true
console.log(!0); // true;
console.log(!!0); // false;
console.log("5" == 5); // Result: true;
console.log("5" === 5); // Result: false;
console.log(false === 0); // Result: True;
let x = 0;
if (x = 5) {
    console.log("I am execute"); // Result: I am execute
}


function sideEffect() {
    console.log("Side effect!");
    return true;
}

console.log(false && sideEffect()); // Result: false
console.log(true || sideEffect());  // Result: true

const value = "hello";
const boolValue = !!value;
console.log(boolValue);

if (false) {
    console.log("This won't be printed");
}

if (0) {
    console.log("This won't be printed");
}

if ("") {
    console.log("This won't be printed");
}

if (null) {
    console.log("This won't be printed");
}

if (undefined) {
    console.log("This won't be printed");
}

if (NaN) {
    console.log("This won't be printed");
}


console.log(1 && 2); // Result: 2
console.log(0 || "hello"); // Result: "hello"

console.log(false ? "true" : "false"); // "false"
console.log('' ? "true" : "false");     // "false"
console.log('0' ? "true" : "false");    // "true"

if ({}) {
    console.log("This is truthy"); // This is truthy
}

if (function() {}) {
    console.log("A function is truthy"); // A function is truthy
}


/*==================================================
   Undefined and null Data types in Javscript
====================================================*/
let variable;
console.log(variable); // undefined

function foo() {}
console.log(foo()); // undefined

let obj = null;
console.log(obj); // null

const obj2 = {};
console.log(obj2.property); // undefined

const obj3 = {
    property: null
};
console.log(obj3.property); // null

console.log(null == undefined); // true
console.log(null === undefined); // false


const valueIs = null;
if (valueIs === null) {
    // Value is null
}

if (valueIs === undefined) {
    // value is undefined
}

if (valueIs == null) {
    // Value Null or Undefined
}

let value1 = null;
if (value1 === null || value1 === undefined) {
    console.log("Value is missing or intentionally absent.");
}
/*=============================================================================
   Object Data types in Javscript
===============================================================================*/
const person = {
    name: "John",
    age: 30,
    occupation: "Developer"
};
console.log(person.name, person['age']); // Result: John 30

//*********Add a property in this object *************
person.gender = "Male";
console.log(person);

//*********Update property in this object *************
person.age = 31;
console.log(person);

//*********delete property in this object *************
delete person.occupation
console.log(person);



//*********Nested object *************
const company = {
    name: "ABC Corp",
    location: {
        city: "New York",
        country: "USA"
    }
};
console.log(company.location.city); // New York


//*********Method in this object *************
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b; // Shorthand method syntax (ES6+)
    }
};
console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6

//*********Object Constructor *************
const person2 = new Object();
person2.name = "Alice";
person2.age = 25;
console.log(person2);


//*********Object Destructuring *************
const car = {
    name:"Bmw",
    price:30000,
    nature: {
        perform: 'Good',
        services: 'Better'
    },
    country: "Bangladesh"
}

const {name, price} = car;
console.log(name); // Result: Bmw
const {nature} = car;
console.log(nature.perform); // Result: Gooda

//*********Creating a New Object Without the Property *************
const { country, ...newCar } = car;
console.log(newCar); 

