const form = document.querySelector("#fav-link-form");
const inputTitle = document.querySelector("#set-link-title");
const inputAddr = document.querySelector("#set-link-addr");

const navUl = document.querySelector("#fav-link-nav ul");
const submitBtn = document.querySelector("fav-link-form input:last-child");

// 로컬스토리지에 저장, (타이틀,링크가 같은 옵젝에 저장. 옵젝은 어레이로 감쌈.)
// 드래그하면 삭제, (this element - li ,a 가 삭제)
// 삭제하면 저장된 리스트가 업데이트,
let storageArray = [];

function saveLink() {
  localStorage.setItem("FAV LINK", JSON.stringify(storageArray));
}

function submitLink(e) {
  e.preventDefault();
  const favLinkInfo = {
    title: inputTitle.value,
    link: inputAddr.value,
    id: Date.now(),
  };
  storageArray.push(favLinkInfo);
  // title.id = favLinkInfo.id;
  paintLink(favLinkInfo);
  saveLink();
  inputTitle.value = "";
  inputAddr.value = "http://";
}

function paintLink(elem) {
  const listNode = document.createElement("li");
  const link = document.createElement("a");
  navUl.appendChild(listNode);
  listNode.appendChild(link);
  listNode.id = elem.id;
  link.innerText = elem.title;
  link.href = elem.link;
  link.target = "_blank";
  listNode.addEventListener("dragend", deleteLink);
}
//"드래그"를 정의, 영역 정의, 해당(주소) 요소를 제외한 나머지 어레이를 재호출

function deleteLink(event) {
  const titleBox = event.target.parentElement;
  titleBox.remove();
  storageArray = storageArray.filter(
    restLink => restLink.id !== parseInt(titleBox.id)
  );
  saveLink();
}

// 저장된 항목이 계속 보여야해
const savedLinks = localStorage.getItem("FAV LINK");
if (savedLinks !== null) {
  const parseLinks = JSON.parse(savedLinks);
  storageArray = parseLinks;
  parseLinks.forEach(paintLink);
}

form.addEventListener("submit", submitLink);
