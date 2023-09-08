/* ===========================================================================
    There are different types of Array Iteration method in javascript
    
    1) map()
    2) filter()
    3) find()
    4) forEach()
    5) reduce()
    6) some()
    7) every()
===============================================================================*/


/*========================================================
        map() more example
===========================================================*/

// Example: Doubling Array Elements:

const originalArray = [1, 2, 3, 4, 5];
const doubledArray = originalArray.map((element) => element * 2);
console.log(doubledArray); // [2, 4, 6, 8, 10]





// Example: 2 Converting String to Uppercase:

const words = ['hello', 'world'];
const uppercaseWords = words.map((word) => word.toUpperCase());
console.log(uppercaseWords); // ['HELLO', 'WORLD']



// Example: 3 Extracting Values from an Array of Objects:

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
  ];
  const names = people.map((person) => person.name);
  console.log(names); // ['Alice', 'Bob', 'Charlie']

  



// Example: 4 Calculating Square Roots:

const numbers = [4, 9, 16, 25];
const squareRoots = numbers.map((number) => Math.sqrt(number));
console.log(squareRoots); // [2, 3, 4, 5]




// Example: 5  Generating HTML Elements:

const colors = ['red', 'green', 'blue'];
const colorElements = colors.map((color) => `<div style="background-color: ${color};"></div>`);
console.log(colorElements);
// ['<div style="background-color: red;"></div>', '<div style="background-color: green;"></div>', '<div style="background-color: blue;"></div>']



// Example: 6  Mapping to a Different Data Type:

const numbers1 = ['1', '2', '3'];
const parsedNumbers = numbers1.map((str) => parseInt(str));
console.log(parsedNumbers); // [1, 2, 3]




// Example: 7 Removing Duplicates from an Array:

const numbers2 = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers2.map((number, index, array) => array.indexOf(number) === index && number);
console.log(uniqueNumbers); // [1, 2, 3, 4, 5]




// Example: 8 Appending Index to Each Element:

const fruits = ['apple', 'banana', 'cherry'];
const fruitsWithIndex = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
console.log(fruitsWithIndex); // ['1. apple', '2. banana', '3. cherry']




// Example: 9 Using an External Function:

function addOne(number) {
    return number + 1;
  }
  
  const numbers3 = [1, 2, 3, 4, 5];
  const incrementedNumbers = numbers3.map(addOne);
  console.log(incrementedNumbers); // [2, 3, 4, 5, 6]
  


// Example: 10 Working with Arrays of Objects:

const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 },
  ];
  
  const discountedPrices = products.map((product) => ({
    ...product,
    discountedPrice: product.price * 0.9,
  }));
  console.log(discountedPrices);
  /* [
     { name: 'Laptop', price: 1000, discountedPrice: 900 },
     { name: 'Phone', price: 500, discountedPrice: 450 },
     { name: 'Tablet', price: 300, discountedPrice: 270 }
  ] */

  

// Example: 11 Truncate Long Text:

const textArray = ['Lorem ipsum dolor sit amet.', 'Consectetur adipiscing elit.', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'];
const truncatedText = textArray.map((text) => text.slice(0, 20));
console.log(truncatedText);
/* Output:
[
  'Lorem ipsum dolor s',
  'Consectetur adipiscin',
  'Sed do eiusmod tempor'
]
*/



/*========================================================
        filter() more example
===========================================================*/

// Example: 1 Filtering Even Numbers:

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers4.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]



// Example: 2 Filtering Words by Length:

const words1 = ['apple', 'banana', 'cherry', 'date', 'fig'];
const shortWords = words1.filter((word) => word.length < 6);
console.log(shortWords); // Output: ['apple', 'date', 'fig']



// Example: 3 Filtering Objects by Property Value:

const products1 = [
    { name: 'Laptop', price: 800 },
    { name: 'Phone', price: 400 },
    { name: 'Tablet', price: 300 },
    { name: 'Headphones', price: 100 },
  ];
  const affordableProducts = products1.filter((product) => product.price < 500);
  console.log(affordableProducts);
  /* Output:
  [
    { name: 'Phone', price: 400 },
    { name: 'Tablet', price: 300 },
    { name: 'Headphones', price: 100 }
  ]
  */
  


// Example: 4  Filtering Unique Values from an Array:

const numbers5 = [1, 2, 2, 3, 4, 4, 5, 5];
const uniqueNumbers1 = numbers5.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueNumbers1); // Output: [1, 2, 3, 4, 5]



// Example: 5 Filtering Dates in the Future:

