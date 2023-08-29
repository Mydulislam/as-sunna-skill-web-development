/*================================================================ 
    The this keyword in JavaScript is a reference to the current execution context. Its value depends on how a function is invoked and where it's used. 
==================================================================*/

/*=================================================================
    1) Global Context:
====================================================================*/
console.log(this); // Points to the global object (e.g., 'window' in a browser)

/*=================================================================
    2) Inside a Function:
====================================================================*/
function showThis() {
    console.log(this);
}

showThis(); // In a browser, this will point to 'window'




/*=================================================================
    3) Object Method::
====================================================================*/
const person = {
    name: "John",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

person.greet(); // 'this' refers to the 'person' object



/*=================================================================
    4) Constructor Function:
====================================================================*/
function Car(make) {
    this.make = make;
    console.log(this);
}

const myCar = new Car("Toyota"); // 'this' refers to the newly created object 'myCar'
console.log(myCar.make) // Toyota





/*=================================================================
    5) Event Handlers / DOM Manipulation
====================================================================*/
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log(this); // 'this' refers to the button element that triggered the event
});

/*=================================================================
    6) Arrow Functions:
====================================================================*/
const person2 = {
    name: "Alice",
    sayName: () => {
        console.log(this.name); // 'this' here doesn't refer to 'person', but to the outer scope (e.g., 'window')
    }
};

person2.sayName();

/*=================================================================
    7) Explicit Binding:
====================================================================*/
function greet() {
    console.log(`Hello, ${this.name}`);
}

const user = { name: "Alex" };

greet.call(user); // 'this' is explicitly set to 'user'

/*=================================================================
    8) DOM Manipulation:
====================================================================*/
const element = document.querySelector(".my-element");

element.addEventListener("click", function() {
  console.log(this); // 'this' refers to the DOM element that triggered the event
});
