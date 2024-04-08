/* Control the data (API) */

//URL of Data
const urlJson = "./scripts/data.json";

// Get the data
const getSmoothiesData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.smoothies;
};

// Process the information (to manipulate)
const fetchDataAndDisplay = async () => {
  const smoothies = await getSmoothiesData(urlJson);
  displaySmoothies(smoothies);
};

// Manipulate the data result
const displaySmoothies = (dataReceived) => {
  const spotlightsContainer = document.getElementById("spotlights");

  // Function to shuffle the array using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Filter and shuffle the companies
  const filteredSmoothies = dataReceived.filter(({ name }) => name !== "");
  const shuffledSmoothies = shuffleArray(filteredSmoothies);

  // Display the first 3 shuffled companies
  const selectedSmoothies = shuffledSmoothies.slice(0, 3);

  selectedSmoothies.forEach(({ name, description, src, ingredients }, i) => {
    // Create elements to add to the spotlightsContainer element
    let spotlight = document.createElement("div");
    spotlight.setAttribute("class", `gridArea${i + 6}`);
    spotlight.setAttribute("id", `spotlight${i + 1}`);
    spotlight.innerHTML = `
    <div class="gridAreatitle">
      <h2>${name}</h2>
    </div>
    <div class="gridAreaContent">
      <img src="${src}" alt="Smoothie of ${name}" loading="lazy" width="340" height="440"></img>
      <p class="spotlightsSlogan">
      <p class="aditional-info">${description}</p>
      </p>
      <p class="website"><a href="#">Taste it</a></p>
    </div>
  `;

    // Append the spotlight element to the spotlightsContainer
    spotlightsContainer.appendChild(spotlight);
  }); // end of forEach loop
}; // end of function expression

fetchDataAndDisplay();
