/* ================================================================================
                    Fetching Data from an API:
==================================================================================*/

function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          resolve(data); // Resolve the promise with the fetched data
        })
        .catch(error => {
          reject(error); // Reject the promise with the error
        });
    });
  }
  
  // Usage example
  fetchData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });


/* ================================================================================
                     Chaining Promises:
==================================================================================*/

function fetchData1(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }
  
  fetchData1('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  
/* ================================================================================
            Creating Promises with Promise.resolve() and Promise.reject():
==================================================================================*/
const resolvedPromise = Promise.resolve('Resolved value');
const rejectedPromise = Promise.reject('Rejected reason');

resolvedPromise
  .then(data => {
    console.log('Resolved:', data);
  });

rejectedPromise
  .catch(error => {
    console.error('Rejected:', error);
  });



/* ================================================================================
            Promise all Method:
==================================================================================*/
const promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
const promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');

Promise.all([promise1, promise2])
  .then(responses => {
    return Promise.all(responses.map(response => response.json()));
  })
  .then(data => {
    console.log('Data from both requests:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });



/* ================================================================================
            Promise race Method:
==================================================================================*/
const promise3 = new Promise((resolve) => setTimeout(resolve, 1000, 'One'));
const promise4 = new Promise((resolve) => setTimeout(resolve, 500, 'Two'));

Promise.race([promise3, promise4])
  .then(data => {
    console.log('First resolved promise:', data);
  });
