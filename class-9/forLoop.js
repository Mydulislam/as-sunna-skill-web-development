/*=============================================================
    For Loop Practices
===============================================================*/
//Example: 1 Basic Usage
for (let i = 0; i <= 20; i++) {
    console.log(i); // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i); // 2 4 6 8 10 12 14 16 18 20
}

for (let i = 1; i <= 20; i += 2) {
    console.log(i);  // 1 3 5 7 9 11 13 15 17 19
}

for (let i = 15; i >= 0; i--) {
    console.log(i); // 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0
}

// Example: 2 Summing number from 1 to 15
let sum1 = 0;
for (let i = 1; i <= 15; i++) {
    sum1 = sum1 + i
}
console.log(sum1);


/*===========================================================================
        For loop in Conditions
=============================================================================*/
//Example: 1

for (let i = 10; i >= 0; i--) {
    if (i == 0) {
        console.log('Blast Off');
    }
    else {
        console.log(i);
    }
}

// Example: 2 ODD or EVEN Number

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " is EVEN");
    }
    else {
        console.log(i + " ODD")
    }
}




// Example: 3 Categorizing Grades
let grades = [80, 40, 70, 90, 50];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 90) {
        console.log("A+");
    }
    else if (grades[i] >= 50) {
        console.log("A");
    }
    else if (grades[i] >= 40) {
        console.log("A-");
    }
    else if (grades[i] >= 33) {
        console.log("PASS")
    }
    else {
        console.log("F");
    }
}


// Example: 4 Checking Prime Numbers
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

for (let i = 1; i <= 20; i++) {
    if (isPrime(i)) {
        console.log(i + " is prime");
    } else {
        console.log(i + " is not prime");
    }
}

// sample 2 prime number
function isPrime(n) {
    // Corner case
    if (n <= 1) {
        return false;
    }


    // Check from 2 to n-1
    for (let i = 2; i < n; i++)
        if (n % i == 0) {
            return false;
        }
    return true;
}

// Driver Code
isPrime(2) ? console.log("true") : console.log("false");



// Example: 5  Fizz Buzz Problem

let emptyArray = [];
let z = 0;
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        emptyArray[z++] = "FizzBuzz";
    }
    else if (i % 3 == 0) {
        emptyArray[z++] = "Fizz"
    }
    else if (i % 5 === 0) {
        emptyArray[z++] = "Buzz";
    }
    else {
        emptyArray[z++] = String(i);
    }
}
console.log(emptyArray);

// Example: 5 Counting Specific Characters
const sentence = "Hello, how are you doing today?";
const targetChar = "o";
let charCount = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === targetChar) {
        charCount++;
    }
}

console.log(`The character '${targetChar}' appears ${charCount} times.`);


/*===========================================================================
        For loop in Array
=============================================================================*/
// Example: 1 Summing Array Elements

let array1 = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let i = 0; i < array1.length; i++) {
    sum2 = array1[i] + sum2;
}
console.log(sum2);




// Example: 2 Finding the Maximum Value
let array2 = [4, 5, 8, 2, 9, 6];
let max = 0;
for (let i = 0; i < array2.length; i++) {
    if (array2[i] > max) {
        max = array2[i]
    }
}
console.log(max);



// Example: 3 Counting Specific Items
const fruits = ["apple", "banana", "orange", "apple", "kiwi"];
const targetFruit = "apple";
let targetFruitCount = 0;
for (let i = 0; i <= fruits.length; i++) {
    if (fruits[i] === targetFruit) {
        targetFruitCount++
    }
}
console.log(`Number of ${targetFruit}s:`, targetFruitCount);



// Example: 4 Modifying Array Elements
let originalArray = [2, 4, 6, 8, 10];
let modifyElement = 3;

for (let i = 0; i < originalArray.length; i++) {
    originalArray[i] *= modifyElement;
}
console.log(originalArray);



// Example: 5 Filtering Array Elements
const ages = [22, 35, 15, 42, 18, 27];
const targetAges = 21;
const eligibleAges = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > targetAges) {
        eligibleAges.push(ages[i])
    }
}
console.log(eligibleAges);


// Example 6: Filtering Even Numbers
const numbers = [12, 7, 8, 25, 16, 11];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log("Even numbers:", evenNumbers);


// Example 7: Modifying Array Elements
const names = ["Alice", "Bob", "Charlie", "David"];
const prefix = "Hello, ";

for (let i = 0; i < names.length; i++) {
    names[i] = prefix + names[i];
}

