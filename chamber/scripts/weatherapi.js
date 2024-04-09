const temp = document.querySelector('#temperature');
const humid = document.querySelector('#humid')
const wind = document.querySelector('#windSpeed')
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption')
const eventSection = document.querySelector('#weather-card')
const threeFore = document.querySelector('#threedays')
const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-55.758&units=imperial&lon=-91.72&appid=1c7bef1e6ec014e641fdcf262cd7e6f2';
const directionURL = 'https://ezzze28.github.io/wdd230/chamber/scripts/directions.json'
const threeURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=-34.772&lon=-55.758&units=imperial&cnt=32&appid=1c7bef1e6ec014e641fdcf262cd7e6f2'

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data)
            displayResults(data);
            return data
        } else {
            throw Error(await response.text());
        }
    } 
    catch (error) {
        console.log(error);
    }
    
}

function displayResults(data) {
    temp.textContent = `${data.main.temp.toFixed(0)}`;
    humid.textContent = `${data.main.humidity}`;
    //wind.innerHTML = `${data.wind.speed}`;
    windData = data.wind;
    windDisplay(windData);
    const events = data.weather;
    //console.table(events);
    events.forEach(event => {
        const icon = event.icon;
        //console.log(icon)
        const iconsrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        let desc = event.description;
        fL = desc.charAt(0).toUpperCase();
        rest = desc.substring(1);
        weatherIcon.setAttribute('src',iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = `${fL}${rest}`;
    });
    
}

//wind function to calc and display wind speed and direction
function windDisplay(data) {
    direction = data.deg
    //if (direction )
    wind.textContent = `${data.speed}`;
    //console.log(data.speed)
}

//Function to display weather events
async function fetchThreeDay(url) {
  console.log("asohslaskdj");  
  try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data)
            //displayResults(data);
            displayThreeDay(data)
            //return data
        } else {
            throw Error(await response.text());
        }
    } 
    catch (error) {
        console.log(error);
    }
}

function displayThreeDay(data) {
    //console.log(data);
    const threeTemp = data.list[0].main.temp.toFixed(0);
    const threeHumid = data.list[0].main.humidity;
    const threeWind = data.list[0].wind.speed;
    const threeDeg = data.list[0].wind.deg;
    const today = findDay(data.list[0]);
    const cDay = today;
    //console.log(`temp: ${threeTemp} + Humid:${threeHumid} + wind: ${threeWind} + deg: ${threeDeg}`);
    //console.log(`day: ${today} + ms:${cDay}`);
    // Display events
    //console.log(data.list)
    // Calc three day forecast
    var conData = {};
    for (let i = 0; i < data.list.length; i++) {
        const entry = data.list[i];
        //console.log(entry)
        const entryDay = findDay(entry);
        //console.log(entryDay);
        if (!conData[entryDay]) {
            conData[entryDay] = {
                low: entry.main.temp_min,
                high: entry.main.temp_max,
                desc: entry.weather[0].description,
                icon: entry.weather[0].icon,
                
            }
            //console.log(`day: ${entryDay}; low: ${entry.main.temp_min}high: ${entry.main.temp_max},desc: ${entry.weather[0].description};icon: ${entry.weather[0].icon}`)
        } else {
            //console.log(`${i} ${entry.main.temp_min}`);
            if(entry.main.temp_min < conData[entryDay].low) {
                conData[entryDay].low = entry.main.temp_min
                //console.log(`Low Comp${entryDay}: List:${entry.main.temp_min} vs Consolidated:${conData[entryDay].low}`)
            }
            if (entry.main.temp_max > conData[entryDay].high){
                conData[entryDay].high = entry.main.temp_max
                //console.log(`High Comp${entryDay}: List:${entry.main.temp_max} vs Consolidated:${conData[entryDay].high}`)
            }
        }
        
    }

    //console.log(conData);

    let first = 1
    for (const indexDay in conData){
        if (first == 1 || first == 5) {
            first++;
            //console.log(first)
            continue;
        } else {
            const tempHigh = conData[indexDay].high;
            const tempLow = conData[indexDay].low;
            const foreDesc = conData[indexDay].desc;
            const foreIcon = conData[indexDay].icon;
            const section = document.createElement('section');
            const header = document.createElement('h4');
            const p = document.createElement('p');
            const fig = document.createElement('figure');
            const captionDesc = document.createElement('figcaption');
            var weatherIcon = document.createElement("img");
            const iconsrc = `https://openweathermap.org/img/wn/${foreIcon}.png`;
            header.textContent = indexDay;
            p.innerHTML = `High: ${tempHigh.toFixed(0)}&deg;F<br>Low: ${tempLow.toFixed(0)}&deg;F`;
            fL = foreDesc.charAt(0).toUpperCase();
            rest = foreDesc.substring(1);
            weatherIcon.setAttribute('src',iconsrc);
            weatherIcon.setAttribute('alt', foreDesc);
            captionDesc.textContent = `${fL}${rest}`;
            fig.appendChild(weatherIcon);
            fig.appendChild(captionDesc);
            section.appendChild(header);
            section.appendChild(p);
            section.appendChild(fig);
            //console.log(`${first} + ${indexDay} + ${tempHigh} + ${tempLow} + ${foreDesc} + ${foreIcon}`)
            threeFore.appendChild(section);
        }
        first++

    }
    
    
}

function findDay(data) {
    var ms = data.dt*1000;
    const date = new Date(ms);
    const day = date.getDay()
    const nameday = daysOfWeek[day];
    //console.log(nameday);
    return nameday
}

apiFetch(url);
fetchThreeDay(threeURL);