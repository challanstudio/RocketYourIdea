const flagBtn = document.querySelector("section[class='data_todo'] div button");
const flagIcon = document.querySelector(
  "section[class='data_todo'] div button i"
);

flagBtn.addEventListener("mouseenter", event => {
  flagIcon.className = "ri-flag-2-fill";
  flagIcon.classList.add("transition");
});
flagBtn.addEventListener("mouseleave", event => {
  flagIcon.className = "ri-flag-2-line";
});
