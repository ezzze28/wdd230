const apiKey ="06a565b774ed19fb06294ca95add7836";
// Function to fetch weather data
async function fetchWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Cozumel&units=imperial&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Cozumel&units=imperial&appid=${apiKey}`;

    try {
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(apiUrl).then(response => response.json()),
            fetch(forecastUrl).then(response => response.json())
        ]);

        displayWeather(currentResponse, forecastResponse);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to display weather data
function displayWeather(currentData, forecastData) {
    const weatherMessage = document.getElementById('weather-message');
    const weatherDataElement = document.getElementById('weather-data');

    // Display high temperature for the current day
    const tempMax = currentData.main.temp_max;
    weatherMessage.textContent = `High Temperature Today: ${tempMax}°F`;

    // Display current temperature and humidity
    const currentTemp = currentData.main.temp;
    const currentHumidity = currentData.main.humidity;
    weatherDataElement.innerHTML = `
        <p>Current Temperature: ${currentTemp}°F </p>
        <p>Current Humidity: ${currentHumidity}%</p>
    `;

    // Find next day's forecasted temperature at 15:00 (3:00pm)
    const nextDayForecast = forecastData.list.find(item => {
        const date = new Date(item.dt * 1000); // Convert Unix timestamp to JavaScript Date object
        return date.getHours() === 15;
    });

    if (nextDayForecast) {
        const nextDayTemp = nextDayForecast.main.temp;
        weatherDataElement.innerHTML += `<p>Tomorrow's Forecast at 3:00pm: ${nextDayTemp}°F </p>`;
    }

    // Display all weather data points
    const weatherMain = currentData.weather[0].main;
    const weatherDescription = currentData.weather[0].description;
    const weatherIcon = currentData.weather[0].icon;
    weatherDataElement.innerHTML += `
        <p>Weather: ${weatherMain} (${weatherDescription})</p>
        <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherMain}">
    `;
}

// Fetch weather data when the page loads
fetchWeather();
