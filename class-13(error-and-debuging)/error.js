/* ========================================================================
    There are different types of error in javascript

    1) Syntax Errors
    2) Refference Errors
    3) Type Errors
    4) Range Errors
    5) Custom Errors
    6) Network Errors
    7) Promise Errors
============================================================================*/


/* ================================================================
                    Syntax Errors Example
===================================================================*/

// Example: 1 Missing Semicolon:

let x = 5
let y = 10; // Missing semicolon at the end of the previous line





// Example: 2 Missing Closing Parenthesis:

console.log("Hello, World"; // Missing closing parenthesis




// Example: 3 Mismatched Brackets:

if (x > 5 {
    console.log("x is greater than 5");
}


// Example: 4 Missing Quotation Marks:

let message = 'Hello, World; // Missing closing single quotation mark



// Example: 5 Using Reserved Keywords:

let let = 10; // "let" is a reserved keyword and cannot be used as a variable name



// Example: 6 Unmatched Curly Braces:

function multiply(x, y {
    return x * y;
}



// Example: 7 Missing Colons in Object Literal:

let person = {
    name "John", // Missing colon
    age: 30
};



// Example: 8 Incorrect Function Declaration:

function addNumbers(x, y)
{
    return x + y;
}



// Example: 9 Incorrect Array Declaration:

let colors = [red, green, blue]; // Array elements should be strings or variables



// Example: 10 Extra Commas in Object Literal:

let person = {
    name: 'Alice',
    age: 25,
    country: 'USA', // Extra comma
};



// Example: 11 Unescaped Special Characters in Strings:

let message = "This is a syntax error \";
// SyntaxError: Unexpected token '\'





/* ================================================================
                    Refference Errors Example
===================================================================*/

// Example: 1 Accessing an Undeclared Variable:

console.log(nonExistentVar); // ReferenceError: nonExistentVar is not defined


// Example: 2 Misspelled Variable Name:

let myVariable = 42;
console.log(myvarible); // ReferenceError: myvarible is not defined



// Example: 3 Accessing a Variable Outside Its Scope:

function outerFunction() {
    let localVar = 'I am local';
}

console.log(localVar); // ReferenceError: localVar is not defined



// Example: 4 Using let or const Before Declaration:

console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 42;


// Example: 5 Attempting to Access Properties of undefined:

let obj;
console.log(obj.property); // ReferenceError: Cannot access 'property' of undefined



// Example: 6 Accessing Nonexistent Object Properties:

let person = {
    name: 'Alice',
    age: 30
};

console.log(person.job); // ReferenceError: job is not defined




// Example: 7 Using an Undeclared Function:

myFuntion(); // ReferenceError: myFuntion is not defined

function myFunction() {
    console.log('Hello, world!');
}




// Example: 8  Accidentally Reassigning undefined:

let undefined = 'I am defined now';
console.log(undefined); // ReferenceError: undefined is not defined





/* ================================================================
                    Type Errors Example
===================================================================*/


// Example: 1 Calling a Non-Function as a Function:

let x = 42;
x(); // TypeError: x is not a function




// Example: 2 Attempting to Use a Property or Method on a Primitive Value:

let message = 'Hello, world!';
message.toUppercase(); // TypeError: message.toUppercase is not a function




// Example: 3 Performing Operations on Incompatible Data Types:

let num = 42;
let str = '10';
let result = num + str; // result will be '4210', not 52



// Example: 4 Using an Uninitialized Variable:

let uninitializedVar;
console.log(uninitializedVar.toUpperCase()); // TypeError: Cannot read property 'toUpperCase' of undefined




// Example: 5 Attempting to Access Properties on null:

let obj = null;
console.log(obj.property); // TypeError: Cannot read property 'property' of null




// Example: 6 Performing Arithmetic Operations with Non-Numeric Values:

let result = '5' - '2'; // result will be 3




// Example: 7 Using NaN in Mathematical Calculations:

let a = 10;
let b = 'apple';
let result = a * b; // result will be NaN





// Example: 8 Using an Undefined Variable in Calculations:

let undefinedVar;
let result = 10 + undefinedVar; // result will be NaN




//  Example: 9 Incorrect Data Type with Array Methods:
let arr = [1, 2, 3];
let sum = arr.reduce((acc, curr) => acc + curr, '0'); // sum will be '0123'



/* ================================================================
                    Rang Errors Example
===================================================================*/

// Example: 1 Array Index Out of Bounds:

let myArray = [1, 2, 3];
console.log(myArray[5]); // undefined


// Example: 2 Negative Array Index:

let myArray = [1, 2, 3];
console.log(myArray[-1]); // undefined



// Example: 3 Invalid String.prototype.charAt() Index:

let myString = 'Hello, world!';
console.log(myString.charAt(15)); // ''



// Example: 4 Invalid String.prototype.substring() Arguments:

let myString = 'Hello, world!';
console.log(myString.substring(8, 15)); // 'world!'
console.log(myString.substring(15, 8)); // 'world!'



// Example: 5 Invalid Array.prototype.slice() Arguments:

let myArray = [1, 2, 3, 4, 5];
console.log(myArray.slice(2, 10)); // [3, 4, 5]



// Example: 6 RangeError with Recursive Function:

function recursiveFunction(n) {
    if (n <= 0) {
        throw new RangeError('Value must be greater than 0');
    }
    recursiveFunction(n - 1);
}

recursiveFunction(0); // RangeError: Value must be greater than 0



// Example: 7 Division by 0n

const a = 1n;
const b = 0n;
const quotient = a / b;   // RangeError: BigInt division by zero


// Example: 8 invalid array length

new Array(Math.pow(2, 40));
new Array(-1);
new ArrayBuffer(Math.pow(2, 32)); // 32-bit system
new ArrayBuffer(-1);

const a = [];
a.length = a.length - 1; // set the length property to -1

const b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1; // set the length property to 2^32
b.length = 2.5; // set the length property to a floating-point number

const c = new Array(2.5); // pass a floating-point number


// Example: 9 precision is out of range
(77.1234).toExponential(-1); // RangeError
(77.1234).toExponential(101); // RangeError

(2.34).toFixed(-100); // RangeError
(2.34).toFixed(1001); // RangeError

(1234.5).toPrecision(-1); // RangeError
(1234.5).toPrecision(101); // RangeError





/* ================================================================
                    Custom Errors Example
===================================================================*/

// Examples: 1 Custom Error for Validation:

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

function validateEmail(email) {
    if (!email.includes('@')) {
        throw new ValidationError('Invalid email address');
    }
}

try {
    validateEmail('example.com');
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(error.message);
    } else {
        throw error;
    }
}





// Example : 2 Custom Error with Additional Information:

class DatabaseError extends Error {
    constructor(query, message) {
        super(`Error executing query: ${query}. ${message}`);
        this.name = 'DatabaseError';
        this.query = query;
    }
}

function executeQuery(query) {
    try {
        // Database query logic
        throw new Error('Database connection failed');
    } catch (error) {
        throw new DatabaseError(query, error.message);
    }
}

try {
    executeQuery('SELECT * FROM users');
} catch (error) {
    if (error instanceof DatabaseError) {
        console.error(`${error.name}: ${error.message}`);
        console.error(`Query: ${error.query}`);
    } else {
        throw error;
    }
}





// Example: 3 Custom Error with User-Friendly Message:

class PermissionDeniedError extends Error {
    constructor() {
        super('Permission denied');
        this.name = 'PermissionDeniedError';
    }
}

function checkPermission(user) {
    if (!user.isAdmin) {
        throw new PermissionDeniedError();
    }
}

try {
    const user = { isAdmin: false };
    checkPermission(user);
} catch (error) {
    if (error instanceof PermissionDeniedError) {
        console.error('You do not have permission to perform this action.');
    } else {
        throw error;
    }
}





// Example: 4 Custom Error with Error Codes:


class APIError extends Error {
    constructor(code, message) {
        super(message);
        this.name = 'APIError';
        this.code = code;
    }
}

function fetchData() {
    try {
        // Fetch data from API
        throw new APIError(404, 'Resource not found');
    } catch (error) {
        throw error;
    }
}

try {
    fetchData();
} catch (error) {
    if (error instanceof APIError) {
        console.error(`Error ${error.code}: ${error.message}`);
    } else {
        throw error;
    }
}




/* ================================================================
                    Network Errors Example
===================================================================*/


// Example: 1 Failed HTTP Request:

fetch('https://example.com/api/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP request failed');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Network error:', error.message);
    });





