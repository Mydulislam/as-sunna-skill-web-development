/*========================================================== 
    Javascript Math Functions
    There are various kind of Math object
    1) Math.pi
    2) Math.round()
    3) Math.pow()
    4) Math.sqrt()
    5) Math.abs() 
    6) Math.ceil()
    7) Math.floor()
    8) Math.sin()
    9) Math.cos()
    10) Math.min()
    11) Math.max()
    12) Math.ramdom()
===========================================================================*/

/*================================================
    1) Math.pi
===================================================*/
let pi = Math.PI;
console.log(pi);


// 1) Calculating Circle Area 

function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

const radius1 = 5;
const circleArea = calculateCircleArea(radius1);
console.log(`The area of the circle with radius ${radius1} is ${circleArea}`);


// 2) Calculating Circle Circumference

function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}

const radius2 = 7;
const circleCircumference = calculateCircleCircumference(radius2);
console.log(`The circumference of the circle with radius ${radius2} is ${circleCircumference}`);



// Converting Degrees to Radians

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

const degrees = 90;
const radians = degreesToRadians(degrees);
console.log(`${degrees} degrees is approximately ${radians} radians`);


// Trigonometric Functions

const angleDegrees = 30;
const angleRadians = degreesToRadians(angleDegrees);

const sineValue = Math.sin(angleRadians);
const cosineValue = Math.cos(angleRadians);
const tangentValue = Math.tan(angleRadians);

console.log(`Sine of ${angleDegrees} degrees is approximately ${sineValue}`);
console.log(`Cosine of ${angleDegrees} degrees is approximately ${cosineValue}`);
console.log(`Tangent of ${angleDegrees} degrees is approximately ${tangentValue}`);


/*================================================
    2) Math.round()
===================================================*/
let roundNumber1 = Math.round(4.5);
console.log(roundNumber1); // 5

let roundNumber2 = Math.round(4.4);
console.log(roundNumber2); // 4

let roundNumber3 = Math.round(3.6);
console.log(roundNumber3); // 4

// Basic Rounding:

const num1 = 7.3;
const roundedNum1 = Math.round(num1);
console.log(`Rounded value of ${num1} is ${roundedNum1}`);

const num2 = 8.7;
const roundedNum2 = Math.round(num2);
console.log(`Rounded value of ${num2} is ${roundedNum2}`);


// Rounding Decimals

function roundToDecimalPlaces(number, decimalPlaces) {
    const multiplier = Math.pow(10, decimalPlaces);
    return Math.round(number * multiplier) / multiplier;
}

const originalNumber = 3.14159;
const roundedTo2DecimalPlaces = roundToDecimalPlaces(originalNumber, 2);
console.log(`Rounded to 2 decimal places: ${roundedTo2DecimalPlaces}`);


// Rounding Negative Numbers

const negativeNumber = -9.6;
const roundedNegative = Math.round(negativeNumber);
console.log(`Rounded value of ${negativeNumber} is ${roundedNegative}`);


// Rounding Large Numbers

const largeNumber = 1234567.89123;
const roundedLargeNumber = Math.round(largeNumber);
console.log(`Rounded value of ${largeNumber} is ${roundedLargeNumber}`);


// Rounding with Negative Decimal Places

const num = 12345.6789;
const roundedToTens = Math.round(num, -1); // Round to the nearest ten
console.log(`Rounded to the nearest ten: ${roundedToTens}`);

// Rounding Time Values

const timeInHours = 2.75;
const roundedTimeInHours = Math.round(timeInHours);
console.log(`Rounded time in hours: ${roundedTimeInHours}`);


// Rounding with Variables
const value = 9.75;
const decimalPlaces = 1;
const roundedValue = Math.round(value * 10 ** decimalPlaces) / 10 ** decimalPlaces;
console.log(`Rounded value to ${decimalPlaces} decimal places: ${roundedValue}`);


// Rounding to Nearest Integer

const num3 = 4.49;
const roundedNum3 = Math.round(num3);
console.log(`Rounded value of ${num3} is ${roundedNum3}`);

const num4 = 7.85;
const roundedNum4 = Math.round(num4);
console.log(`Rounded value of ${num4} is ${roundedNum4}`);



