/*============================================================== 

// first Part with only delete funtionality

================================================================*/
// document.addEventListener("DOMContentLoaded", function () {
//     const taskInput = document.getElementById("taskInput");
//     const addButton = document.getElementById("addButton");
//     const taskList = document.getElementById("taskList");
  
//     // Load tasks from local storage if available
//     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     storedTasks.forEach(function (taskText) {
//       createTask(taskText);
//     });
  
//     addButton.addEventListener("click", function () {
//       const taskText = taskInput.value;
//       if (taskText !== "") {
//         createTask(taskText);
//         taskInput.value = "";
//         updateLocalStorage();
//       }
//     });
  
//     function createTask(taskText) {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         ${taskText}
//         <button class="delete-button">Delete</button>
//       `;
//       taskList.appendChild(li);
  
//       const deleteButton = li.querySelector(".delete-button");
//       deleteButton.addEventListener("click", function () {
//         taskList.removeChild(li);
//         updateLocalStorage();
//       });
//     }
  
//     function updateLocalStorage() {
//       const tasks = Array.from(taskList.children).map(function (li) {
//         return li.firstChild.textContent.trim(); // Extract only the task text
//       });
//       localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
//   });



/*============================================================== 

// Second Part with delete with edit funtionality

================================================================*/


// document.addEventListener("DOMContentLoaded", function () {
//     const taskInput = document.getElementById("taskInput");
//     const addButton = document.getElementById("addButton");
//     const taskList = document.getElementById("taskList");

//     // Load tasks from local storage if available
//     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     storedTasks.forEach(function (taskText) {
//         createTask(taskText);
//     });

//     addButton.addEventListener("click", function () {
//         const taskText = taskInput.value;
//         if (taskText !== "") {
//             createTask(taskText);
//             taskInput.value = "";
//             updateLocalStorage();
//         }
//     });

//     function createTask(taskText) {
//         const li = document.createElement("li");
//         li.innerHTML = `
//             <span class="task-text">${taskText}</span>
//             <button class="edit-button">Edit</button>
//             <button class="delete-button">Delete</button>
//         `;
//         taskList.appendChild(li);

//         const editButton = li.querySelector(".edit-button");
//         editButton.addEventListener("click", function () {
//             const span = li.querySelector(".task-text");
//             const newText = prompt("Edit the task:", span.textContent);
//             if (newText !== null && newText.trim() !== "") {
//                 span.textContent = newText;
//                 updateLocalStorage();
//             }
//         });

//         const deleteButton = li.querySelector(".delete-button");
//         deleteButton.addEventListener("click", function () {
//             taskList.removeChild(li);
//             updateLocalStorage();
//         });
//     }

//     function updateLocalStorage() {
//         const tasks = Array.from(taskList.children).map(function (li) {
//             return li.querySelector(".task-text").textContent.trim(); // Extract only the task text
//         });
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }
// });





/*============================================================== 

// Third Part with delete, edit and complete funtionality addded

================================================================*/

document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const clearCompletedButton = document.getElementById("clearCompletedButton");

    // Load tasks from local storage if available
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach(function (task) {
        createTask(task.text, task.completed);
    });

    addButton.addEventListener("click", addTask);

    // Add an event listener for "Enter" key press in the input field
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    clearCompletedButton.addEventListener("click", function () {
        const tasksToRemove = [];
        const tasks = taskList.querySelectorAll("li");
        tasks.forEach(function (task) {
            if (task.classList.contains("completed")) {
                tasksToRemove.push(task);
            }
        });

        tasksToRemove.forEach(function (task) {
            taskList.removeChild(task);
        });
        updateLocalStorage();
    });

    function addTask() {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            createTask(taskText, false);
            taskInput.value = "";
            updateLocalStorage();
        }
    }

    function createTask(taskText, isCompleted) {
        const li = document.createElement("li");
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        li.appendChild(taskSpan);

        const completedButton = document.createElement('button')
        completedButton.className = 'completed-button'
        completedButton.textContent = 'Completed'
        li.append(completedButton)

        const editButton = document.createElement("button");
        editButton.className = "edit-button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
            const newText = prompt("Edit the task:", taskSpan.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskSpan.textContent = newText;
                updateLocalStorage();
            }
        });
        li.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
            updateLocalStorage();
        });
        li.appendChild(deleteButton);

        if (isCompleted) {
            li.classList.add("completed");
        }

        completedButton.addEventListener("click", function () {
            li.classList.toggle("completed");
            updateLocalStorage();
        });

        taskList.appendChild(li);
    }

    function updateLocalStorage() {
        const tasks = Array.from(taskList.children).map(function (li) {
            const taskSpan = li.querySelector("span");
            return {
                text: taskSpan.textContent.trim(),
                completed: li.classList.contains("completed")
            };
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});