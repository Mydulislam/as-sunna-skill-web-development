/*=================================================================== 
    There are different typs of Object Methode
    1) Object.keys(obj)
    2) Object.values(obj)
    3) Object.entries(obj)
    4) Object.assign(target, ...sources)
    5) Object.hasOwnProperty(prop)
    6) Object.freeze(obj): Freezes an object, preventing new properties from being added and existing properties from being removed or modified.
======================================================================*/

/*======================================================
    1) Object.keys(obj) 
=========================================================*/
const person1 = {
    name: "John",
    age: 30,
    profession: "Engineer"
  };
  
  const keys = Object.keys(person1);
  console.log(keys); // Output: ["name", "age", "profession"]
  

/*======================================================
    2) Object.values(obj)
=========================================================*/
const person2 = {
    name: "John",
    age: 30,
    profession: "Engineer"
  };
  
  const values = Object.values(person2);
  console.log(values); // Output: ["John", 30, "Engineer"]
  




/*======================================================
    3) Object.entries(obj)
=========================================================*/
const person3 = {
    name: "John",
    age: 30,
    profession: "Engineer"
  };
  
  const entries = Object.entries(person3);
  console.log(entries);
  // Output:
  // [
  //   ["name", "John"],
  //   ["age", 30],
  //   ["profession", "Engineer"]
  // ]
  





/*======================================================
    4) Object.assign(target, ...sources) 
=========================================================*/
const target = {};
const source = { name: "Alice", age: 25 };

Object.assign(target, source);

console.log(target); // Output: { name: "Alice", age: 25 }
console.log(source); // Output: { name: "Alice", age: 25 }





/*======================================================
    5) Object.hasOwnProperty(prop)
=========================================================*/
const person4 = {
    name: "John",
    age: 30
  };
  
  console.log(person4.hasOwnProperty("age")); // Output: true
  console.log(person4.hasOwnProperty("gender")); // Output: false
  



/*======================================================
    6) Object.freeze(obj) 
=========================================================*/
const person5 = {
    name: "John",
    age: 30
  };
  
  Object.freeze(person5);
  
  person5.age = 31; // This won't have any effect
  console.log(person5); // Output: { name: "John", age: 30 }
  
  person5.geder = "Male" // not add this property this object. because it is freeze
  console.log(person5);
  


/*======================================================
    7) Object.seal() 
=========================================================*/
const person6 = {
    name: 'Alice',
    age: 28
  };
  
  console.log('Before sealing:', person6);
  
  // Seal the object
  const sealedPerson = Object.seal(person6);
  
  // Try to add a new property
  sealedPerson.gender = 'Female'; // This won't add the property
  
  // Try to delete an existing property
  delete sealedPerson.age; // This won't delete the property
  
  // Modify an existing property
  sealedPerson.name = 'Alicia';
  
  console.log('After sealing:', sealedPerson);
  
  // output: Before sealing: { name: 'Alice', age: 28 }
           //After sealing: { name: 'Alicia', age: 28 }



/*======================================================
    8) Object.create() 
=========================================================*/
const animal = {
    makeSound() {
      console.log('Animal sound');
    }
  };
  
  const dog = Object.create(animal);
  dog.makeSound(); // Output: Animal sound
  


  // simple project javascript object
  const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() === '') {
    return;
  }

  const task = createTaskObject(taskText);
  renderTask(task);
  clearInput();
}

function createTaskObject(text) {
  return {
    text,
    completed: false
  };
}

function renderTask(task) {
  const taskItem = document.createElement('li');
  taskItem.innerText = task.text;

  const completeButton = document.createElement('button');
  completeButton.innerText = 'Complete';
  completeButton.addEventListener('click', () => completeTask(taskItem, task));

  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.addEventListener('click', () => removeTask(taskItem, task));

  taskItem.appendChild(completeButton);
  taskItem.appendChild(removeButton);
  taskList.appendChild(taskItem);
}

function completeTask(taskItem, task) {
  task.completed = !task.completed;
  taskItem.style.textDecoration = task.completed ? 'line-through' : 'none';
}

function removeTask(taskItem, task) {
  const index = Array.from(taskList.children).indexOf(taskItem);
  taskList.removeChild(taskItem);
}

function clearInput() {
  taskInput.value = '';
}