console.log(names);


/*===========================================================================
        For loop in Object
=============================================================================*/

// EXAMPLE 1:  Iterating through Object Properties
const personInfo1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Engineer"
};

for (let key in personInfo1) {
    console.log(key + ": " + personInfo1[key]);
}




// EXAMPLE 2: Counting Object Properties

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Blue"
};

let propertyCount = 0
for (let key in car) {
    propertyCount++
}
console.log(propertyCount);


// Example 3: Finding Specific Values in an Object

const studentGrades = {
    Alice: 85,
    Bob: 72,
    Charlie: 95,
    David: 68
};

const passingGrades = [];

for (let key in studentGrades) {
    if (studentGrades[key] > 70) {
        passingGrades.push(studentGrades[key])
    }
}
console.log(passingGrades);


// Example 4: Modifying Object Properties

const product = {
    name: "Laptop",
    price: 800,
    discount: 0.1
};

for (let key in product) {
    if (key === 'price') {
        product[key] = product[key] - product[key] * product.discount
    }
}
console.log("Discounted price:", product.price);
console.log(product);




// Example 5: Copying Object Properties
const source = {
    a: 1,
    b: 2,
    c: 3
};

const copySourceProperty = {}
for (let key in source) {
    copySourceProperty[key] = source[key]
}
console.log(copySourceProperty);



// EXAMPLE: 6 Calculating Total Value in an Object
const cart = {
    apple: 0.5,
    banana: 0.25,
    orange: 0.3
};

let total = 0;

for (let key in cart) {
    total += cart[key];
}

console.log("Total value:", total.toFixed(2));


// EXAMPLE: 7  Checking for a Specific Property

const student = {
    name: "Bob",
    age: 21,
    major: "Computer Science"
};

const searchProperty = "age";

if (searchProperty in student) {
    console.log(`Student has the property '${searchProperty}'.`);
} else {
    console.log(`Student does not have the property '${searchProperty}'.`);
}


// EXAMPLE 8: Filtering Object Properties

const product2 = {
    name: "Laptop",
    brand: "Dell",
    price: 800,
    category: "Electronics"
};

const allowedProperties = ["name", "price"];

for (let key in product2) {
    if (allowedProperties.includes(key)) {
        console.log(`${key}: ${product[key]}`);
    }
}
console.log(allowedProperties);


/*===========================================================================
        For loop in Functions
=============================================================================*/

// Example 1: Repeating a Function Call:
function greet(name) {
    console.log("Hello, " + name + "!");
}

for (let i = 0; i < 3; i++) {
    greet("Alice");
}


// Example 2: Creating an Array Using a Function

function randomNumber() {
    return Math.floor(Math.random() * 100)
}

let randomElement = [];

for (let i = 0; i < 5; i++) {
    randomElement.push(randomNumber())
}
console.log(randomElement);





// Example 3: Function for Summing Array Elements:

function arrayOfSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log(sum);
}
let array = [1, 2, 3, 4, 5];
arrayOfSum(array);


// Example 4: Using a Function to Calculate Factorials

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1
    }
    return num * factorial(num - 1);
}

for (let i = 1; i <= 5; i++) {
    console.log(`Factorial of ${i} is ${factorial(i)}`);
}


// Example 5: Function for Displaying Countdown
function countdown(seconds) {
    for (let i = seconds; i >= 0; i--) {
        if (i === 0) {
            console.log("Blast off!");
        } else {
            console.log(i);
        }
    }
}

countdown(5);



// Example 6: Generating Repeated Characters
function repeatCharacter(character, times) {
    let result = "";
    for (let i = 0; i < times; i++) {
        result += character;
    }
    return result;
}

const repeatedAsterisks = repeatCharacter("*", 5);
console.log(repeatedAsterisks); // Outputs: *****




// Example 7: Summing Function Arguments
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

const result = sum(10, 20, 30, 40);
console.log("Sum:", result); // Outputs: 100



// Example 8: Checking Prime Numbers Using a Function
function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

const primeCheckResult = isPrime(17);
console.log("Is 17 prime?", primeCheckResult); // Outputs: true


// Example 9: Custom Map Function Using a Function
function customMap(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

const number = [1, 2, 3, 4, 5];
const squaredNumbers = customMap(number, num => num * num);
console.log("Squared numbers:", squaredNumbers); // Outputs: [1, 4, 9, 16, 25]



/*===========================================================================
        For loop in Array of Object
=============================================================================*/

// Example 1: Displaying Array of Object Properties
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "1984", author: "George Orwell" }
];

