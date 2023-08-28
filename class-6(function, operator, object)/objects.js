/*============================================================= 
    Javascript General Object
================================================================*/
// Example : 1
let myInfo = {
        firstName : 'Abdul',
        lastName  : 'Islam',
        age : 23 
}
console.log(myInfo.firstName, myInfo.lastName, myInfo['age']);



// Example : 2
let myInfoWithMethode = {
    firstName : 'abdul alim',
    address: {
        city : "Rangpur",
        village : "Kalikapur",
        district : "Dinajpur"
    },
    fullAddress : function(){
        return this.firstName + " is live in " + this.address.city + " city " + this.address.village
    }
}
console.log(myInfoWithMethode.fullAddress());


/*============================================================= 
    Adding a new property in javascript object
================================================================*/
let person = {
    firstPerson : 'Abdul',
    secondPerson : 'Shaon'
}
console.log(person);
person.thirdPerson = 'Dildar' // Adding new property
console.log(person);

/*============================================================= 
    Updating property in javascript object
================================================================*/
person.firstPerson = 'Ariful';
console.log(person);

/*============================================================= 
    Remove property from javascript object
================================================================*/
delete person.thirdPerson;
console.log(person);

/*============================================================= 
    Compare two object
================================================================*/
let object1 = {
    x : 10,
    y : 20
}
let object2 = {
    x : 10,
    y : 20
}
console.log(object1 === object2); // false


//Another way

if(object1.x === object2.x && object1.y === object2.y){
    console.log(true);
}
else{
    console.log(false);
}

// Another Way
let objectToString1 = JSON.stringify(object1);
let objectToString2 = JSON.stringify(object2);

console.log(objectToString1, objectToString2);
console.log(objectToString1 === objectToString2);

/*============================================================= 
   Iterator object in javscript
================================================================*/
let numberObject = {
    firstNumber : 1,
    secondNumber : 2,
    thirdNumber : 3,
    fourthNumber : 4
}
console.log("firstNumber" in numberObject); // true
console.log("lastNumber" in numberObject); // false

for(let property in numberObject){
    console.log(property);
    console.log(numberObject[property]);
}

/*============================================================= 
   Object Method in javscript
================================================================*/
let objectMethodValue = {
        first : 1,
        second : 2,
        third : 3
}

let objectKeys = Object.keys(objectMethodValue)
let objectValue = Object.values(objectMethodValue);
let objectClone = Object.assign(objectMethodValue)
console.log(objectKeys, objectValue, objectClone);

/*============================================================= 
   Object Tricky concept in javscript
================================================================*/
//Example: 1
const person2 = {
    name: "Alice",
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    birthday: function() {
      this.age++;
      console.log("Happy birthday!");
    }
  };
  
  const greetFunc = person2.greet;
  console.log(greetFunc());
//Output: Hello, my name is undefined and I am undefined years old.




// Solve this problem
const person3 = {
    name: "Alice",
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    birthday: function() {
      this.age++;
      console.log("Happy birthday!");
    }
  };
 person3.greet()


 // Example: 3
 const originalObject = {
    name: "John",
    age: 30,
  };
  
  const modifiedObject = originalObject;
  
  modifiedObject.age = 31;
  
  console.log(originalObject.age);    // Output: 31
  console.log(modifiedObject.age);    // Output: 31
  

   // Example: 4
   const originalObject2 = {
    name: "John",
    age: 30,
  };
  
  const modifiedObject2 = { ...originalObject2 };
  modifiedObject2.age = 31;
  
  console.log(originalObject2.age);    // Output: 30
  console.log(modifiedObject2.age);    // Output: 31

  