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




/*================================================
    5) Math.abs()
===================================================*/
let negativeNum = -3.4;
let convertPositive = Math.abs(negativeNum);
console.log(convertPositive); // 3.4


/*================================================
    6) Math.ceil()
===================================================*/
let ceil1 = Math.ceil(4.1);
let ceil2 = Math.ceil(4.3);
let ceil3 = Math.ceil(4.0);
console.log(ceil1, ceil2, ceil3); // 5 5 4



/*================================================
    7) Math.floor()
===================================================*/
let floor1 = Math.floor(4.7);
let floor2 = Math.floor(4.1);
let floor3 = Math.floor(7.9);
console.log(floor1, floor2, floor3); // 4 4 7



/*===========================================================
    9) Math.sin()     // formula degreee = degree * PI / 180
=============================================================*/

let sinNumberOf90Degree = Math.sin(90 * Math.PI / 180);
console.log(sinNumberOf90Degree); // 1 sing90 value is = 1


let sinNumberOf30Degree = Math.sin(30 * Math.PI / 180);
console.log(sinNumberOf30Degree); // 0.49999999999999994 sing30 value is = 1/2



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



/*===========================================================
    12) Math.max()     
=============================================================*/
let maxNumber = Math.max(3,4,5,6,2,9,8);
console.log(maxNumber);  // 9




/*===========================================================
    13) Math.random()     
=============================================================*/

let randomNumber1 = Math.random();
console.log(randomNumber1); // Ekek somoy ekek output asbe



let randomNumber2 = Math.floor(Math.random() * 10);
console.log(randomNumber2); // 0 theke 9 porjunto jekeno sonkha


let randomNumber3 = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber3);