for (let i = 0; i < books.length; i++) {
    console.log(`Title: ${books[i].title}, Author: ${books[i].author}`);
}


// Example 2: Calculating Average Scores
const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 },
    { name: "David", score: 65 }
];

let totalScore = 0;
for (let i = 0; i < students.length; i++) {
    totalScore += students[i].score;
}

const averageScore = totalScore / students.length;
console.log("Average score:", averageScore);



// Example 3: Filtering Objects Based on a Condition:

const products = [
    { name: "Laptop", price: 800 },
    { name: "Smartphone", price: 600 },
    { name: "Tablet", price: 350 },
    { name: "Headphones", price: 100 }
];

const affordableProducts = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].price <= 500) {
        affordableProducts.push(products[i]);
    }
}

console.log("Affordable products:", affordableProducts);


// Example 4: Adding a Discount to Prices

const items = [
    { name: "Shirt", price: 25 },
    { name: "Jeans", price: 50 },
    { name: "Shoes", price: 80 }
];

const discountPercentage = 20;
for (let i = 0; i < items.length; i++) {
    items[i].discountedPrice = items[i].price * (1 - discountPercentage / 100);
}

console.log("Items with discounted prices:", items);



// Example 5: Grouping Objects by a Property

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 28 }
];

const ageGroups = {};
for (let i = 0; i < people.length; i++) {
    const age = people[i].age;
    if (!ageGroups[age]) {
        ageGroups[age] = [];
    }
    ageGroups[age].push(people[i]);
}

console.log("People grouped by age:", ageGroups);


/*===========================================================================
      For loop in Tricky Concept
=============================================================================*/

// Example 1 : Loop Closure and let
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // Prints 0, 1, 2 (not 3, 3, 3)
    }, 1000);
}


// 

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i); // Prints 3, 3, 3
  }, 0);
}


// EXAMPLE 2 : Loop Control Statements in Nested Loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) {
            continue;
        }
        console.log(i, j);
    }
}

/* OUTPUT: 
0 0
0 2
1 0
1 2
2 0
2 2
*/


// EXAMPLE 3: Modifying Array During Iteration

const array3 = [1, 2, 3, 4, 5];
for (let i = 0; i < array3.length; i++) {
  if (array3[i] === 2) {
    array3.splice(i, 1);
  }
}
console.log(array3); // [1, 3, 4, 5]


// EXAMPLE 4 : Loop with Delay in Loops
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i); // Prints 0,1,2
    }, 1000);
  }
  
  // Using async/await
  async function delayedLoop() {
    for (let i = 0; i < 3; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(i); // Prints 0, 1, 2
    }
  }
  
  delayedLoop();



  // EXAMPLE 5: Loop Labels:
  outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i === 2 && j === 2) {
        break outerLoop;
      }
      console.log(`i: ${i}, j: ${j}`);
    }
  }
/* 
i: 1, j: 1
i: 1, j: 2
i: 1, j: 3
i: 2, j: 1

*/  

/*=============================================================================
         A simple project using for loop in javascript
================================================================================*/

// Project : 1

// const tableOutput = document.getElementById("tableOutput");

// const minNumber = parseInt(prompt("Enter the minimum number:"));
// const maxNumber = parseInt(prompt("Enter the maximum number:"));

// // Validate the input
// if (isNaN(minNumber) || isNaN(maxNumber)) {
//   tableOutput.textContent = "Invalid input. Please enter valid numbers.";
// } else {
//   let tableHTML = `<h2>Multiplication table for ${minNumber} to ${maxNumber}:</h2><ul>`;

//   // Generate the multiplication table
//   for (let i = minNumber; i <= maxNumber; i++) {
//     tableHTML += `<li><strong>Namota is : ${i}:</strong><ul>`;
//     for (let j = 1; j <= 10; j++) {
//       tableHTML += `<li>${i} * ${j} = ${i * j}</li>`;
//     }
//     tableHTML += `</ul></li>`;
//   }

//   tableHTML += `</ul>`;
//   tableOutput.innerHTML = tableHTML;
// }


// Project: 2 simple counter project using for loop
// ************************************************
const numberDisplay = document.getElementById("numberDisplay");
const incrementButton = document.getElementById("incrementButton");

let currentNumber = 0;

incrementButton.addEventListener("click", () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      currentNumber++;
      numberDisplay.textContent = currentNumber;
    }, i * 500);
  }
});



