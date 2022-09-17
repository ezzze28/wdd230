window.addEventListener("load", start);

function start(){
    display();
}

function display(){
    let tbox = document.querySelector("#last_modified");
    let last = document.lastModified;
    tbox.innerHTML = last;
}