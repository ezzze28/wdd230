//Remove localStorage key when the page reload
document.addEventListener("DOMContentLoaded", () => {
  localStorage.removeItem("Total Price Fruits");
  localStorage.removeItem("Fruits Selected");
  localStorage.removeItem("Vegetables Selected");
  localStorage.removeItem("Creams/Jams Selected");
  localStorage.removeItem("Size Selected");
  localStorage.removeItem("Sherbet");
  localStorage.removeItem("Ice");
});

//-------------------------------- /* Checkout */ ------------------------------------
const totalPriceCheckout = document.getElementById("totalPrice");
let totalPriceCheckoutValue = 0;
//-------------------------------- /* Checkout */ ------------------------------------

/* Fruits */
// Get element in checkout
const totalPriceFruitsCheckout = document.getElementById("optionFruits");

// Get chekbox (fruits)
const checkboxesFruit = document.querySelectorAll(
  '#fruitsOptionsContainer input[type="checkbox"]'
);
const maxFruitsChecked = 3; // Maximum number of fruits to be checked

// Change the value per each change in checkout
checkboxesFruit.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    let checkedCount = 0; // Track the number of checkboxes checked

    checkboxesFruit.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    if (checkedCount >= maxFruitsChecked) {
      // Disable the remaining unchecked checkboxes
      checkboxesFruit.forEach((checkbox) => {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        }
      });
    } else {
      // Enable all checkboxes
      checkboxesFruit.forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }

    // Calculate the total price and update the display
    let totalPrice = 0;
    checkboxesFruit.forEach((checkbox) => {
      if (checkbox.checked) {
        const fruit = checkbox.value;
        const price = fruitPrices[fruit];
        totalPrice += price;
      }
    });
    totalPriceFruits.textContent = `$${totalPrice}.00`;
    totalPriceFruitsCheckout.textContent = `$${totalPrice}.00`;
    totalPriceCheckoutValue = calculateTotalPrice();
    totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;
  });
});

/* Vegetables */
// Get element in checkout
const totalPriceVegetablesCheckout =
  document.getElementById("optionVegetables");

// Price of vegetables
const vegetablesPrices = {
  Carrot: 1,
  Celery: 4,
  Ginger: 5,
  Kale: 7,
  Pepper: 3,
  Spinach: 5,
};

// Get chekbox (vegetables)
const checkboxesVegetables = document.querySelectorAll(
  '#vegetablesOptionsContainer input[type="checkbox"]'
);
const maxVegetablesChecked = 3; // Maximum number of vegetables to be checked

// Change the value for each change in checkout
checkboxesVegetables.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    let checkedCount = 0; // Track the number of checkboxes checked

    checkboxesVegetables.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    if (checkedCount >= maxVegetablesChecked) {
      // Disable the remaining unchecked checkboxes
      checkboxesVegetables.forEach((checkbox) => {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        }
      });
    } else {
      // Enable all checkboxes
      checkboxesVegetables.forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }

    // Calculate the total price and update the display
    let totalPrice = 0;
    checkboxesVegetables.forEach((checkbox) => {
      if (checkbox.checked) {
        const vegetable = checkbox.value;
        const price = vegetablesPrices[vegetable];
        totalPrice += price;
      }
    });
    totalPriceVegetables.textContent = `$${totalPrice}.00`;
    totalPriceVegetablesCheckout.textContent = `$${totalPrice}.00`;
    totalPriceCheckoutValue = calculateTotalPrice();
    totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;
  });
});

/* Creams & Jams */
// Get element in checkout
const totalPriceCreamsJamsCheckout =
  document.getElementById("optionCreamsJams");

// Price of Creams / Jams
const creamsJamsPrices = {
  Caramel: 2,
  Chocolate: 3,
  Coconut: 5,
  Honey: 2,
  Peach: 3,
  Strawberry: 5,
};

// Get chekbox (creams & jams)
const checkboxesCreamsJams = document.querySelectorAll(
  '#creamsJamsOptionsContainer input[type="checkbox"]'
);
const maxCreamsJamsChecked = 2; // Maximum number of creams & jams to be checked

