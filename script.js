async function fetchWeather() {
  const locationInput = document.getElementById('locationInput').value;
  const apiKey = 'YOUR_API_KEY'; // Replace with your own API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <h2>Weather in ${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp} &#8451;</p>
      <p>Description: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
  }
}
