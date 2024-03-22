/* Control the data (API) */

//URL of Data
const urlJson = "./scripts/data.json";

// Get the data
const getCompaniesData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.companies;
};

// Process the information (to manipulate)
const fetchDataAndDisplay = async () => {
  const companies = await getCompaniesData(urlJson);
  displayCompanies(companies);
};

// Manipulate the data result
const displayCompanies = (dataReceived) => {
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
  const filteredCompanies = dataReceived.filter(
    ({ membership_level }) =>
      membership_level === "Silver" || membership_level === "Gold"
  );
  const shuffledCompanies = shuffleArray(filteredCompanies);

  // Display the first 3 shuffled companies
  const selectedCompanies = shuffledCompanies.slice(0, 3);

  selectedCompanies.forEach(
    ({ name, email, phone, image, url, additional_information }, i) => {
      // Create elements to add to the spotlightsContainer element
      let spotlight = document.createElement("div");
      spotlight.setAttribute("class", `gridArea${i + 6}`);
      spotlight.setAttribute("id", `spotlight${i + 1}`);
      spotlight.innerHTML = `
    <div class="gridAreatitle">
      <h2>${name}</h2>
    </div>
    <div class="gridAreaContent">
      <img src="${image}" alt="Logo of ${name}" loading="lazy" width="340" height="440"></img>
      <p class="spotlightsSlogan">
        <p class="aditional-info">${additional_information}</p>
      </p>
      <hr />
      <p class="email">${email}</p>
      <p class="website">+${phone} | <a href="${url}">Website</a></p>
    </div>
  `;

      // Append the spotlight element to the spotlightsContainer
      spotlightsContainer.appendChild(spotlight);
    }
  ); // end of forEach loop
}; // end of function expression

fetchDataAndDisplay();
