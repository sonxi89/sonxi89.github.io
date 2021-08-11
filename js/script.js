const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
const closes = document.querySelectorAll(".close");
var addTodo = document.querySelector(".add_btn");
var getId = document.getElementById("1");
let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  console.log("start");
}

function dragEnd() {
  draggableTodo = null;
  console.log("end");
}

closes.forEach(function (close) {
  close.addEventListener("click", deleteBtn);
});

function deleteBtn() {}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.style.border = "1px solid #ccc";
}

function dragLeave() {
  this.style.border = "none";
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
}

const addModals = document.querySelectorAll(".js-add-modal");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal-close");
const modalContainer = document.querySelector(".modal-container");

// hàm show
function showModal() {
  modal.classList.add("open");
}
// hàm ẩn Modal
function hideModal() {
  modal.classList.remove("open");
}

close.addEventListener("click", hideModal);

addModals.forEach(function (addModal) {
  addModal.addEventListener("click", showModal);
});

modal.addEventListener("click", hideModal);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

// createTodo
const modalSubmit = document.querySelector(".modal-submit");
const no_status = document.getElementById("no-status");
modalSubmit.addEventListener("click", createTodo);

function createTodo() {
  const modalInput = document.querySelector(".modal-input");
  const input_val = modalInput.value;
  const todo_div = document.createElement("div");
  const text = document.createTextNode(input_val);

  todo_div.appendChild(text);
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");

  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");

  span.classList.add("close");
  span.appendChild(span_txt);
  todo_div.appendChild(span);
  no_status.appendChild(todo_div);
  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  document.querySelector(".modal-input").value = "";
  modal.classList.remove("open");
}
