let map;
let marker;

function initializeMap() {
  if (!map) {
    map = L.map('map').setView([40.7128, -74.0060], 10);
    marker = L.marker([40.7128, -74.0060]).addTo(map).bindPopup('Your Location');

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);
  }
}

async function getWeather() {
  const cityInput = document.getElementById("cityInput");
  const city = cityInput.value;

  if (city.trim() === "") {
    alert("Please enter a city.");
    return;
  }

  const response = await fetch(`/weather/${city}`);
  const data = await response.json();

  displayWeather(data);

  cityInput.value = "";
}

function displayWeather(data) {
  const temperatureElement = document.getElementById("temperature");
  const descriptionElement = document.getElementById("description");
  const locationElement = document.getElementById("location");
  const infoContainer = document.getElementById("info");

  temperatureElement.textContent = `${data.current.temperature}°C`;
  descriptionElement.textContent = data.current.weather_descriptions[0];
  locationElement.textContent = `${data.location.name}, ${data.location.country}`;

  updateMap(data.location.lat, data.location.lon);

  displayAdditionalInfo(data, infoContainer);
}

function displayAdditionalInfo(data, targetContainer) {
  targetContainer.innerHTML = `
    <p>Wind Speed: ${data.current.wind_speed} m/s</p>
    <p>Wind degree: ${data.current.wind_degree} °</p>
    <p>Wind direction: ${data.current.wind_dir}</p>
    <p>Pressure: ${data.current.pressure} mb</p>
    <p>Humidity: ${data.current.humidity} %</p>
    <p>Feels Like: ${data.current.feelslike} °C</p>
    <p>Cloud cover: ${data.current.cloudcover} %</p>
    <p>Visibility: ${data.current.visibility}</p>
  `;
}

function updateMap(latitude, longitude) {
  initializeMap();

  const newLatLng = new L.LatLng(latitude, longitude);

  map.setView(newLatLng, map.getZoom());
  marker.setLatLng(newLatLng);
}

function handleEnterKey(event) {
  if (event.key === "Enter") {
    getWeather();
  }
}