/*================================================
    3) Math.power()
===================================================*/
let power = Math.pow(5,3);
console.log(power); // 125

let numberOfPower = 5;
let power2 = Math.pow(numberOfPower, 2);
console.log(power2); // 25


// Basic Exponentiation

const base = 2;
const exponent = 3;
const result = Math.pow(base, exponent);
console.log(`${base} raised to the power of ${exponent} is ${result}`);


// Calculating Squares and Cubes

const number = 5;

const square = Math.pow(number, 2);
console.log(`The square of ${number} is ${square}`);

const cube = Math.pow(number, 3);
console.log(`The cube of ${number} is ${cube}`);


// Fractional Exponents

const base1 = 9;
const exponent1 = 0.5; // Square root
const squareRoot = Math.pow(base1, exponent1);
console.log(`The square root of ${base1} is ${squareRoot}`);

const cubeRoot = Math.pow(base1, 1 / 3);
console.log(`The cube root of ${base1} is ${cubeRoot}`);


// Negative Exponents

const base2 = 2;
const exponent2 = -3;
const result1 = Math.pow(base2, exponent2);
console.log(`${base} raised to the power of ${exponent} is ${result1}`);


// Power of 10 (Scientific Notation)

const powerOfTen = Math.pow(10, 6);
console.log(`10 raised to the power of 6 is ${powerOfTen}`);


// Calculating Compound Interest

// Compound interest formula: A = P * (1 + r/n)^(nt)
const principal = 1000;
const rate = 0.05; // 5%
const compounded = 4; // Quarterly compounding
const time = 3; // 3 years

const amount = principal * Math.pow(1 + rate / compounded, compounded * time);
console.log(`Amount after ${time} years: ${amount}`);


// Using ** Operator (ES6)
const base3 = 3;
const exponent3 = 4;
const result2 = base3 ** exponent3;
console.log(`${base3} raised to the power of ${exponent3} using ** is ${result2}`);


/*================================================
    4) Math.sqrt()
===================================================*/
let sqrtNum = Math.sqrt(64);
console.log(sqrtNum); // 8


// Basic Square Root:

const number2 = 25;
const squareRoot2 = Math.sqrt(number);
console.log(`The square root of ${number2} is ${squareRoot2}`);


// Calculating Hypotenuse

function calculateHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
}

const sideA = 3;
const sideB = 4;
const hypotenuse = calculateHypotenuse(sideA, sideB);
console.log(`The hypotenuse of the right triangle is ${hypotenuse}`);


// Calculating Distance

function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

const point1 = { x: 1, y: 2 };
const point2 = { x: 4, y: 6 };
const distance = calculateDistance(point1.x, point1.y, point2.x, point2.y);
console.log(`The distance between the two points is ${distance}`);


// Using Square Root in Formulas

const radius = 9;
const circleArea1 = Math.PI * Math.pow(radius, 2);
console.log(`The area of the circle with radius ${radius} is ${circleArea1}`);

const temperature = 256;
const squareTemperature = Math.pow(temperature, 2);
const squareRootTemperature = Math.sqrt(squareTemperature);
console.log(`The square root of the squared temperature is ${squareRootTemperature}`);


// Error Calculation

const data = [12, 15, 18, 20, 22];
const mean = data.reduce((sum, value) => sum + value, 0) / data.length;

const squaredDifferences = data.map(value => Math.pow(value - mean, 2));
const meanSquaredDifference = squaredDifferences.reduce((sum, value) => sum + value, 0) / data.length;

const standardDeviation = Math.sqrt(meanSquaredDifference);
console.log(`The standard deviation of the data is ${standardDeviation}`);





/*================================================
    5) Math.abs()
===================================================*/
let negativeNum = -3.4;
let convertPositive = Math.abs(negativeNum);
console.log(convertPositive); // 3.4



// Basic Absolute Value
const negativeNum1 = -5;
const positiveNum = Math.abs(negativeNum1);
console.log(`The absolute value of ${negativeNum1} is ${positiveNum}`);


// Calculating Difference

const num5 = 10;
const num6 = 17;
const difference = Math.abs(num5 - num6);
console.log(`The absolute difference between ${num5} and ${num6} is ${difference}`);


// Finding Closest Value

