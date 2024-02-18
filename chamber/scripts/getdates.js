window.addEventListener("load", start);

function start(){
    display();
}

function display(){
    let tbox = document.querySelector("#last_modified");
    let last = document.lastModified;
    tbox.innerHTML = last;

    const currentYear = document.getElementById("currentYear")
    date = new Date()
    currentYear.innerText = date.getFullYear();
}