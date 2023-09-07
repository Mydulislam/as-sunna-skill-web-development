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



// Example: 8
// Example: 9
// Example: 10
