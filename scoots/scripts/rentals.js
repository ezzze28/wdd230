const tableBody = document.querySelector("tbody");

const rentalsUrl = "data/rentals.json";

async function getRentals() {
  const response = await fetch(rentalsUrl);
  const data = await response.json();
  // console.log(data.rentals);
  displayRentals(data.rentals);
}

getRentals();

const displayRentals = (rentals) => {
  rentals.forEach((rental) => {
    let tableRow = document.createElement("tr");
    let tableDataCellRentalType = document.createElement("td");
    let tableDataCellMaxPersons = document.createElement("td");
    let tableDataCellReservationHalfDay = document.createElement("td");
    let tableDataCellReservationFullDay = document.createElement("td");
    let tableDataCellWalkInHalfDay = document.createElement("td");
    let tableDataCellWalkInFullDay = document.createElement("td");

    tableDataCellRentalType.textContent = rental.type;
    tableDataCellMaxPersons.textContent = rental.maxPersons;
    tableDataCellReservationHalfDay.textContent =
      rental.reservation.halfDay3Hrs;
    tableDataCellReservationFullDay.textContent = rental.reservation.fullDay;
    tableDataCellWalkInHalfDay.textContent = rental.walkIn.halfDay3Hrs;
    tableDataCellWalkInFullDay.textContent = rental.walkIn.fullDay;

    tableRow.appendChild(tableDataCellRentalType);
    tableRow.appendChild(tableDataCellMaxPersons);
    tableRow.appendChild(tableDataCellReservationHalfDay);
    tableRow.appendChild(tableDataCellReservationFullDay);
    tableRow.appendChild(tableDataCellWalkInHalfDay);
    tableRow.appendChild(tableDataCellWalkInFullDay);

    tableBody.appendChild(tableRow);
  });
};