// Change the value for each change in checkout
checkboxesCreamsJams.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    let checkedCount = 0; // Track the number of checkboxes checked

    checkboxesCreamsJams.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    if (checkedCount >= maxCreamsJamsChecked) {
      // Disable the remaining unchecked checkboxes
      checkboxesCreamsJams.forEach((checkbox) => {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        }
      });
    } else {
      // Enable all checkboxes
      checkboxesCreamsJams.forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }

    // Calculate the total price and update the display
    let totalPrice = 0;
    checkboxesCreamsJams.forEach((checkbox) => {
      if (checkbox.checked) {
        const creamsJams = checkbox.value;
        const price = creamsJamsPrices[creamsJams];
        totalPrice += price;
      }
    });
    totalPriceCreamsJams.textContent = `$${totalPrice}.00`;
    totalPriceCreamsJamsCheckout.textContent = `$${totalPrice}.00`;
    totalPriceCheckoutValue = calculateTotalPrice();
    totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;
  });
});

/* Sizes */
// Get element in checkout
const totalPriceSizesCheckout = document.getElementById("optionSize");

// Price of sizes
const sizesPrices = {
  Small: 1,
  Medium: 2,
  Large: 3,
  XL: 4,
  XXL: 5,
  XXXL: 6,
};

// Get chekbox (sizes)
const checkboxesSizes = document.querySelectorAll(
  '#sizeOptionsContainer input[type="checkbox"]'
);
const maxSizesChecked = 1; // Maximum number of sizes to be checked

// Change the value for each change in checkout
checkboxesSizes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    let checkedCount = 0; // Track the number of checkboxes checked

    checkboxesSizes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCount++;
      }
    });

    if (checkedCount >= maxSizesChecked) {
      // Disable the remaining unchecked checkboxes
      checkboxesSizes.forEach((checkbox) => {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        }
      });
    } else {
      // Enable all checkboxes
      checkboxesSizes.forEach((checkbox) => {
        checkbox.disabled = false;
      });
    }

    // Calculate the total price and update the display
    let totalPrice = 0;
    checkboxesSizes.forEach((checkbox) => {
      if (checkbox.checked) {
        const size = checkbox.value;
        const price = sizesPrices[size];
        totalPrice += price;
      }
    });
    totalPriceSizes.textContent = `$${totalPrice}.00`;
    totalPriceSizesCheckout.textContent = `$${totalPrice}.00`;
    totalPriceCheckoutValue = calculateTotalPrice();
    totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;
  });
});

/* Sherbets */
// Get element in checkout
const totalPriceSherbetCheckout = document.getElementById("optionSherbets");

// Get the range
const sherbetToggle = document.getElementById("sherbetToggle");

// Get the total price
const totalPriceSherbets = document.getElementById("totalSherbets");

sherbetToggle.addEventListener("input", () => {
  // Get the value of the range
  const sherbetAmount = sherbetToggle.value;

  // Calculate the total
  const totalPriceSherbetsUpdated = sherbetAmount * 1;

  // Update the final price
  totalPriceSherbets.textContent = `$${totalPriceSherbetsUpdated}.00`;
  totalPriceSherbetCheckout.textContent = `$${totalPriceSherbetsUpdated}.00`;
  totalPriceCheckoutValue = calculateTotalPrice();
  totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;
});

/* Ices */
// Get element in checkout
const totalPriceIcesCheckout = document.getElementById("optionIces");

// Get the range
const iceToggle = document.getElementById("icesToggle");

// Get the total price
const totalPriceIces = document.getElementById("totalPriceIces");

iceToggle.addEventListener("input", () => {
  // Get the value of the range
  const iceAmount = iceToggle.value;

  // Calculate the total
  const totalPriceIcesUpdated = iceAmount * 1;

  // Update the final price
  totalPriceIces.textContent = `$${totalPriceIcesUpdated}.00`;
  totalPriceIcesCheckout.textContent = `$${totalPriceIcesUpdated}.00`;
  totalPriceCheckoutValue = calculateTotalPrice();
  totalPriceCheckout.textContent = `$${totalPriceCheckoutValue}.00`;
});

/* ---------------------------------- Calculate dinamically the final price ---------------------------------- */

