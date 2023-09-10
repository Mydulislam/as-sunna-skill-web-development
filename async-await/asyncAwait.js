
/*================================================================= 
        Fetching Data from an API:
====================================================================*/
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();




/*================================================================= 
        Multiple Concurrent Requests:
====================================================================*/
async function fetchMultipleData() {
    try {
      const [data1, data2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()),
        fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
      ]);
      console.log(data1, data2);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchMultipleData();
  



/*================================================================= 
        Using async/await with Promises:
====================================================================*/

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function doSomething() {
    console.log('Start');
    await delay(2000); // Wait for 2 seconds
    console.log('I am coming later 2 second End');
  }
  
  doSomething();
  




/*================================================================= 
        File Upload with Fetch API:
====================================================================*/
async function uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log('Upload Result:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  const fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', (event) => {
    const selectedFile = event.target.files[0];
    uploadFile(selectedFile);
  });
  





/*================================================================= 
        Using async in Arrow Functions:
====================================================================*/

const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchUserData(1);





/*================================================================= 
        Fetching Data from an API:
====================================================================*/







/*================================================================= 
        Fetching Data from an API:
====================================================================*/

