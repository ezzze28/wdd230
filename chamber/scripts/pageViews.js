const viewsButton = document.getElementById('viewsButton');
const totalVisitorsContainer = document.getElementById('totalVisitorsContainer');

viewsButton.addEventListener('click', function() {
  totalVisitorsContainer.classList.toggle('active');
  
  if (totalVisitorsContainer.classList.contains('active')) {
    viewsButton.innerHTML='<i class="fas fa-eye"></i>'
    totalVisitorsContainer.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
  } else {
    viewsButton.innerHTML='<i class="fas fa-eye-slash"></i>'
    totalVisitorsContainer.style.display = 'none';
    document.body.style.overflow = ''; 
  }
});


//Get from dom
const totalVisitors = document.getElementById("totalVisitors");

// Connect with localStorage (cache) - Get the value stored
const visitorsKey = localStorage.getItem("visitors");

//If the value in null → create a new key visitors with 0 as a value.
if (!visitorsKey) {
  const initialData = {
    count: 0,
    lastVisit: new Date().getTime(),
  };
  localStorage.setItem("visitors", JSON.stringify(initialData));
  Toastify({
    text: "Welcome for the first time to our Chamber website!",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00445a, #129ecc, #00445a)",
    },
  }).showToast();
}
//If exist visitors
else {
  // Convert the value to an object
  const visitorsData = JSON.parse(visitorsKey);
  const visitorsCount = visitorsData.count;
  const lastVisitTime = visitorsData.lastVisit;

  // Calculate days since last visit
  const currentDate = new Date();
  const lastVisitDate = new Date(lastVisitTime);
  const daysPassed = Math.floor(
    (currentDate - lastVisitDate) / (1000 * 60 * 60 * 24)
  );

  // Update the DOM
  visitorsData.count += 1;
  visitorsData.lastVisit = currentDate.getTime();
  localStorage.setItem("visitors", JSON.stringify(visitorsData));

  // First time visiting the website
  if (visitorsCount === 0) {
    Toastify({
      text: "Welcome for the first time to our Chamber website!",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00445a, #129ecc, #00445a)",
      },
    }).showToast();
  }
  // More than the first visit of the user
  else {
    /* If the user connect to the website other time in the same day  */
    if (daysPassed === 0) {
      Toastify({
        text: `Welcome back to our Chamber website! We're glad to see you again today.`,
        className: "info",
        style: {
          background: "linear-gradient(to right, #00445a, #129ecc, #00445a)",
        },
      }).showToast();
    }    
    /* If the user connects to the website on a different day */
    else if (!isNaN(daysPassed)) {
      Toastify({
        text: `Welcome back to our Chamber website! We're glad to see you again after ${daysPassed} days.`,
        className: "info",
        style: {
          background: "linear-gradient(to right, #00445a, #129ecc, #00445a)",
        },
    }).showToast();
  }}
}

// Get the updated value from localStorage
const updatedVisitorsKey = localStorage.getItem("visitors");
const updatedVisitorsData = JSON.parse(updatedVisitorsKey);
const updatedVisitorsCount = updatedVisitorsData.count;

// Set the new value
totalVisitors.textContent = updatedVisitorsCount;
