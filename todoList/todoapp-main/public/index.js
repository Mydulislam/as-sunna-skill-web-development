let tasks = JSON.parse(localStorage.getItem("tasksArray")) || [];



function updateLocalStorage(){
  localStorage.setItem(
    "tasksArray",
    JSON.stringify(tasks)
  );
}

function remove(index) {
  console.log(index);
  tasks.splice(index, 1);
  document.querySelector(`#alltasks .childeNo${index}`).classList.add("height-zero");
  setTimeout(()=>{
    updateLocalStorage();
    render();
  },300)

}

function taskCompleted(bool, index) {
  console.log("com");
  tasks[index].completed = bool;
  updateLocalStorage();
}

const inputField = document.querySelector("#todoInputField");

inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    inputReceived();
    updateLocalStorage();
  }
});

document.querySelector("#addBtn").addEventListener("click", inputReceived);

function inputReceived() {
	console.log(inputField.value)
  if (inputField.value !== "") {
    tasks.push({ title: inputField.value, completed: false });
    inputField.value = "";
    render();
  }
  updateLocalStorage();
}

const tasksview = document.querySelector("#alltasks");

function render() {
  let html = ``;

  tasks.forEach((element, i) => {
    html += `
            <div class="bg-secondary-subtle p-2 d-flex align-items-center justify-content-between custome_transition childeNo${i}">
                <span>
                  <input class="form-check-input me-2" type="checkbox" id="defaultCheck1" onchange="taskCompleted(this.checked , ${i})" ${
      element.completed ? "checked" : ""
    }>
                  <span class="text_decoration_line_through">${
                    element.title
                  }</span>
                </span>
                <span>
                  <button class="btn btn-light me-3=2" onclick="edit(${i});">
                    <img src="./public/edit.svg" alt="">
                  </button>
                  <button class="btn btn-light" onclick="remove(${i});">
                    <img src="./public/delet.svg" alt="">
                  </button>
                </span>
            </div>
               `;
  });

  tasksview.innerHTML = html;
  if(tasks.length == 0){
    tasksview.innerHTML = `<h2>You don't have anything to do</h2>`
  }
}

render();


const edit_container = document.querySelector(".edit-container");
const edit_input = document.querySelector("#edit-input");
const edit_save_btn = document.querySelector("#eidt-save-btn");
const edit_cancel_btn = document.querySelector("#eidt-cancel-btn");
const all_tasks = document.querySelector("#alltasks"); 
let edit_task_index;

function edit(index) {
  all_tasks.style.opacity = "0";
  console.log(all_tasks);
  edit_container.style.display = "block";
  edit_input.value = tasks[index].title;
  edit_task_index = index;
  edit_input.focus();
}

edit_cancel_btn.addEventListener("click" , ()=>{
  all_tasks.style.opacity = "1";
  edit_container.style.display = "none";
})

function hand_edit_save_btn(){
  if(edit_input.value !== ""){
    all_tasks.style.opacity = "1";
    tasks[edit_task_index].title = edit_input.value;
    render();
    edit_container.style.display = "none";
    updateLocalStorage();
  }
}

edit_input.addEventListener("keyup" , (e)=>{
  if(e.key == "Enter"){
    hand_edit_save_btn();
  }
})

edit_save_btn.addEventListener("click" ,hand_edit_save_btn);
