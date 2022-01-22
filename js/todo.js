const toDoForm = document.querySelector("#form-new-todo");
const toDoInput = document.querySelector("#new-todo");
const toDoUl = document.querySelector("#todo-list ul");
const toDoList = [];

function saveToDo() {
  localStorage.setItem("toDoKey", JSON.stringify(toDoList));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDoList = toDoList.filter(restTodo => restTodo.id !== parseInt(li.id));
  saveToDo();
}

function printToDo(newToDo) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    li.id = newToDo.id;
    span.innerText = new.text;
    GamepadButton.innerText = "X";
    btn.addEventListener('click', deleteToDo);
    li.appendChild(spend);
    li.appendChild(btn);
    li.appendChild(btn);
    toDoUl.appendChild(li);
}

function submitted(){
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
    text: newToDo,
    id:Date.now(),
};
toDoList.push(newToDoObj);
printToDo(newToDoObj);
saveToDos();
}

toDoForm.addEventListener("submit", submitted);