const target = 8;
const values = [5, 9, 12, 3, 6];
const closestValue = values.reduce((closest, current) => Math.abs(current - target) < Math.abs(closest - target) ? current : closest);
console.log(`The closest value to ${target} in the array is ${closestValue}`);


// Handling User Input

function calculateDistance(userInput) {
    const distance = Math.abs(userInput);
    return distance;
}

const userInput = -15;
const distance2 = calculateDistance(userInput);
console.log(`The distance is ${distance2}`);


// Calculating Deviation

const data1 = [2, 6, 9, 3, 5];
const mean1 = data1.reduce((sum, value) => sum + value, 0) / data1.length;

const deviations = data1.map(value => Math.abs(value - mean1));
console.log(`Deviations from the mean: ${deviations}`);


// Using in Conditional Logic

const temperature1 = -3;
if (Math.abs(temperature1) < 10) {
    console.log(`The temperature is relatively mild.`);
} else {
    console.log(`The temperature is quite extreme.`);
}


/*================================================
    6) Math.ceil()
===================================================*/
let ceil1 = Math.ceil(4.1);
let ceil2 = Math.ceil(4.3);
let ceil3 = Math.ceil(4.0);
console.log(ceil1, ceil2, ceil3); // 5 5 4


// Basic Ceiling Rounding:

const num8 = 4.25;
const ceilNum1 = Math.ceil(num8);
console.log(`Ceiling rounded value of ${num8} is ${ceilNum1}`);

const num9 = 7.8;
const ceilNum2 = Math.ceil(num9);
console.log(`Ceiling rounded value of ${num9} is ${ceilNum2}`);


// Rounding Negative Numbers Up

const negativeNum3 = -6.75;
const ceilNegativeNum = Math.ceil(negativeNum3);
console.log(`Ceiling rounded value of ${negativeNum3} is ${ceilNegativeNum}`);


// Using Math.ceil() for Pixels

const elementHeight = 150.5; // in pixels
const roundedHeight = Math.ceil(elementHeight);
console.log(`Rounded element height: ${roundedHeight}px`);


// Dividing Values

const totalItems = 17;
const itemsPerPage = 5;
const totalPages = Math.ceil(totalItems / itemsPerPage);
console.log(`Total pages required: ${totalPages}`);


// Calculating Order Quantity

const itemsPerPack = 12;
const requiredQuantity = 42;
const packsToOrder = Math.ceil(requiredQuantity / itemsPerPack);
console.log(`Packs to order: ${packsToOrder}`);


// Using Math.ceil() with Prices

const unitPrice = 3.99; // per item
const quantity = 8;
const totalCost = Math.ceil(unitPrice * quantity * 100) / 100;
console.log(`Total cost: $${totalCost}`);

/*================================================
    7) Math.floor() Certainly! The Math.floor() function in JavaScript is used to round a number down to the nearest integer less than or equal to the given number. Here are some examples of how you can use Math.floor():
===================================================*/
let floor1 = Math.floor(4.7);
let floor2 = Math.floor(4.1);
let floor3 = Math.floor(7.9);
console.log(floor1, floor2, floor3); // 4 4 7


// Basic Floor Rounding

const num10 = 4.8;
const floorNum1 = Math.floor(num10);
console.log(`Floor rounded value of ${num10} is ${floorNum1}`);

const num11 = 7.25;
const floorNum2 = Math.floor(num11);
console.log(`Floor rounded value of ${num11} is ${floorNum2}`);


// Rounding Negative Numbers Down

const negativeNum4 = -6.75;
const floorNegativeNum = Math.floor(negativeNum4);
console.log(`Floor rounded value of ${negativeNum4} is ${floorNegativeNum}`);


// Using Math.floor() for Pixels:
// Similar to Math.ceil(), you can use Math.floor() to ensure whole pixel values for elements.

const elementHeight1 = 150.8; // in pixels
const roundedHeight1 = Math.floor(elementHeight1);
console.log(`Rounded element height: ${roundedHeight1}px`);


// Dividing Values

const totalItems1 = 17;
const itemsPerPage1 = 5;
const totalPages1 = Math.floor(totalItems1 / itemsPerPage1);
console.log(`Total pages: ${totalPages}`);


// Calculating Available Seats

const totalSeats = 75;
const seatsOccupied = 64;
const availableSeats = totalSeats - seatsOccupied;
console.log(`Available seats: ${availableSeats}`);