// Example: 2 CORS (Cross-Origin Resource Sharing) Error:

fetch('https://api.anotherdomain.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('CORS error:', error.message);
    });






// Example: 3  Timeout Error:


const timeout = 5000; // 5 seconds
fetch('https://example.com/api/data', { timeout })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Timeout error:', error.message);
    });



// Example: 4 Network Connection Error:

fetch('https://example.com/api/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Network connection error:', error.message);
    });




// Example: 5 Invalid URL Error:

fetch('invalid-url')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Invalid URL error:', error.message);
    });



// Example: 6 Aborted Request Error:

const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => {
    controller.abort();
}, 2000);

fetch('https://example.com/api/data', { signal })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        if (error.name === 'AbortError') {
            console.error('Request aborted:', error.message);
        } else {
            console.error('Network error:', error.message);
        }
    });





/* ================================================================
                    Promise Errors Example
===================================================================*/

// Example: 1 Rejected Promise:

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Promise rejected'));
    }, 1000);
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Promise error:', error.message);
    });




// Example: 2 Unresolved Promise:

const unresolvedPromise = new Promise((resolve, reject) => {});

unresolvedPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Promise error:', error.message);
    });



// Example: 3 Unhandled Promise Rejection:

const unhandledPromise = Promise.reject(new Error('Unhandled rejection'));

// This will result in an "UnhandledPromiseRejectionWarning" in some environments




// Example: 4 Chaining Promises with an Invalid .then():

const promise = Promise.resolve('Resolved value');

promise
    .then()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Promise error:', error.message);
    });
