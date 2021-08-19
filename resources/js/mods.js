let menu = document.getElementById("small-menu");
let bars = document.getElementById("bars");
let x = document.getElementById("X");
let smallNav = document.querySelector("#top-small nav");

bars.style.display = "flex";
x.style.display = "none";
smallNav.style.display = "none";

let showMenu = () => {
    bars.style.display = "none";
    x.style.display = "block";
    smallNav.style.display = "flex";
}

let closeMenu = () => {
    bars.style.display = "flex";
    x.style.display = "none";
    smallNav.style.display = "none";
};

menu.onclick = function(e) {
    if (bars.style.display === "flex")
        showMenu();
    else 
        closeMenu();
}