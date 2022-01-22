const form = document.querySelector("#fav-link-form");
const inputTitle = document.querySelector("#set-name");
const inputAddr = document.querySelector("#address");

const navUl = document.querySelector("#fav-link-nav ul");
const submitBtn = document.querySelector("fav-link-form input:last-child");

function paintLink(e) {
  e.preventDefault();

  function submitFavLink() {
    const title = document.createElement("li");
    const link = document.createElement("a");
    navUl.appendChild(title);
    title.appendChild(link);
    link.innerText = inputTitle.value;
    link.href = inputAddr.value;
    link.target = "_blank";
  }

  submitFavLink();
  console.log(inputAddr.value);
}

// 로컬스토리지에 저장, (타이틀,링크가 같은 옵젝에 저장. 옵젝은 어레이로 감쌈.)
// 드래그하면 삭제, (this element - li ,a 가 삭제)
// 삭제하면 저장된 리스트가 업데이트,

inputTitle.setAttribute("autocomplete", "off");
inputAddr.setAttribute("autocomplete", "off");
form.addEventListener("submit", paintLink);
