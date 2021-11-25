/** @format */

const x = document.getElementById("ce");
const apikey = "3265874a2c77ae4a04bb96236a642d2f";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  lat = (Math.round(lat * 100) / 100).toFixed(2);
  long = (Math.round(long * 100) / 100).toFixed(2);

  const mas = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}`;
  console.log(mas);
  fetch(mas)
    .then((response) => response.json())
    .then((data) => {
      const grade =Math.trunc(data.main.temp - 273.15);
      console.log(data)
      const name = data.name
      x.innerHTML= `<p>Astazi in ${name} sunt ${grade}&#176;C</p>
      <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
      
      `
    });
}

getLocation();
