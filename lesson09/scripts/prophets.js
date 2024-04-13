//URL of Data
const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

// Get the data
const getProphetsData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.prophets;
};

// Process the information (to manipulate)
const fetchDataAndDisplay = async () => {
  const prophets = await getProphetsData(url);
  displayProphets(prophets);
};

// Manipulate the data result
const displayProphets = (dataReceived) => {
  const cardsContainer = document.getElementById("cardsContainer"); // select the output container element

  dataReceived.forEach((object) => {
    // Create elements to add to the cardsContainer element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let pBirthday = document.createElement("p");
    let pPlaceBirthday = document.createElement("p");
    let portrait = document.createElement("img");

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${object.name} ${object.lastname}`;

    // Build the p content out to show the prophet's Date of birth
    pBirthday.textContent = `Date of Birth: ${object.birthdate}`;

    // Build the p content out to show the prophet's Place of birth
    pPlaceBirthday.textContent = `Place of Birth: ${object.birthplace}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", object.imageurl);
    let termination;

    // Handle special cases for st,nd,rd and th terminations
    if (object.order % 10 === 1 && object.order !== 11) {
      termination = "st";
    } else if (object.order % 10 === 2 && object.order !== 12) {
      termination = "nd";
    } else if (object.order % 10 === 3 && object.order !== 13) {
      termination = "rd";
    } else {
      termination = "th";
    }

    portrait.setAttribute(
      "alt",
      `Portrait of ${object.name} ${object.lastname} - ${object.order}${termination} Latter-day President`
    );

    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(pBirthday);
    card.appendChild(pPlaceBirthday);
    card.appendChild(portrait);

    cardsContainer.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

fetchDataAndDisplay();