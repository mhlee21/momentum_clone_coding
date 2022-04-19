const API_KEY = "c382e4c6aed3e8668a7ac92ea59e7b30";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log("You live in", lat, lon);
  // https://openweathermap.org/
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);