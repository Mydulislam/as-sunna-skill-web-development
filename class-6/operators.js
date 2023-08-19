/* ======================================================================
Javascript Operaotr
There are Different types of operator in Javascript
1) Arithmatic Operator
2) Assignment Operator
3) Comparison Operator
4) String Operator
5) Logical Operator
6) Bitwise Operator
7) Ternary Operator
8) Type Operator 
========================================================================*/

/*====================================================================== 
    Arithmetic Operator (+, -, *, /, %, **, ++, --)
========================================================================*/
// + OPERATOR
const num1 = 5;
const num2 = 2;
const add1 = num1 + num2;
console.log(add1);

// - OPERATOR
let num3 = 10;
let num4 = 15;
let subtract = num3 - num4;
console.log(subtract);

// * OPERATOR
let num5 = 6;
let num6 = 6;
console.log(num5*num6);

// / (DIVISION OPERATOR)
let num7 = 7;
let num8 = 8;
console.log(num7 / num8);

// % (MODULUS OPERATOR)
let num9 = 9;
let num10 = 10;
let modulus = num10 % num9;
console.log(modulus);

// ** (Exponentiation Operator)
let num11 = 11;
console.log(num11**2);

// ++ Incriment Operator
let increment1 = 1;
console.log(increment1++);
console.log(++increment1);

// -- Decrement Operator
let decrement = 2;
console.log(decrement--);
console.log(--decrement);

// Operator Precedence
let firstPrecendence = 100 + 3 * 3;
console.log(firstPrecendence); // 109

let secondPrecendence = (100 + 3) * 3;
console.log(secondPrecendence); // 900

let thirdPrecendence = 100 + 50 - 3;
console.log(thirdPrecendence); // 147;

let fourthPrecendence = 100 / 50 * 3; 
console.log(fourthPrecendence) // 6;

let fifthPrecendence = (100 + 50) - 3;
console.log(fifthPrecendence); // 147

/*====================================================================== 
    Assignment Operator (+=, -=, *=, /=, %=)
========================================================================*/
// += OPERATOR
let assign1 = 5;
assign1 += 10;
console.log(assign1);

let text1 = "Hello";
let text2 = "World"
text1 += text2;
console.log(text1);

// -= OPERATOR
let assign2 = 10;
assign2 -= 5;
console.log(assign2);

// *= OPERATOR
let assign3 = 6;
assign3 *= 3;
console.log(assign3);

// /= OPERATOR
let assign4 = 6;
assign4 /= 3;
console.log(assign4);

// %= OPERATOR
let assign5 = 10;
assign5 %= 6;
console.log(assign5);

// **= OPERATOR
let assign6 = 10;
assign6 **= 2;
console.log(assign6);

/*====================================================================== 
    Comparison / Relational Operator (< , > , <= , >=, == , === , !=, !==)
========================================================================*/
//  < (LESS THAN OPERATOR)

let compare1 = 10;
let compare2 = 20;
console.log(compare1 < compare2); // true
console.log(compare2 < compare1); //false

// > (GREATER THAN)
console.log(compare1 > compare2); // false;
console.log(compare2 > compare1); // true;

// <= (LESS THAN EQUAL)
console.log(compare1 <= compare2); // true;
console.log(compare2 <= compare1); // false;

// >= (GREATER THAN EQUAL)
console.log(compare1 >= compare2 ); // false;
console.log(compare2 >= compare1); // true;

// == (DOUBLE EQUAL)
console.log(compare1 == compare2); // false
console.log(55 == 55); // true;
console.log('55' == 55); // true;

// === (TRIPLE EQUAL)
console.log(compare1 === compare2); // false;
console.log(55 === 55); // true;
console.log('55' === 55); // false

// != (NOT EQUAL)
console.log(compare1 != compare2); // true;
console.log(55 != 55); // false;
console.log('55' != 55); // false

// !== (NOT DOUBLE EQUAL)
console.log(compare1 !== compare2); // true;
console.log(55 !== 55); // false
console.log('55' !== 55); // true;

// ************************Tricky concept of Comparison or Relation operator************************
console.log(NaN == NaN);  // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN));  // true
console.log(0.1 + 0.2 == 0.3);  // false

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 == arr2);   // false
console.log(arr1 === arr2);  // false

console.log(0 == false);        // true
console.log("" == false);       // true
console.log(null == undefined); // true

console.log(0 === false);        // false
console.log("" === false);       // false
console.log(null === undefined); // false


/*====================================================================== 
    String Operator with Comparison Operator
========================================================================*/
let str1 = "Hello"
let str2 = "World";

//  String Concate
console.log(str1 + ' ' + str2); // Hello World
console.log(str1 > str2); // false;
console.log(str1 < str2); // true;

let str3 = "A"
let str4 = "B";
console.log(str3 > str4); // false
console.log(str3 < str4); // true;

let str5 = "20";
let str6 = "4";
console.log(str5 > str6); // false;
console.log(str5 < str6); // true;

let str7 = "What a nice ";
str7 += "Today";
console.log(str7); // What a nice Today

// ************************Tricky concept of  String and Comparison operator************************
console.log(5 + 5); // 10
console.log("5" + 5); // 55
console.log("Hello" + 5); // Hello5

let str8 = "5";
const num = 10;
str8 = String(Number(str8) + num);
console.log(str8); // "15"

/*====================================================================== 
    Logical Operator (&&, ||, !)
========================================================================*/

// && (LOGICAL AND)
console.log(55 > 50 && 30 < 40); // true;
console.log(55 > 50 && 30 < 10); // false;

// || (LOGICAL OR)
console.log(50 > 30 || 30 > 40); // true;
console.log(55 > 50 || 30 < 10); // true;
console.log(50 < 30 || 30 < 10); // false;

// ! (LOGICAL NOT)
console.log(!true ); // false
console.log(!false ); // true;

console.log(50 != 40 ); // true;
console.log(50 != 50); // fasle;
console.log(!(50 == 50)); // false;

// ************************Tricky concept of  Logical Operaror ************************
let value = null;
let result = value && value.property; 
console.log(result); // null

console.log("Abdul" || "Khadimul"); // Abdul
console.log(!!'Hello'); // true;

let age = 25;
let hasLices = true;
let getLics = age >= 18 && hasLices;
if(getLics){
    console.log('You Drive The Car');
}
else{
    console.log("You don't Drive The Car");
}

/*====================================================================== 
    Ternary Operator (conditions ? "true" : "false")
========================================================================*/
let name = null;
const getName = name ? "Mydul islam" : 'No name';
console.log(getName); // No name

// Grade
let score = 75;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";

console.log("Your grade:", grade);

// Temperature
let temperature = 25;
let weather = temperature > 30 ? "Hot" : temperature > 20 ? "Warm" : "Cool";

console.log(`The weather is ${weather}.`);

let result2 = false ? "Hello" : undefined ? "World" : "Goodbye";

console.log(result2); // Output: "Goodbye"

