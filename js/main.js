// selectors
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let todoInput = document.querySelector(".todo-input");
let filterOption = document.querySelector(".filter-todo ");
// evt liseners
todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click", deleteCkeck);
filterOption.addEventListener("click", filterTodo);

// function

function addtodo(event) {
  event.preventDefault();

  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  let newTodo = document.createElement("li");
  let inputValue = todoInput.value;
  newTodo.innerText = inputValue;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // chek
  let completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);
  // trash
  let trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);

  // append
  todoList.appendChild(todoDiv);

  // clear
  todoInput.value = "";
}
//  ADD FALL let fall = "fall";
function deleteCkeck(e) {
  const item = e.target;

  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    // animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  console.log(e.target);

  // check mark

  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todos) {
    switch (e.target.value) {
      case "all":
        todos.style.display = "flex";
        break;
      case "completed":
        if (todos.classList.contains("completed")) {
          todos.style.display = "flex";
        } else {
          todos.style.display = "none";
        }
    }
  });
  //   console.log(todos);
}
