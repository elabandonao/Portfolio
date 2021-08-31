let menu = document.getElementById("small-menu");
let bars = document.getElementById("bars");
let x = document.getElementById("X");
let smallNav = document.querySelector("#top-small nav");

let aboutMe = document.getElementById("about-me");
let skills = document.getElementById("skills");
let portfolio = document.getElementById("portfolio");
let contactMe = document.getElementById("contact-me");

let aboutMeBtns = (Array.from(document.getElementsByClassName("about-me-btn")));
let skillsBtns = (Array.from(document.getElementsByClassName("skills-btn")));
let portfolioBtns = (Array.from(document.getElementsByClassName("portfolio-btn")));
let contactMeBtns = (Array.from(document.getElementsByClassName("contact-me-btn")));
let menuBtns = [];

let fillArray = (array, element) => {
    element.forEach(el => {
        array.push(el);
    })
};

fillArray(menuBtns, aboutMeBtns);
fillArray(menuBtns, skillsBtns);
fillArray(menuBtns, portfolioBtns);
fillArray(menuBtns, contactMeBtns);

bars.style.display = "flex";
x.style.display = "none";

smallNav.style.display = "none";

aboutMe.style.display = "flex";
skills.style.display = "none";
portfolio.style.display = "none";
contactMe.style.display= "none";

let getFocus = () => {
    if (aboutMe.style.display !== "none")
        return aboutMe;
    else if (skills.style.display !== "none")
        return skills;
    else if (portfolio.style.display !== "none")   
        return portfolio;
    else if (contactMe.style.display !== "none")
        return contactMe;
};

let showMenu = () => {
    bars.style.display = "none";
    x.style.display = "block";
    smallNav.style.display = "flex";
}

let changeSection = el => {
    console.log(el)
    if (el === "about-me-btn")  
        aboutMe.style.display = "flex";
    else if (el === "skills-btn")
        skills.style.display= "block"
    else if(el === "portfolio-btn")
        portfolio.style.display = "block";
    else if ("contact-me-btn")
        contactMe.style.display = "block";
};

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
};

menuBtns.forEach(menu => {
    menu.onclick = function(e) {
        getFocus().style.display = "none";
        changeSection((e.currentTarget).className);
    }
});

