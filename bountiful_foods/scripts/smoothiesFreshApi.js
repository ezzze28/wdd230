// Control the data (API)

//const urlJson =   "./scripts/fruits.data.json";
const urlFetched =
  "https://brotherblazzard.github.io/canvas-content/fruit.json";

// Get the data
const getFruitsData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Process the information (to manipulate)
const fetchDataAndDisplay = async () => {
  try {
    const fruits = await getFruitsData(urlFetched);
    displayFruits(fruits);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // Check if the "Total Price Fruits" exists in localStorage
  if (!localStorage.getItem("Total Price Fruits")) {
    // Uncheck all fruit checkboxes
    const fruitCheckboxes = document.querySelectorAll('input[name="fruits"]');
    fruitCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
};

// Manipulate the data result
const displayFruits = (dataReceived) => {
  const fruitsContainer = document.getElementById("fruitsContainer");

  // Display the first 6 fruits
  const selectedFruits = dataReceived.slice(0, 6);
  let fruitsHTML = "";
  selectedFruits.forEach(({ name, nutritions }) => {
    // Price of fruits
    const fruitPrices = {
      Apple: 1,
      Apricot: 4,
      Avocado: 5,
      Banana: 7,
      Blackberry: 3,
      Blueberry: 5,
    };
    const price = fruitPrices[name]; // Get the price based on the fruit name

    // Nutritional information
    const { carbohydrates, protein, fat, calories, sugar } = nutritions;

    fruitsHTML += `
      <li class="optionRange-list">
        <label>
          <input type="checkbox" name="fruits" value="${price}">
          ${name}
        </label>
      </li>
    `;
  });

  fruitsContainer.innerHTML = fruitsHTML;

  // Add change event listener to fruit checkboxes
  const fruitCheckboxes = document.querySelectorAll('input[name="fruits"]');
  fruitCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", handleFruitCheckboxChange);
  });
};

// Handle fruit checkbox change
const handleFruitCheckboxChange = async () => {
  const checkedCheckboxes = document.querySelectorAll(
    'input[name="fruits"]:checked'
  );
  let fruitsTotal = 0;
  const selectedFruits = [];

  for (const checkbox of checkedCheckboxes) {
    const fruitName = checkbox.parentElement.textContent.trim();
    const fruitInfo = await getFruitNutrition(fruitName);

    if (fruitInfo) {
      fruitsTotal += parseInt(checkbox.value);
      selectedFruits.push({
        name: fruitName,
        nutrition: fruitInfo.nutritions
      });
    }
  }

  localStorage.setItem("Fruits Selected", JSON.stringify(selectedFruits));
  localStorage.setItem("Total Price Fruits", fruitsTotal.toString());

  totalPriceFruits.textContent = `$${fruitsTotal}.00`;
  totalPriceFruitsCheckout.textContent = `$${fruitsTotal}.00`;

  totalPriceCheckoutValue = calculateTotalPrice();
  totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;

  toggleRemainingFruitCheckboxes();
};

// Get the nutritional information of a fruit
const getFruitNutrition = async (fruitName) => {
  try {
    const response = await fetch(urlFetched);
    const fruitsData = await response.json();
    const fruitInfo = fruitsData.find((fruit) => fruit.name === fruitName);
    return fruitInfo;
  } catch (error) {
    console.error("Error fetching fruit data:", error);
    return null;
  }
};


// Toggle remaining fruit checkboxes
const toggleRemainingFruitCheckboxes = () => {
  const fruitCheckboxes = document.querySelectorAll('input[name="fruits"]');
  let checkedCount = 0;

  fruitCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedCount++;
    }
  });

  fruitCheckboxes.forEach((checkbox) => {
    if (!checkbox.checked && checkedCount >= 3) {
      checkbox.disabled = true;
    } else {
      checkbox.disabled = false;
    }
  });
};

// Rest of the code...

fetchDataAndDisplay();
toggleRemainingFruitCheckboxes();
