const apiKey = " bc325e418f4a4af3a5240145251608"
document.addEventListener("DOMContentLoaded", () => {
const apiKey = "bc325e418f4a4af3a5240145251608"
  const searchBtn = document.getElementById("searchBtn");
  const cityInput = document.getElementById("cityInput");
  const weatherResult = document.getElementById("weatherResult");

  searchBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();

    if (!city) {
      weatherResult.innerHTML = '<p class="error">  <i class="fa-solid fa-bomb"></i>  Iltimos, shahar nomini kiriting.</p>';
      return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        const weather = data.current;
        const location = data.location;

        weatherResult.innerHTML = `
          <h2>${location.name}, ${location.country}</h2>
          <p><i class="fa-solid fa-temperature-high"></i> Harorat: ${weather.temp_c} °C</p>
          <p><i class="fa-solid fa-wind"></i> Shamol tezligi: ${weather.wind_kph} km/soat</p>
          <p><i class="fa-regular fa-cloud"></i> Ob-havo: ${weather.condition.text}</p>
          <img src="https:${weather.condition.icon}" alt="Ob-havo rasmi">
        `;
        current
      } else {
        weatherResult.innerHTML = `<p class="error">${data.error.message}</p>`;
      }
    } catch (error) {
      weatherResult.innerHTML = `<p class="error">Xatolik: ${error.message}</p>`;
    }
  });
});