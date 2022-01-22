const toDoForm = document.querySelector("#form-new-todo");
const soundSubmit = document.querySelector("#sound-submit");

function submit() {
  soundSubmit.play();
}
toDoForm.addEventListener("submit", submit);

const soundEnter = document.querySelector("#sound-enter");
const formUserName = document.querySelector("#form-username");

function enter() {
  formUserName.play();
}
formUserName.addEventListener("submit", enter);
