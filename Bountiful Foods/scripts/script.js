//Current Datetime
const now = document.getElementById("now")
date = new Date()

//Day
const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const dayIndex = date.getDay()
const dayName = dayNames[dayIndex]

//Months    
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
const monthIndex = date.getMonth();
const monthName = monthNames[monthIndex];

now.innerText = `${dayName}, ${date.getDate()} ${monthName}  ${date.getFullYear()}`


//Current Date (Year)
const currentYear = document.getElementById("currentYear")
date = new Date()
currentYear.innerText = date.getFullYear();

//Last update
const secondLineFooter = document.getElementById("secondLineFooter")

secondLineFooter.innerText = `Last Update: ${document.lastModified}`