// Calculate the final price
const calculateTotalPrice = () => {
  let totalPrice = 0;

  // Obtener el valor de la clave "Total Price Fruits" del localStorage
  if (localStorage.getItem("Total Price Fruits")) {
    const totalPriceFruitsValue = parseInt(
      localStorage.getItem("Total Price Fruits")
    );
    totalPrice += totalPriceFruitsValue;
  }

  checkboxesVegetables.forEach((checkbox) => {
    const vegetable = checkbox.value;
    const price = vegetablesPrices[vegetable];

    if (checkbox.checked) {
      totalPrice += price;

      // Get the selected vegetables array from localStorage
      let vegetablesSelected = [];
      if (localStorage.getItem("Vegetables Selected")) {
        vegetablesSelected = JSON.parse(
          localStorage.getItem("Vegetables Selected")
        );
      }

      // Check if the vegetable is already present in the array
      if (!vegetablesSelected.includes(vegetable)) {
        // Add the selected vegetable to the array
        vegetablesSelected.push(vegetable);

        // Save the selected vegetables array to localStorage
        localStorage.setItem(
          "Vegetables Selected",
          JSON.stringify(vegetablesSelected)
        );
      }
    } else {
      // Get the selected vegetables array from localStorage
      let vegetablesSelected = [];
      if (localStorage.getItem("Vegetables Selected")) {
        vegetablesSelected = JSON.parse(
          localStorage.getItem("Vegetables Selected")
        );
      }

      // Check if the vegetable is present in the array
      const index = vegetablesSelected.indexOf(vegetable);
      if (index > -1) {
        // Remove the vegetable from the array
        vegetablesSelected.splice(index, 1);

        // Save the selected vegetables array to localStorage
        localStorage.setItem(
          "Vegetables Selected",
          JSON.stringify(vegetablesSelected)
        );
      }
    }
  });

  checkboxesCreamsJams.forEach((checkbox) => {
    const creamsJams = checkbox.value;
    const price = creamsJamsPrices[creamsJams];

    if (checkbox.checked) {
      totalPrice += price;

      // Get the selected creams/jams array from localStorage
      let creamsJamsSelected = [];
      if (localStorage.getItem("Creams/Jams Selected")) {
        creamsJamsSelected = JSON.parse(
          localStorage.getItem("Creams/Jams Selected")
        );
      }

      // Check if the creams/jams item is already present in the array
      if (!creamsJamsSelected.includes(creamsJams)) {
        // Add the selected creams/jams item to the array
        creamsJamsSelected.push(creamsJams);

        // Save the creams/jams array to localStorage
        localStorage.setItem(
          "Creams/Jams Selected",
          JSON.stringify(creamsJamsSelected)
        );
      }
    } else {
      // Get the selected creams/jams array from localStorage
      let creamsJamsSelected = [];
      if (localStorage.getItem("Creams/Jams Selected")) {
        creamsJamsSelected = JSON.parse(
          localStorage.getItem("Creams/Jams Selected")
        );
      }

      // Check if the creams/jams item is present in the array
      const index = creamsJamsSelected.indexOf(creamsJams);
      if (index > -1) {
        // Remove the creams/jams item from the array
        creamsJamsSelected.splice(index, 1);

        // Save the creams/jams array to localStorage
        localStorage.setItem(
          "Creams/Jams Selected",
          JSON.stringify(creamsJamsSelected)
        );
      }
    }
  });

  checkboxesSizes.forEach((checkbox) => {
    const sizes = checkbox.value;
    const price = sizesPrices[sizes];

    if (checkbox.checked) {
      totalPrice += price;

      // Get the selected creams/jams array from localStorage
      let sizeSelected = [];
      if (localStorage.getItem("Size Selected")) {
        sizeSelected = JSON.parse(localStorage.getItem("Size Selected"));
      }

      // Check if the creams/jams item is already present in the array
      if (!sizeSelected.includes(sizes)) {
        // Add the selected creams/jams item to the array
        sizeSelected.push(sizes);

        // Save the creams/jams array to localStorage
        localStorage.setItem("Size Selected", JSON.stringify(sizeSelected));
      }
    } else {
      // Get the selected creams/jams array from localStorage
      let sizeSelected = [];
      if (localStorage.getItem("Size Selected")) {
        sizeSelected = JSON.parse(localStorage.getItem("Size Selected"));
      }

      // Check if the creams/jams item is present in the array
      const index = sizeSelected.indexOf(sizes);
      if (index > -1) {
        // Remove the creams/jams item from the array
        sizeSelected.splice(index, 1);

        // Save the creams/jams array to localStorage
        localStorage.setItem("Size Selected", JSON.stringify(sizeSelected));
      }
    }
  });

  const sherbetAmount = sherbetToggle.value;
  const totalPriceSherbetsUpdated = sherbetAmount * 1;
  totalPrice += totalPriceSherbetsUpdated;

  if (sherbetAmount == 1) {
    localStorage.setItem("Sherbet", "Yes");
  } else {
    localStorage.removeItem("Sherbet");
  }

  const iceAmount = iceToggle.value;
  const totalPriceIcesUpdated = iceAmount * 1;
  totalPrice += totalPriceIcesUpdated;

  if (iceAmount == 1) {
    localStorage.setItem("Ice", "Yes");
  } else {
    localStorage.removeItem("Ice");
  }
  return totalPrice;
};

