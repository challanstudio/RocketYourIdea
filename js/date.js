const TodayIs = document.getElementById("dateJs");
const clock = document.getElementById("clockJs");
function nowClock() {
  const now = new Date();
  const month = String(now.getMonth());
  const date = String(now.getDate());
  const day = String(now.getDay());
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const nameOfDay = ["일", "월", "화", "수", "목", "금", "토"];
  clock.innerText = `${hours}:${minutes}`;
  TodayIs.innerText = `${parseInt(month) + 1}월 ${date}일 ${
    nameOfDay[day]
  }요일`;
}

nowClock();
setInterval(nowClock, 1000);