// Using Math.floor() with Prices

const unitPrice1 = 5.99; // per item
const quantity1 = 9;
const totalCost1 = Math.floor(unitPrice1 * quantity1 * 100) / 100;
console.log(`Total cost: $${totalCost1}`);



/*===========================================================
    9) Math.sin()     // formula degreee = degree * PI / 180
=============================================================*/

let sinNumberOf90Degree = Math.sin(90 * Math.PI / 180);
console.log(sinNumberOf90Degree); // 1 sing90 value is = 1


let sinNumberOf30Degree = Math.sin(30 * Math.PI / 180);
console.log(sinNumberOf30Degree); // 0.49999999999999994 sing30 value is = 1/2


// Calculating Sine Values

const angleInRadians = Math.PI / 6; // 30 degrees in radians
const sineValue1 = Math.sin(angleInRadians);
console.log(`The sine of ${angleInRadians} radians is approximately ${sineValue1}`);


// Generating Sine Wave Data

const amplitude = 1;
const frequency = 0.1;
const phase = 0;

const numPoints = 100;
const sineWaveData = [];
for (let i = 0; i < numPoints; i++) {
    const angle = (Math.PI * 2 * frequency * i) + phase;
    const value = amplitude * Math.sin(angle);
    sineWaveData.push(value);
}

console.log(`Generated sine wave data: ${sineWaveData}`);


// Animating Using Sine

const amplitude1 = 50;
const frequency1 = 0.5;
const animationDuration = 2000; // in milliseconds

const startTime = Date.now();
function animate() {
    const currentTime = Date.now() - startTime;
    const angle = (currentTime / animationDuration) * (Math.PI * 2 * frequency1);
    const translateY = amplitude1 * Math.sin(angle);
    
    // Use translateY for animation
    console.log(`Current translateY value: ${translateY}`);

    if (currentTime < animationDuration) {
        requestAnimationFrame(animate);
    }
}

animate();


// Creating Patterns

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const numPoints1 = 200;
const amplitude2 = 50;
const frequency2 = 0.05;

ctx.beginPath();
for (let i = 0; i < numPoints1; i++) {
    const x = i;
    const y = canvas.height / 2 + amplitude2 * Math.sin(frequency2 * x);
    if (i === 0) {
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
    }
}
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.stroke();
// 




/*===========================================================
    10) Math.cos()     // formula degreee = degree * PI / 180
=============================================================*/

let cosNumberOf0Degree = Math.cos(0 * Math.PI / 180);
console.log(cosNumberOf0Degree); // 1 Cos 0 degree value is : 1



/*===========================================================
    11) Math.min()     
=============================================================*/
let minNumber = Math.min(3,4,5,6,2,8);
console.log(minNumber); // 2


// Finding Minimum Value

const num12 = 5;
const num13 = 3;
const num14 = 9;
const minValue = Math.min(num12, num13, num14);
console.log(`The smallest value is: ${minValue}`);


// Finding Minimum in an Array

const numbers = [15, 8, 23, 4, 10];
const smallestNumber = Math.min(...numbers);
console.log(`The smallest number in the array is: ${smallestNumber}`);


// Finding Minimum of Dynamic Values

let currentMinimum = Infinity;

function updateMinimum(value) {
    currentMinimum = Math.min(currentMinimum, value);
}

updateMinimum(7);
updateMinimum(2);
updateMinimum(9);

console.log(`The current minimum value is: ${currentMinimum}`);


// Comparing Values

const x = 15;
const y = 9;
const z = 12;

const smallest = Math.min(x, y, z);
console.log(`The smallest value among ${x}, ${y}, and ${z} is: ${smallest}`);


// Finding Minimum of Specific Properties in Objects

const products = [
    { name: 'Apple', price: 0.5 },
    { name: 'Banana', price: 0.3 },
    { name: 'Orange', price: 0.6 }
];

const lowestPrice = Math.min(...products.map(product => product.price));
console.log(`The lowest price is: ${lowestPrice}`);


// Using with Conditional Logic

const value1 = 15;
const value2 = 22;
const minValue1 = Math.min(value1, value2);

if (minValue1 === value1) {
    console.log(`The minimum value is ${value1}`);
} else {
    console.log(`The minimum value is ${value2}`);
}

