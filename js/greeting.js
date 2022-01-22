const formUserName = document.querySelector("#form-username");
const inputUserName = formUserName.querySelector("input[type='text']");
const submitUserName = formUserName.querySelector("input[type='submit']");
const formNewTodo = document.querySelector("#form-new-todo");
const inputNewTodo = formNewTodo.querySelector("#new-todo");
const greetingText = document.querySelector("#greeting_username h1");
const rightPage = document.querySelector("#contents");
const leftPage = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const KEY_NAME = "name";
const now = new Date();

// 섭밋했을 때: 유저네임저장,폼감추고 투두폼드러내기,인삿말
function onSubmit(e) {
  e.preventDefault();
  const username = inputUserName.value;
  localStorage.setItem(KEY_NAME, username);
  showInputTodo(username);
}

// 뉴투두 폼보여주기,인삿말
function greeting() {
  formNewTodo.classList.remove(HIDDEN_CLASSNAME);
  formUserName.classList.add(HIDDEN_CLASSNAME);
  leftPage.style.width = "";
  document.body.classList.add("grid_body");
  document.body.classList.remove(HIDDEN_CLASSNAME);
  rightPage.classList.remove(HIDDEN_CLASSNAME);
}

// 인삿말
function showInputTodo(value) {
  const hour = now.getHours();
  if (4 <= hour && hour <= 11) {
    greetingText.innerText = `Good Morning 🌞,\n${value}!`;
  } else if (12 <= hour && hour <= 16) {
    greetingText.innerText = `Good Afternoon 🌞,\n${value}!`;
  } else if (17 <= hour && hour <= 21) {
    greetingText.innerText = `Good Evening 🍀,\n${value}!`;
  } else if (22 <= hour || hour <= 3) {
    greetingText.innerText = `Hope you had \na nice day 🌙,\n${value}!`;
  }
  greeting();
  // 1day = 24hours, 시간 x
  // 숫자가 A && B 사이 일때 > 24와 3 사이가 아니니까 || 를 쓰지! ㅠㅠ
}

// 키값으로 저장된 밸류 가져오기
const savedUserName = localStorage.getItem(KEY_NAME);

// 만일 저장된 이름이 없다면
if (savedUserName === null) {
  leftPage.style.width = "300px";
  document.body.classList.remove("grid_body");
  formUserName.classList.remove(HIDDEN_CLASSNAME);
  formUserName.addEventListener("submit", onSubmit);
} else {
  showInputTodo(savedUserName);
}

// formUserName.addEventListener("submit", greeting);
