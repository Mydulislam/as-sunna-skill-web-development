/*==========================================================
     Callbacks in Array Methods:
============================================================*/

const numbers = [1, 2, 3, 4, 5];

// Using map with a callback
const squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log('Squared numbers:', squaredNumbers);




/*==========================================================
     Callbacks with Array Iteration:
============================================================*/
const numbers1 = [1, 2, 3, 4, 5];

function processNumber(number, callback) {
  console.log(`Processing number: ${number}`);
  callback(number * 2);
}

numbers1.forEach(function (number) {
  processNumber(number, function (result) {
    console.log(`Result: ${result}`);
  });
});




/*==========================================================
     Callbacks in Promises:
============================================================*/

function fetchData(url) {
    return new Promise(function(resolve, reject) {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(function(data) {
      console.log('Data:', data);
    })
    .catch(function(error) {
      console.error('Error:', error);
    });

    




/*==========================================================
     Callbacks in Event Handling:
============================================================*/
const button = document.getElementById('myButton');

function handleButtonClick(event) {
  console.log('Button clicked:', event.target.textContent);
}

button.addEventListener('click', handleButtonClick);




/*==========================================================
     Sorting with Custom Callback:
============================================================*/
const fruits = ['apple', 'banana', 'cherry', 'date'];

function sortByLength(a, b) {
  return a.length - b.length;
}

const sortedFruits = fruits.sort(sortByLength);

console.log('Sorted by length:', sortedFruits);






/*==========================================================
     Callbacks in Promises:
============================================================*/

function fetchData(url) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (url === 'success') {
          resolve('Data retrieved successfully');
        } else {
          reject('Failed to retrieve data');
        }
      }, 1000);
    });
  }
  
  fetchData('success')
    .then(function(data) {
      console.log(data);
    })
    .catch(function(error) {
      console.error(error);
    });
  



/*==========================================================
     Callbacks in User Authentication:
============================================================*/


function loginUser(username, password, callback) {
    // Simulated authentication logic
    setTimeout(function() {
      if (username === 'user' && password === 'password') {
        callback(null, 'Authentication successful');
      } else {
        callback('Authentication failed', null);
      }
    }, 1000);
  }
  
  loginUser('user', 'password', function(error, message) {
    if (error) {
      console.error(error);
    } else {
      console.log(message);
    }
  });
  



/*==========================================================
     
============================================================*/
/*==========================================================
     
============================================================*/
/*==========================================================
     
============================================================*/