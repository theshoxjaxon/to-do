"use strict";
// selectors
// biz bu yerda html elementlarni tanladik
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let todoInput = document.querySelector(".todo-input");
let filterOption = document.querySelector(".filter-todo");
// evt liseners
// add event listener qilib oldik
todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click", deleteCkeck);
filterOption.addEventListener("click", filterTodo);

// function
// Html uchun elementlar yasadik funksiya sifatida
function addtodo(event) {
  event.preventDefault();
  // console.log(event.target);
  // Create Elemt
  let inputValue = todoInput.value;
  if (inputValue === "") {
    alert("nimadir yozinda");
  } else {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    let newTodo = document.createElement("li");
    let inputValue = todoInput.value;
    newTodo.innerText = inputValue;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Add Chek
    let completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoDiv.appendChild(completedButton);
    // Add Trash
    let trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    // append
    todoList.appendChild(todoDiv);
  }

  // clear
  todoInput.value = "";
}
// if (todoDiv === null) {
//   alert("sonkirit");
// }
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
  // console.log(e.target);

  // check mark

  if (item.classList[0] === "complete-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach((todo) => {
    // console.log();
    switch (e.target.value) {
      case "All":
        todo.style.display = "flex";
        break;
      case "Completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
  // todos.forEach(function (todos) {
  //   switch (e.target.value) {
  //     case "all":
  //       todos.style.display = "flex";
  //       break;
  //     case "Uncomplited":
  //       if (todos.classList.contains("completed")) {
  //         todos.style.display = "flex";
  //       } else {
  //         todos.style.display = "none";
  //       }
  //   }
  // });
  //   console.log(todos);
}
