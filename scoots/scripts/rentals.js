const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#dataContainer");

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
  gridbutton.classList.add("active");
  listbutton.classList.remove("active");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
  listbutton.classList.add("active");
  gridbutton.classList.remove("active");
}

/* Control the data (API) */

//URL of Data
const url = "./scripts/rentals.json";

// Get the data
const getRentalsData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.rentals;
};

// Process the information (to manipulate)
const fetchDataAndDisplay = async () => {
  const rentals = await getRentalsData(url);
  displayRentals(rentals);
};

// Manipulate the data result
const displayRentals = (dataReceived) => {
  const dataContainer = document.getElementById("dataContainer"); // select the output container element

  dataReceived.forEach(({type,maxPersons, reservation,walkIn,image}) => {
    // Create elements to add to the dataContainer element
    let card = document.createElement("section");

	//Manipulate the DOM (card)
	if (maxPersons>1){ 
  card.innerHTML= `<h2>${type}</h2>
                  <p class="membership-level">Vehicle for ${maxPersons} persons</p>
                  <img src="${image}" alt="${type}" loading="lazy" width="340" height="440"></img>
                  <p class="website">Reservation <br> Half Day 3hrs: ${reservation.halfDay3Hrs} | Full Day: ${reservation.fullDay}</a></p>
                  <hr>
                  <p class="website">Walk In <br> Half Day 3hrs: ${walkIn.halfDay3Hrs} | Full Day: ${walkIn.fullDay}</a></p>
					        `
    // Append the section(card) with the created elements
    dataContainer.appendChild(card);
  }
  else{
    card.innerHTML= `<h2>${type}</h2>
    <p class="membership-level">Vehicle for ${maxPersons} person</p>
    <img src="${image}" alt="${type}" loading="lazy" width="340" height="440"></img>
    <p class="website">Reservation <br> Half Day 3hrs: ${reservation.halfDay3Hrs} | Full Day: ${reservation.fullDay}</a></p>
    <hr>
    <p class="website">Walk In <br> Half Day 3hrs: ${walkIn.halfDay3Hrs} | Full Day: ${walkIn.fullDay}</a></p>
    `
// Append the section(card) with the created elements
dataContainer.appendChild(card);
  }}); // end of forEach loop
}; // end of function expression

fetchDataAndDisplay();