const events = [
    { name: 'Party', date: '2023-12-31' },
    { name: 'Conference', date: '2023-09-15' },
    { name: 'Meeting', date: '2022-05-20' },
  ];
  const futureEvents = events.filter((event) => new Date(event.date) > new Date());
  console.log(futureEvents);
  /* Output:
  [
    { name: 'Party', date: '2023-12-31' },
    { name: 'Conference', date: '2023-09-15' }
  ]
  */

  

// Example: 6 Filtering Falsy Values from an Array:

const values = [0, '', false, 1, 'hello', true];
const truthyValues = values.filter(Boolean);
console.log(truthyValues); // Output: [1, 'hello', true]



// Example: 7 Filtering Elements Containing a Specific Substring:

const words2 = ['apple', 'banana', 'cherry', 'date', 'fig'];
const containsLetterA = words2.filter((word) => word.includes('a'));
console.log(containsLetterA); // Output: ['apple', 'banana', 'date']







/*========================================================
        find() more example
===========================================================*/

// Example: 1 Find the first even number in an array:

const numbers6 = [1, 3, 5, 6, 9, 10, 12];
const firstEven = numbers6.find(number => number % 2 === 0);
console.log(firstEven); // Output: 6


// Example: 2  Find the first person with a specific age in an array of objects:

const people1 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 },
];

const targetAge = 35;
const person = people1.find(person => person.age === targetAge);
console.log(person); // Output: { name: 'Charlie', age: 35 }



// Example: 3 Find the first element that starts with a specific letter in an array of strings:

const fruits1 = ['apple', 'banana', 'cherry', 'date', 'grape'];
const startsWithC = fruits1.find(fruit => fruit.startsWith('c'));
console.log(startsWithC); // Output: 'cherry'



// Example: 4 Find the first element greater than a specific value in an array:

const scores = [72, 85, 94, 60, 78, 90];
const passingScore = 80;
const firstPassingScore = scores.find(score => score >= passingScore);
console.log(firstPassingScore); // Output: 85





// Example: 5 Find the first element in an array based on a custom condition:

const products2 = [
  { name: 'Laptop', price: 800 },
  { name: 'Smartphone', price: 500 },
  { name: 'Tablet', price: 300 },
];

const affordableProduct = products2.find(product => product.price < 600);
console.log(affordableProduct); // Output: { name: 'Smartphone', price: 500 }





// Example: 6 Handling the case when no matching element is found:

const numbers7 = [1, 3, 5, 7, 9];
const evenNumber = numbers7.find(num => num % 2 === 0);
if (evenNumber !== undefined) {
  console.log(evenNumber);
} else {
  console.log('No even numbers found.');
}




// Example: 7 Finding an element in an array of numbers greater than a specific value:


const numbers8 = [10, 20, 30, 40, 50];
const threshold = 25;

const result = numbers8.find(function (number) {
  return number > threshold;
});

console.log(result); // Output: 30






// Example: 8 Finding an object in an array based on a property value:

const persons1 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
];

const targetName = 'Bob';

const person2 = persons1.find(function (p) {
  return p.name === targetName;
});

console.log(person2); // Output: { name: 'Bob', age: 30 }






/*========================================================
        forEach() more example
===========================================================*/

// Example: 1 Iterating over an array of numbers and logging each element:

const numbers9 = [1, 2, 3, 4, 5];

numbers9.forEach(function (number) {
  console.log(number);
});





// Example: 2 Modifying the elements of an array in-place:

const numbers10 = [1, 2, 3, 4, 5];

numbers10.forEach(function (number, index, array) {
  array[index] = number * 2;
});

console.log(numbers); // Output: [2, 4, 6, 8, 10]





// Example: 3 Using an arrow function for a more concise syntax:

const fruits2 = ['apple', 'banana', 'cherry'];

fruits2.forEach((fruit) => {
  console.log(fruit);
});






// Example: 4 Calculating the sum of all elements in an array:

const numbers11 = [10, 20, 30, 40, 50];
let sum = 0;

numbers11.forEach(function (number) {
  sum += number;
});

console.log(sum); // Output: 150





// Example: 5 Filtering out even numbers and creating a new array:

const numbers12 = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers1 = [];

numbers12.forEach(function (number) {
  if (number % 2 === 0) {
    evenNumbers1.push(number);
  }
});

console.log(evenNumbers1); // Output: [2, 4, 6, 8]






// Example: 6 Iterating over an array of objects and accessing object properties:

const persons = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
];

persons.forEach(function (person) {
  console.log(`${person.name} is ${person.age} years old.`);
});



// Example: 7 Using the index parameter to access the current index while iterating:


const colors1 = ['red', 'green', 'blue'];

colors1.forEach(function (color, index) {
  console.log(`Color at index ${index} is ${color}`);
});



