/* ====================================
        setTimeout and setInterval:
==========================================*/
console.log("Start");

setTimeout(function () {
    console.log("Timeout callback");
}, 2000);

setInterval(function () {
    console.log("Interval callback");
}, 1000);

console.log("End");


/* ====================================
        Promises:
==========================================*/

console.log("Start");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
});

console.log("End");



/* ====================================
        Fetch API::
==========================================*/
console.log("Start");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

console.log("End");





/* ====================================
        Async/Await::
==========================================*/

console.log("Start");

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}

fetchData();

console.log("End");


