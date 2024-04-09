// Function to calculate wind chill
chill = document.getElementById('windChill')
//pChill = document.getElementById('chill')

function calculateWindChill(temperature, windSpeed) {
    
    //Check if temperature is less than or equal to 50
    // And Check if wind speed is greater than 3

    if (temperature <= 50 && windSpeed > 3.0) {
        let windChill = 35.74 + (0.6215 * temperature) -
        (35.75 * Math.pow(windSpeed, 0.16)) +
        (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2);
    }
    else{
        return 'N/A'
    }
}
// Get temp and wind chill from document
let temperature = document.getElementById('temperature').textContent
let windSpeed = document.getElementById('windSpeed').textContent
//console.log(`Temp: ${temperature} Wind: ${windSpeed}`)

//calculate windchiull and return to document
let windChill = calculateWindChill(temperature, windSpeed);
chill.textContent = windChill;