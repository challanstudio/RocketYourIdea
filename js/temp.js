const API_KEY = "c71a5abf7e77ff0a2d2164416bf2dfe2";

// function getSavedGeo() {
//   const value = localStorage.getItem("GEO");
//   const localValue = JSON.parse(value);
//   const lat = localValue.lat;
//   const lon = localValue.lon;
//   const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       const tempSpan = document.querySelector("#temp");
//       const citySpan = document.querySelector("#city");
//       const weatherSpan = document.querySelector("#temp-iconbox span");
//       const iconBox = document.querySelector("#temp-iconbox");
//       const weatherImg = document.createElement("img");
//       iconBox.appendChild(weatherImg);
//       const icons = data.weather[0].icon;
//       tempSpan.innerText = `${Math.round(parseInt(data.main.temp))}°C`;
//       weatherImg.src = `http://openweathermap.org/img/wn/${icons}@2x.png`;
//       weatherSpan.innerText = `${data.weather[0].main}`;
//       citySpan.innerText = `in ${data.name}`;
//     });
// }

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const tempSpan = document.querySelector("#temp");
      const citySpan = document.querySelector("#city");
      const weatherSpan = document.querySelector("#temp-iconbox span");
      const iconBox = document.querySelector("#temp-iconbox");
      const weatherImg = document.createElement("img");
      iconBox.appendChild(weatherImg);
      const icons = data.weather[0].icon;
      tempSpan.innerText = `${Math.round(parseInt(data.main.temp))}°C`;
      weatherImg.src = `http://openweathermap.org/img/wn/${icons}@2x.png`;
      weatherSpan.innerText = `${data.weather[0].main}`;
      citySpan.innerText = `in ${data.name}`;
      // saveGeo();

      // function saveGeo() {
      //   const userGeo = {
      //     lat: position.coords.latitude,
      //     lon: position.coords.longitude,
      //   };
      //   localStorage.setItem("GEO", JSON.stringify(userGeo));
      // }
    });
}

function error() {
  alert("We couldn't find you");
}

// if (localStorage.getItem("GEO") === null) {
navigator.geolocation.getCurrentPosition(success, error);
// } else {
//   getSavedGeo();
// }
