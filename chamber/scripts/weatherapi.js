//Get the url to weather API
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=imperial&q=Texas&appid={API_key}";
const lat = 31.9686;
const lon = -99.9018;
const apiKey = "1c7bef1e6ec014e641fdcf262cd7e6f2";
const updatedUrl = url
  .replace("{lat}", lat)
  .replace("{lon}", lon)
  .replace("{API_key}", apiKey);

//Get the data
const apiFetch = async () => {
  try {
    const response = await fetch(updatedUrl);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
};

//Display the data
const displayResults = (weatherData) => {
  //Select HTML in the DOM
  const weatherApi = document.getElementById("weather");

  weatherApi.innerHTML = `
                        <div class="gridAreatitle">
                        <h2>Weather</h2>
                      </div>
                      <div class="gridAreaContent">
                        <div class="grades">
                          <img
                            src=""
                            alt=""
                            id="weatherStatusImg"
                          />
                          <span id="weatherDegree"></span>
                        </div>
                        <span id="weatherStatus"></span>
                        <hr />
                        <div class="stadistics">
                          <ul>
                            <li>
                              <span>Wind speed:</span>
                              <span id="windSpeed"></span>
                            </li>
                            <li>
                              <span>Wind chill:</span>
                              <span id="windChill"></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                        `;
  //Get the elements made in the innerHTML
  const currentTemp = document.getElementById("weatherDegree");
  const weatherIcon = document.getElementById("weatherStatusImg");
  const captionDesc = document.getElementById("weatherStatus");
  const windSpeed = document.getElementById("windSpeed");
  const windChill = document.getElementById("windChill");

  //Manipulate the elements made in the innerHTML

  //Grades
  //convert °f to °c
  const celsiusTemperature = (weatherData.main.temp.toFixed(0) / 9) * 5 - 32;
  currentTemp.innerHTML = `<span>${celsiusTemperature.toFixed(
    0
  )} &deg;C</span>`;

  //Image and description
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  //Capitalize the words in the description
  const descCapitalized = desc.replace(/\b\w/g, (c) => c.toUpperCase());
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", descCapitalized);
  captionDesc.textContent = descCapitalized;

  //Wind spped
  windSpeed.textContent = `${weatherData.wind.speed} km/h`;

  //Wind chill
  const windSpeedKmph = parseFloat(
    document.getElementById("windSpeed").textContent.replace("km/h", "")
  );
  const windChillSpan = document.getElementById("windChill");
  
  //Formula of wind chill
  const windChillFunction = (tempCelsius, windMph) => {
    return (
      35.74 +
      0.6215 * tempCelsius -
      35.75 * Math.pow(windMph, 0.16) +
      0.4275 * tempCelsius * Math.pow(windMph, 0.16)
    ).toFixed(2);
  };
  
  //convert °c to °f
  const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  //convert km/h to m/hs
  const windSpeedMph = windSpeedKmph / 1.60934;
  
  //Valid range to Wind chill
  if (fahrenheitTemperature >= 50 && windSpeedMph > 3.0) {
    //Output
    windChillSpan.textContent = `${windChillFunction(celsiusTemperature, windSpeedMph)}`;
  } else {
    windChillSpan.textContent = "N/A";
  }
  
};

//Display the API
apiFetch();
