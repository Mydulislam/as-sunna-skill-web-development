
/* ================================================================================
                    Basic Promise Example:
==================================================================================*/
const promise = new Promise((resolve, reject) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    const randomValue = Math.random();
    if (randomValue < 0.5) {
      resolve("Success!"); // Resolve the promise
    } else {
      reject("Error!"); // Reject the promise
    }
  }, 1000);
});

promise
  .then((result) => {
    console.log("Resolved:", result);
  })
  .catch((error) => {
    console.error("Rejected:", error);
  });








/* ================================================================================
                   Chaining Promises:
==================================================================================*/
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulate fetching data from an API
    setTimeout(() => {
      const data = { name: "John", age: 30 };
      resolve(data);
    }, 1000);
  });
};

const processData = (data) => {
  return new Promise((resolve, reject) => {
    // Simulate processing data
    setTimeout(() => {
      data.email = "john@example.com";
      resolve(data);
    }, 1000);
  });
};

fetchData()
  .then(processData)
  .then((result) => {
    console.log("Processed data:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });









/* ================================================================================
                    Promise.all:
==================================================================================*/


const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    // Simulate fetching user data from an API
    setTimeout(() => {
      const userData = { name: "Alice", age: 25 };
      resolve(userData);
    }, 1500);
  });
};

const fetchPostData = () => {
  return new Promise((resolve, reject) => {
    // Simulate fetching user posts from an API
    setTimeout(() => {
      const postData = { title: "Post 1", content: "This is post 1" };
      resolve(postData);
    }, 1000);
  });
};

Promise.all([fetchUserData(), fetchPostData()])
  .then(([userData, postData]) => {
    console.log("User Data:", userData);
    console.log("Post Data:", postData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });





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
