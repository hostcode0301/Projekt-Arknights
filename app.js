const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const Rhodes = document.querySelector(".Rhodes");
const headline = document.querySelector(".headline");


const tl = new TimelineMax();

tl.fromTo(hero,1, {height: "0%"}, {height: "80%", ease:Power2.easeInOut})
    .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut})
    .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut}, "-=1.2")
    .fromTo(logo, 0.5, {opacity: 0, x: 30},{opacity: 1, x: 0}, "-=0.5")

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle("open");
// })
const wrapper = document.querySelector("#wrapper");
const icon = document.querySelector(".icon");

wrapper.addEventListener('click', () => {
    icon.classList.toggle("close");
});

const ExiaE2 = document.querySelector(".ExiaE2");

function Exia_Hide(x) {
    x.style.display = "none";
    ExiaE2.style.display = "block";
}

function Exia_Show(x) {
    x.style.display = "block";
    ExiaE2.style.display = "none";
}

const SariaE2 = document.querySelector(".SariaE2");

function Saria_Hide(x) {
    x.style.display = "none";
    SariaE2.style.display = "block";
}

function Saria_Show(x) {
    x.style.display = "block";
    SariaE2.style.display = "none";
}