/*========================================================
      reduce() more example
      The reduce() method in JavaScript is used to accumulate a single value by iteratively applying a provided function to each element of an array. It's a versatile method that can be used for various tasks.
===========================================================*/


// Example: 1 Summing all elements of an array:


const numbers13 = [1, 2, 3, 4, 5];

const sum1 = numbers13.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum1); // Output: 15




// Example: 2 Concatenating strings in an array to create a sentence:


const words3 = ['This', 'is', 'a', 'sentence'];

const sentence = words3.reduce(function (accumulator, currentValue) {
  return accumulator + ' ' + currentValue;
}, '');

console.log(sentence); // Output: 'This is a sentence'







// Example: 3  Finding the maximum value in an array:

const numbers14 = [10, 5, 8, 20, 3];

const max = numbers14.reduce(function (accumulator, currentValue) {
  return Math.max(accumulator, currentValue);
}, Number.NEGATIVE_INFINITY);

console.log(max); // Output: 20





// Example: 4 Calculating the total age of an array of objects:

const persons3 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
];

const totalAge = persons3.reduce(function (accumulator, person) {
  return accumulator + person.age;
}, 0);

console.log(totalAge); // Output: 77




// Example: 5 Grouping objects by a property into an object:


const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
];

const groupedByGrade = students.reduce(function (accumulator, student) {
  const grade = student.grade;
  if (!accumulator[grade]) {
    accumulator[grade] = [];
  }
  accumulator[grade].push(student.name);
  return accumulator;
}, {});

console.log(groupedByGrade);
// Output: { A: [ 'Alice', 'Charlie' ], B: [ 'Bob' ] }



// Example: 6 Flattening an array of arrays:

const arrays = [[1, 2], [3, 4], [5, 6]];

const flattened = arrays.reduce(function (accumulator, currentArray) {
  return accumulator.concat(currentArray);
}, []);

console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]




// Example: 7 Counting occurrences of elements in an array:


const fruits3 = ['apple', 'banana', 'cherry', 'apple', 'banana'];

const fruitCount = fruits3.reduce(function (accumulator, fruit) {
  accumulator[fruit] = (accumulator[fruit] || 0) + 1;
  return accumulator;
}, {});

console.log(fruitCount);
// Output: { apple: 2, banana: 2, cherry: 1 }




// Example: 8 Counting the occurrences of each element in an array:


const colors2 = ['red', 'blue', 'green', 'red', 'blue', 'red'];

const colorCounts = colors2.reduce(function (accumulator, current) {
  if (accumulator[current]) {
    accumulator[current]++;
  } else {
    accumulator[current] = 1;
  }
  return accumulator;
}, {});

console.log(colorCounts);
// Output: { red: 3, blue: 2, green: 1 }





// Example: 9 Calculating the average of an array of numbers:


const numbers15 = [10, 20, 30, 40, 50];

const average = numbers15.reduce(function (accumulator, current, index, array) {
  accumulator += current;
  if (index === array.length - 1) {
    return accumulator / array.length;
  } else {
    return accumulator;
  }
}, 0);

console.log(average); // Output: 30








/*========================================================
        some() more example
===========================================================*/

// Example: 1 Checking if an array contains even numbers:


const numbers16 = [1, 3, 5, 6, 7, 9];

const hasEven = numbers16.some(function (number) {
  return number % 2 === 0;
});

console.log(hasEven); // Output: true




// Example: 2 Checking if an array contains strings longer than a certain length:



const words4 = ['apple', 'banana', 'cherry', 'date'];

const hasLongString = words4.some(function (word) {
  return word.length > 5;
});

console.log(hasLongString); // Output: true





// Example: 3 Checking if an array of objects contains an object with a specific property value:


const persons4 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
];

const hasBob = persons4.some(function (person) {
  return person.name === 'Bob';
});

console.log(hasBob); // Output: true





// Example: 4 Checking if an array contains any negative numbers:


const numbers17 = [10, 20, -5, 40, 50];

const hasNegative = numbers17.some(function (number) {
  return number < 0;
});

console.log(hasNegative); // Output: true




// Example: 5 Checking if an array contains at least one element greater than a certain value using an arrow function:

const numbers18 = [10, 20, 30, 40, 50];
const threshold1 = 35;

const hasValueAboveThreshold = numbers18.some((number) => number > threshold1);

console.log(hasValueAboveThreshold); // Output: true





// Example: 6 Using some() with an empty array to return false:


const emptyArray = [];

const hasElements = emptyArray.some(function (element) {
  return true; // This callback is never executed for an empty array.
});

console.log(hasElements); // Output: false






// Example: 7
// Example: 8
// Example: 9
// Example: 1
// Example: 1