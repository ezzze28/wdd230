//Current Date
const currentYear = document.getElementById("currentYear")
date = new Date()
currentYear.innerText = date.getFullYear();

//Last update
const secondLineFooter = document.getElementById("secondLineFooter")

secondLineFooter.innerText = `Last Update: ${date.toLocaleString()}`