/*--------------------------------------------- Take order --------------------------------------------- */
const submitSmoothie = document.getElementById("submitSmoothie");
let Orderscounter = 0;
let finalPrice = calculateTotalPrice();

//Receive info from localStorage (quantity of smoothies taken)
//and remplace the value (let Orderscounter = 0;)
if (localStorage.getItem("Quantity of Smoothies Taken")) {
  Orderscounter = parseInt(localStorage.getItem("Quantity of Smoothies Taken"));
}

//Receive the info from the form to send an output
outputClientName = "";
outputClientEmail = "";
outputClientPhone = "";
outputClientComments = "";

//Send order
submitSmoothie.addEventListener("click", () => {
  //If price is more than $0.00
  if (calculateTotalPrice() > 0) {
    const showOrderModal = () => {
      Swal.fire({
        // Text in the alert
        title: `<h3 style="justify-content: center;color: #ffffff;">Review and Confirm</h3>`,
        // Properties
        focusConfirm: false,
        showClass: { popup: "animate__animated animate__fadeInDown" },
        hideClass: { popup: "animate__animated animate__fadeOutUp" },
        confirmButtonColor: "#5ef3a9",
        confirmButtonText: "Confirm",
        background: "linear-gradient(to right, #016131, #028d48, #016131)",
        color: "#fff",
        allowOutsideClick: false,
        showDenyButton: true,
        denyButtonText: `Cancel`,
        denyButtonColor: "#f77b86",
        customClass: {
          confirmButton: "swal2-confirm",
          denyButton: "swal2-confirm",
        },
        // Create an HTML format
        html: `<label><b style="color: #ffffff;">First name</b></label><br><input type="text" id="swal-input1" class="swal2-input">
          <br><label><b style="color: #ffffff;">Email</b></label><br><input type="email" id="swal-input2" class="swal2-input">
          <br><label><b style="color: #ffffff;">Phone number</b></label><br><input type="tel" id="swal-input3" class="swal2-input">
          <br><label><b style="color: #ffffff;">Comments</b><h6 style="color: #ffffff;">(optional)</h6></label><br><input type="text"  id="swal-input4" class="swal2-input">`,
        // When you enter the values

        preConfirm: () => {
          return [
            (clientName = document.getElementById("swal-input1").value),
            (clientEmail = document.getElementById("swal-input2").value),
            (clientPhone = document.getElementById("swal-input3").value),
            (clientComments = document.getElementById("swal-input4").value),
            //Save out the scope
            (outputClientName = clientName),
            (outputClientEmail = clientEmail),
            (outputClientPhone = clientPhone),
            (outputClientComments = clientComments),
          ];
        },
      }).then((result) => {
        if (result.isConfirmed) {
          const inputIds = ["swal-input1", "swal-input2", "swal-input3"];
          let isEmpty = false;

          for (let i = 0; i < inputIds.length; i++) {
            const input = document.getElementById(inputIds[i]);
            if (input.value.trim() === "") {
              isEmpty = true;
              break;
            }
          }

          if (isEmpty) {
            Swal.fire({
              title: "Please fill in all the fields",
              icon: "warning",
              allowOutsideClick: false,
              confirmButtonColor: "#5ef3a9",
              padding: "1.7rem",
              confirmButtonText: "Confirm",
              customClass: {
                confirmButton: "swal2-confirm",
                denyButton: "swal2-confirm",
              },
              background:
                "linear-gradient(to right, #016131, #028d48, #016131)",
              color: "#fff",
            }).then(() => {
              showOrderModal(); // Show the modal again if fields are not filled
            });
            return;
          }

          const Toast = Swal.mixin({
            toast: true,
            position: "center",
            showConfirmButton: false,
            background: "linear-gradient(to right, #016131, #028d48, #016131)",
            color: "#fff",
            padding: "1.7rem",
            timer: 4000,
            timerProgressBar: true,
          });

          Toast.fire({
            title: "Sending order...",
          }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              // Update the quantity taken in localStorage
              Orderscounter++;
              localStorage.setItem(
                "Quantity of Smoothies Taken",
                Orderscounter
              );

              const Toast = Swal.mixin({
                toast: true,
                position: "center",
                showConfirmButton: false,
                background:
                  "linear-gradient(to right, #016131, #028d48, #016131)",
                color: "#fff",
                padding: "1.7rem",
                timer: 8000,
                hideClass: "",
              });

              // Save arrays to manipulate in render (inner HTML)
              const fruitsArray = JSON.parse(
                localStorage.getItem("Fruits Selected")
              );
              const selectedFruitNames = fruitsArray.map((fruit) => fruit.name);
              const selectedFruitNutritions = fruitsArray.map(
                (fruit) => fruit.nutrition
              );

              const vegetablesArray = JSON.parse(
                localStorage.getItem("Vegetables Selected")
              );
              const creamsJamsArray = JSON.parse(
                localStorage.getItem("Creams/Jams Selected")
              );
              const sizesArray = JSON.parse(
                localStorage.getItem("Size Selected")
              );

              const sherbetOption = localStorage.getItem("Sherbet");
              const iceOption = localStorage.getItem("Ice");

              if (
                (selectedFruitNames && selectedFruitNames.length >= 1) ||
                (vegetablesArray && vegetablesArray.length >= 1) ||
                (creamsJamsArray && creamsJamsArray.length >= 1) ||
                (sizesArray && sizesArray.length >= 1) ||
                sherbetOption ||
                iceOption
              ) {
                let fruitsString;
                let vegetablesString;
                let creamsJamsString;
                let sizesString;
                let sherbetString;
                let iceString;

                if (
                  selectedFruitNames &&
                  Array.isArray(selectedFruitNames) &&
                  selectedFruitNames.length > 1
                ) {
                  fruitsString = selectedFruitNames.join(", ");
                } else if (
                  selectedFruitNames &&
                  Array.isArray(selectedFruitNames) &&
                  selectedFruitNames.length === 1
                ) {
                  fruitsString = selectedFruitNames[0];
                }

                if (
                  vegetablesArray &&
                  Array.isArray(vegetablesArray) &&
                  vegetablesArray.length > 1
                ) {
                  vegetablesString = vegetablesArray.join(", ");
                } else if (
                  vegetablesArray &&
                  Array.isArray(vegetablesArray) &&
                  vegetablesArray.length === 1
                ) {
                  vegetablesString = vegetablesArray[0];
                }

                if (
                  creamsJamsArray &&
                  Array.isArray(creamsJamsArray) &&
                  creamsJamsArray.length > 1
                ) {
                  creamsJamsString = creamsJamsArray.join(", ");
                } else if (
                  creamsJamsArray &&
                  Array.isArray(creamsJamsArray) &&
                  creamsJamsArray.length === 1
                ) {
                  creamsJamsString = creamsJamsArray[0];
                }

                if (
                  sizesArray &&
                  Array.isArray(sizesArray) &&
                  sizesArray.length > 1
                ) {
                  sizesString = sizesArray.join(", ");
                } else if (
                  sizesArray &&
                  Array.isArray(sizesArray) &&
                  sizesArray.length === 1
                ) {
                  sizesString = sizesArray[0];
                }

                if (sherbetOption) {
                  sherbetString = "Yes";
                } else {
                  sherbetString = "No";
                }

                if (iceOption) {
                  iceString = "Yes";
                } else {
                  iceString = "No";
                }

                // Generate nutritional information HTML
                let nutritionalInfoHTML = "";
                // Css style
                const pStyle =
                  "font-size: 14px; color: #fff; margin-bottom:-16px";

                let totalCarbohydrates = 0;
                let totalProtein = 0;
                let totalFat = 0;
                let totalCalories = 0;
                let totalSugar = 0;

                selectedFruitNutritions.forEach((nutrition) => {
                  const { carbohydrates, protein, fat, calories, sugar } =
                    nutrition;

                  // Reducer of nutritions
                  totalCarbohydrates += carbohydrates;
                  totalProtein += protein;
                  totalFat += fat;
                  totalCalories += calories;
                  totalSugar += sugar;
                });

                // Render the sum of nutritions
                nutritionalInfoHTML += `
                <div id="ticket" style="padding: 0 10px;
                  align-items: center;
                  justify-content: center;
                  text-align: center;
                  font-weight: bold;
                  font-size: 17px;
                  -webkit-text-fill-color: #ffffff;">
                  <p style="font-size: 18px; color: #fff; margin-bottom:15px"><strong style="color: #fff;">Nutritional Info</strong></p>
                  <p style="font-size: 14px; color: #fff;margin-bottom:15px">These values provide information about the carbohydrate, protein, fat, calorie, and sugar content of the selected fruits.</p><br>
                  <ul style="list-style: none; padding-left: 0;">
                    <li style="font-size: 13px; color: #fff; margin-bottom: 5px;">Carbohydrates..........${totalCarbohydrates.toFixed(2)}g</li>
                    <li style="font-size: 13px; color: #fff; margin-bottom: 5px;">Protein........................${totalProtein.toFixed(2)}g</li>
                    <li style="font-size: 13px; color: #fff; margin-bottom: 5px;">Fat...............................${totalFat.toFixed(2)}g</li>
                    <li style="font-size: 13px; color: #fff; margin-bottom: 5px;">Calories......................${totalCalories.toFixed(2)}g</li>
                    <li style="font-size: 13px; color: #fff; margin-bottom: 10px;">Sugar...........................${totalSugar.toFixed(2)}g</li>
                  </ul>
                </div>
              `;

                Toast.fire({
                  html: `
                    <div id="ticket" style="padding: 0 10px;
                      align-items: center;
                      justify-content: center;
                      text-align: center;
                      font-weight: bold;
                      font-size: 17px;
                      -webkit-text-fill-color: #ffffff;">
                      <p style="font-size: 18px; color: #fff;"><strong style="color: #fff;">Order sent successfully.</strong></p>
                      <p style="${pStyle}"> ${new Date().toLocaleString()}</p><br>
                      <hr style="height:2px; background-color: #fff;">
                      <p style="font-size: 18px; color: #fff;"><strong style="color: #fff;">Client Info</strong></p><br>
                      <p style="${pStyle}"><strong style="color: #fff;">Name:</strong> ${outputClientName}</p><br>
                      <p style="${pStyle}"><strong style="color: #fff;">Mail:</strong> ${outputClientEmail}</p><br>
                      <p style="${pStyle};"><strong style="color: #fff;">Phone:</strong> ${outputClientPhone}</p><br>
                      <p style="${pStyle}"><strong style="color: #fff;">Comments:</strong> ${outputClientComments}</p><br>
                      <hr>
                      <p style="font-size: 18px; color: #fff;"><strong style="color: #fff;">Order Info</strong></p><br>
                      ${
                        fruitsString
                          ? `<p style="${pStyle}"><strong style="color: #fff;">Fruits:</strong> ${fruitsString}</p><br>`
                          : `<p style="${pStyle}"><strong style="color: #fff;">Fruits:</strong> N/A </p><br>`
                      }
                      ${
                        vegetablesString
                          ? `<p style="${pStyle}"><strong style="color: #fff;">Vegetables:</strong> ${vegetablesString}</p><br>`
                          : `<p style="${pStyle}"><strong style="color: #fff;">Vegetables:</strong> N/A </p><br>`
                      }
                      ${
                        creamsJamsString
                          ? `<p style="${pStyle}"><strong style="color: #fff;">Creams/Jams:</strong> ${creamsJamsString}</p><br>`
                          : `<p style="${pStyle}"><strong style="color: #fff;">Creams/Jams:</strong> N/A </p><br>`
                      }
                      ${
                        sizesString
                          ? `<p style="${pStyle}"><strong style="color: #fff;">Size:</strong> ${sizesString}</p><br>`
                          : `<p style="${pStyle}"><strong style="color: #fff;">Size:</strong> N/A </p><br>`
                      }
                      ${
                        sherbetString
                          ? `<p style="${pStyle}"><strong style="color: #fff;">Sherbet:</strong> ${sherbetString}</p><br>`
                          : `<p style="${pStyle}"><strong style="color: #fff;">Sherbet:</strong> No </p><br>`
                      }
                      ${
                        iceString
                          ? `<p style="${pStyle}"><strong style="color: #fff;">Ice:</strong> ${iceString}</p><br>`
                          : `<p style="${pStyle}"><strong style="color: #fff;">Ice:</strong> No </p><br>`
                      }
                      <br>
                      <p style="font-size: 16px; color: #fff; margin-bottom:-15px;"><strong style="color: #fff;">Total Price:</strong> ${
                        totalPriceCheckout.textContent
                      }</p><br>
                      <hr style="height:2px; background-color: #fff;">
                      <p style="font-size: 16px; color: #fff;"><strong style="color: #fff;">Thank you for choosing us.</strong></p><br>
                    </div>
                  `,
                }).then(() => {
                  if (fruitsString) {
                    Toast.fire({
                      html: `${nutritionalInfoHTML}`,
                      showConfirmButton: false,
                      timer: 10000,
                      background:
                        "linear-gradient(to right, #016131, #028d48, #016131)",
                      color: "#fff",
                      padding: "1.7rem",
                    });
                  }
                });
              }
              // Empty values
              const emptyValue = `$${0}.00`;
              localStorage.removeItem("Total Price Fruits");
              localStorage.removeItem("Fruits Selected");
              localStorage.removeItem("Vegetables Selected");
              localStorage.removeItem("Creams/Jams Selected");
              localStorage.removeItem("Size Selected");
              localStorage.removeItem("Sherbet");
              localStorage.removeItem("Ice");

              const totalPriceFruits =
                document.getElementById("totalPriceFruits");
              if (totalPriceFruits) {
                totalPriceFruits.textContent = emptyValue;
              }

              totalPriceFruitsCheckout.textContent = emptyValue;
              totalPriceVegetables.textContent = emptyValue;
              totalPriceVegetablesCheckout.textContent = emptyValue;
              totalPriceCreamsJams.textContent = emptyValue;
              totalPriceCreamsJamsCheckout.textContent = emptyValue;
              totalPriceSizes.textContent = emptyValue;
              totalPriceSizesCheckout.textContent = emptyValue;
              totalPriceSherbets.textContent = emptyValue;
              totalPriceSherbetCheckout.textContent = emptyValue;
              totalPriceIces.textContent = emptyValue;
              totalPriceIcesCheckout.textContent = emptyValue;
              totalPriceCheckout.textContent = emptyValue;

              // Additional function to uncheck all fruit checkboxes
              const uncheckAllFruitCheckboxes = () => {
                const fruitCheckboxes = document.querySelectorAll(
                  'input[name="fruits"]'
                );
                fruitCheckboxes.forEach((checkbox) => {
                  checkbox.checked = false;
                });
              };
              // Call the function to uncheck all fruit checkboxes
              uncheckAllFruitCheckboxes();

              checkboxesVegetables.forEach((checkbox) => {
                checkbox.checked = false;
              });

              checkboxesCreamsJams.forEach((checkbox) => {
                checkbox.checked = false;
              });

              checkboxesSizes.forEach((checkbox) => {
                checkbox.checked = false;
              });

              // Reset the range inputs```javascript
              sherbetToggle.value = 0;
              iceToggle.value = 0;

              console.log("Order taken successfully");
            }
          });
        } else if (!result.isConfirmed) {
          const Toast = Swal.mixin({
            toast: true,
            position: "center",
            showConfirmButton: false,
            background: "#dc3741",
            color: "#fff",
            padding: "1.7rem",
            timer: 1800,
            hideClass: "",
          });

          Toast.fire({
            icon: "error",
            text: "Order canceled.",
          });
        }
      });
    };

    showOrderModal(); // Show the initial modal
  }
});