// Finding Minimum in Function Arguments

function findMinimum() {
    return Math.min(...arguments);
}

const minArg = findMinimum(4, 9, 1, 7, 3);
console.log(`The minimum value among the arguments is ${minArg}`);


// Calculating Smallest Element

const strings = ["apple", "banana", "orange", "grape"];
const shortestString = strings.reduce((shortest, current) => current.length < shortest.length ? current : shortest);

console.log(`The shortest string is: ${shortestString}`);



/*===========================================================
    12) Math.max()     
=============================================================*/
let maxNumber = Math.max(3,4,5,6,2,9,8);
console.log(maxNumber);  // 9


// Basic Maximum Value

const num15 = 5;
const num16 = 9;
const max = Math.max(num15, num16);
console.log(`The maximum value between ${num15} and ${num16} is ${max}`);


// Finding Maximum in an Array

const number1 = [10, 3, 8, 2, 6];
const maxInArray = Math.max(...number1);
console.log(`The maximum value in the array is ${maxInArray}`);


// Calculating Maximum Coordinates

const points = [
    { x: 5, y: 10 },
    { x: 3, y: 8 },
    { x: 7, y: 12 },
];

const maxX = Math.max(...points.map(point => point.x));
const maxY = Math.max(...points.map(point => point.y));

console.log(`Maximum X coordinate: ${maxX}`);
console.log(`Maximum Y coordinate: ${maxY}`);


// Calculating Largest Element

const string = ["apple", "banana", "orange", "grape"];
const longestString = string.reduce((longest, current) => current.length > longest.length ? current : longest);

console.log(`The longest string is: ${longestString}`);


// Finding Maximum in Function Arguments

function findMaximum() {
    return Math.max(...arguments);
}

const maxArg = findMaximum(4, 9, 1, 7, 3);
console.log(`The maximum value among the arguments is ${maxArg}`);


// Using with Conditional Logic

const value4 = 15;
const value5 = 22;
const maxValue = Math.max(value4, value5);

if (maxValue === value1) {
    console.log(`The maximum value is ${value4}`);
} else {
    console.log(`The maximum value is ${value5}`);
}



/*===========================================================
    13) Math.random()     
=============================================================*/

let randomNumber1 = Math.random();
console.log(randomNumber1); // Ekek somoy ekek output asbe

let randomNumber2 = Math.floor(Math.random() * 10);
console.log(randomNumber2); // 0 theke 9 porjunto jekeno sonkha


let randomNumber3 = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber3);  // 1 theke 10 porjunto



// Generating Random Decimal Numbers

const random1 = Math.random();
console.log(`Random number 1: ${random1}`);

const random2 = Math.random();
console.log(`Random number 2: ${random2}`);



// Generating Random Whole Numbers

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInt1 = getRandomInt(1, 10); // Generates a random number between 1 and 10
console.log(`Random integer 1: ${randomInt1}`);

const randomInt2 = getRandomInt(-50, 50); // Generates a random number between -50 and 50
console.log(`Random integer 2: ${randomInt2}`);


// Simulating Coin Toss

function coinToss() {
    return Math.random() < 0.5 ? 'Heads' : 'Tails';
}

console.log(`Coin toss result: ${coinToss()}`);


// Randomly Selecting an Item from an Array

const items = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const randomItemIndex = Math.floor(Math.random() * items.length);
const randomItem = items[randomItemIndex];
console.log(`Randomly selected item: ${randomItem}`);



// Randomizing Order of Array Elements

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray([...originalArray]);
console.log(`Shuffled array: ${shuffledArray}`);



// Generate Random Boolean Value

function getRandomBoolean() {
    return Math.random() < 0.5;
  }
  
  const randomBool = getRandomBoolean(); // Generates true or false randomly
  console.log(randomBool);


// Randomly Shuffle an Array

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  const myArray = [1, 2, 3, 4, 5];
  shuffleArray(myArray);
  console.log(myArray); // The array will be randomly shuffled
  


// Generating Random RGB Color

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const randomColor = getRandomRGB();
console.log(`Random RGB color: ${randomColor}`);



// Generate Random Color 

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const randomColor1 = getRandomColor();
console.log(randomColor1);

