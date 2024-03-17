const apiKey = "06a565b774ed19fb06294ca95add7836";

const url = "https://api.openweathermap.org/data/2.5/weather";

const latitude = -34.772;
const longitude = -55.758;

const queryParam = `?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

const fullUrl = `${url}${queryParam}`;
console.log(fullUrl);

async function apiFetch() {
  try {
    const response = await fetch(fullUrl);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconSrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}
