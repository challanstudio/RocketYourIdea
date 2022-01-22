const colors = [
  "#E6C19B",
  "#A5CA9B",
  "#78CA9A",
  "#C2B19A",
  "#C2B1AE",
  "#C2B1BD",
  "#CEB1BD",
  "#CE98BD",
  "#CE9878",
  "#AD7F65",
  "#83CA9B",
  "#836A9B",
  "#536A9B",
  "#5A72AE",
  "#E6C1B3",
];

const directions = ["left", "right", "left top", "right top"];

const body = document.body;
const inputs = document.querySelectorAll("input");

const start = colors[Math.floor(Math.random() * colors.length)];
const middle = colors[Math.floor(Math.random() * colors.length)];
const last = colors[Math.floor(Math.random() * colors.length)];
const direction = directions[Math.floor(Math.random() * directions.length)];

function changeColor() {
  const number = Math.floor(Math.random() * 100);
  body.style.backgroundImage = `linear-gradient(to ${direction}, ${start}, ${middle}, ${last})`;
}

window.addEventListener("load", changeColor);
