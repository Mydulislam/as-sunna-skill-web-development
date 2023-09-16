let todoList = [

  ];
  
  const todoForm = document.querySelector("#todo-form");
  
  
  function bindDeleteButtonEvents() {
    const deleteTodoBtns = document.querySelectorAll(".delete-todo");
  
    deleteTodoBtns.forEach(function (btn) {
      btn.addEventListener("click", function (event) {
        const deleteTodoId = parseInt(event.target.attributes["todo-id"].value);
  
        todoList = todoList.filter(function (todo) {
          if (todo.id === deleteTodoId) {
            return false;
          } else {
            return true;
          }
        });
  
        render();
      });
    });
  }
  
  const render = () => {
    const todoListWrapper = document.getElementById("listContainer");
  
    function todoTemplateGeneratorCallback(item) {
      const todoTemplate = `
      <li>
        <span class="${item.completed && "line-through"}">${item.title}</span>
        <button ${item.completed && "disabled"} class="btn ${item.completed ? "btn-cursor-disabled" : "completed-btn"}">✓</button>
        <button todo-id="${item.id}" class="delete-btn btn delete-todo">&times;</button>
      </li>
      `;
  
      return todoTemplate;
    }
  
    const template = todoList.map(todoTemplateGeneratorCallback);
  
    todoListWrapper.innerHTML = template.join("");
  
    bindDeleteButtonEvents();
  }
  
  todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const todoName = document.getElementById('todoInput');
    
    todoList.push({
      id: Date.now(),
      title: todoName.value,
      completed: false,
    });
  
    render()
    todoName.value = '';
  });
  
  
  render()