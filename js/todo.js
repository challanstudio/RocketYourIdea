const toDoForm = document.querySelector("#form-new-todo");
const toDoInput = document.querySelector("#new-todo");
const toDoUl = document.querySelector("#todo-list ul");
let toDoArray = [];

function saveToDo() {
  localStorage.setItem("TO DO", JSON.stringify(toDoArray));
}

// function

function submitToDo(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const toDoInfo = {
    text: newToDo,
    id: Date.now(),
  };
  toDoArray.push(toDoInfo);
  paintToDo(toDoInfo);
  saveToDo();
}

function paintToDo(newToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  const soundSubmit = document.querySelector("#sound-submit");

  toDoUl.appendChild(list);
  list.appendChild(span);
  list.appendChild(btn);
  list.id = newToDo.id;
  span.innerText = newToDo.text;
  btn.innerText = "x";
  btn.addEventListener("click", deleteToDo);
  soundSubmit.play();
}

function deleteToDo(e) {
  const aToDo = e.target.parentElement;
  aToDo.remove();
  toDoArray = toDoArray.filter(
    restToDos => restToDos.id !== parseInt(aToDo.id)
  );
  saveToDo();
}

const savedToDoList = localStorage.getItem("TO DO");
if (savedToDoList !== null) {
  const parseToDoLists = JSON.parse(savedToDoList);
  toDoArray = parseToDoLists;
  parseToDoLists.forEach(paintToDo);
}

toDoForm.addEventListener("submit", submitToDo);
