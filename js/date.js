const TodayIs = document.querySelector("#greeting_date span:first-child");
const clock = document.querySelector("#greeting_date span:last-child");
function nowClock() {
  const now = new Date();
  const month = String(now.getMonth());
  const date = String(now.getDate());
  const day = String(now.getDay());
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const nameOfDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const nameOfMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Now",
    "Dec",
  ];
  clock.innerText = `${hours}:${minutes}`;
  TodayIs.innerText = `${nameOfMonth[month]}, ${date}, ${nameOfDay[day]}`;
}

nowClock();
setInterval(nowClock, 1000);
