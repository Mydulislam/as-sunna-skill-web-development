/*============================================================================
    JSON(Javascript Object Notation)

    1) Data Representation Format
    2) Commonly used for APIs and Configs
    3) LightWeight and Easy to READ / WRITE
    4) Integrates Easily with Most Language 
==============================================================================*/

/*===============================================================
    // Example: 1 convert object to json stringify
=================================================================*/
let users = {
    "name" : "kyel",
    "isProgrammer" : true,
    "favoriteNumber" : 3,
    "hobbies" : ["WeightL-Lifting", "Bowling"],
    "friends" : [{
        "name" : "john",
        "isProgrammer" : false,
        "favoriteNumber" : 3
    }]
}

let convertJsonStringify = JSON.stringify(users);
console.log(convertJsonStringify);

// Set The item in localStorage
localStorage.setItem('users',convertJsonStringify)

/*==================================================================== 
        Convert JSON string object in Javascript object 
======================================================================*/
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';


let obj = JSON.parse(text);
console.log(obj);
console.log(obj['employees'][0].firstName);


/*==================================================================== 
        New away to JSON Parse using the reviver function
======================================================================*/


const myInfo = '{"name" : "mydul islam", "age":26, "DOB" : "1997-02-14"}';

const jsonObject = JSON.parse(myInfo,function(key, value){
    if(key === 'DOB'){
        return new Date(value)
    };
    return value;
});
console.log(jsonObject);



/*==================================================================== 
        JSON Object Literals
======================================================================*/
const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);

// // Accessing Object Values
// const myJSON1 = '{"name":"John", "age":30, "car":null}';
// let myObj1 = JSON.parse(myJSON1);
// x = myObj1.name;


/*==================================================================== 
        Looping an Object
======================================================================*/
const myJSON2 = '{"name":"John", "age":30, "car":null}';
const myObj2 = JSON.parse(myJSON2);

let text1 = "";
let text2 = ""
for (const x in myObj2) {
  text1 += x + ", ";
  text2 += myObj2[x] + ", ";
}
console.log(text1);         // name, age, car
console.log(text2);         // John, 30 , null



/*==================================================================== 
        JSON demo text fetch data from demo.txt
======================================================================*/

async function fetchData(){
    const response = await fetch('demo.txt');
    const data = await response.json()
    let resultText = document.getElementById('demo');
    resultText.innerHTML = data.name;
}

fetchData()

// project 2: 

async function change_myselect(sel){
    let x = '';
    const dbParam = JSON.stringify({table:sel,limit:20});
    const response1 = await fetch("json_demo_html_table.php",{
        method:"POST",
        headers: {
            "Content-type":"application/x-www-form-urlencoded"
        },
        body: "x=" + dbParam
    });

    const mydulIslam = await response1.json();

    text = "<table border='1'>"
    for (x in mydulIslam) {
      text += "<tr><td>" + mydulIslam[x].name + "</td></tr>";
    }
    text += "</table>"    
    document.getElementById("fetchDemo").innerHTML = text;
}


/*==================================================================== 
        Simple TODO Lists
======================================================================*/
document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
  
    // Load tasks from local storage if available
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach(function (taskText) {
      createTask(taskText);
    });
  
    addButton.addEventListener("click", function () {
      const taskText = taskInput.value;
      if (taskText !== "") {
        createTask(taskText);
        taskInput.value = "";
        updateLocalStorage();
      }
    });
  
    function createTask(taskText) {
      const li = document.createElement("li");
      li.innerHTML = `
        ${taskText}
        <button class="delete-button">Delete</button>
      `;
      taskList.appendChild(li);
  
      const deleteButton = li.querySelector(".delete-button");
      deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
        updateLocalStorage();
      });
    }
  
    function updateLocalStorage() {
      const tasks = Array.from(taskList.children).map(function (li) {
        return li.firstChild.textContent.trim(); // Extract only the task text
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  });
  
  