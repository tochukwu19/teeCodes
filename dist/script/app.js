// Declarations
const ham = document.querySelector(".hamburger");
const ham3 = document.querySelector(".ham3");
const ham2 = document.querySelector(".ham2");
const ham1 = document.querySelector(".ham1");
const navbar = document.querySelector(".menu");
const navOverlay = document.querySelector(".nav-overlay");
const skill1 = document.querySelector(".skill1");
const skill2 = document.querySelector(".skill2");
const skill3 = document.querySelector(".skill3");
const skill4 = document.querySelector(".skill4");
const elasticDiv = document.querySelector(".contactme");
const menuStatic = document.querySelector(".menu-static");
const aboutText = document.querySelector(".about-text");
const project1 = document.querySelector(".desc1")

// Skill graph JS

const skiller1 = (e) => {
    if (window.scrollY >= 265) {
        skill1.classList.add("skill-release1")
    } else {
        skill1.classList.remove("skill-release1");
    }
}

window.addEventListener("scroll", skiller1);

const skiller2 = (e) => {
    if (window.scrollY >= 265) {
        skill2.classList.add("skill-release2")
    } else {
        skill2.classList.remove("skill-release2");
    }
}

window.addEventListener("scroll", skiller2);

const skiller3 = (e) => {
    if (window.scrollY >= 265) {
        skill3.classList.add("skill-release3")
    } else {
        skill3.classList.remove("skill-release3");
    }
}

window.addEventListener("scroll", skiller3);

const skiller4 = (e) => {
    if (window.scrollY >= 265) {
        skill4.classList.add("skill-release4")
    } else {
        skill4.classList.remove("skill-release4");
    }
}

window.addEventListener("scroll", skiller4);


// OnScroll animations

const elasticDivFn = (e) => {
    if (window.scrollY >= elasticDiv.offsetTop - 100) {
        elasticDiv.classList.add("elastico");
    } else {
        elasticDiv.classList.remove("elastico");
    }
}

window.addEventListener("scroll", elasticDivFn);

const aboutFn = (e) => {
    if (window.scrollY >= aboutText.offsetTop - 500) {
        aboutText.classList.add("about-out");
    } else {
        aboutText.classList.remove("about-out");
    }
}

window.addEventListener("scroll", aboutFn);


const pro1Fn = (e) => {
    if (window.scrollY >= project1.offsetTop - 500) {
        project1.classList.add("pro1-out");
    } else {
        project1.classList.remove("pro1-out");
    }
}

window.addEventListener("scroll", pro1Fn);



// Nav bar JS
const menuStaticFn = (e) => {
    if (window.scrollY >= 1) {
        menuStatic.classList.add("menu-static-color")
    } else {
        menuStatic.classList.remove("menu-static-color");
    }
}

window.addEventListener("scroll", menuStaticFn);


// Hamburger JS
const menuOpen = (e) => {
    ham1.classList.toggle("ham-tilt-right");
    ham2.classList.toggle("ham-no-show");
    ham3.classList.toggle("ham-tilt-left");
    navbar.classList.toggle("nav-out");
    navOverlay.classList.toggle("nav-overlay-out")
}
ham.addEventListener("click", menuOpen)



// Hero-text Typewriter Effect

const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function () {

    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.txtElement.innerHTML = `<span class="txt"> ${this.txt}</span>`

    let typeSpeed = 200;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;

        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;

        this.wordIndex++;

        typeSpeed = 400;
    }

    setTimeout(() => this.type(), typeSpeed)
}

document.addEventListener("DOMContentLoaded", init)

function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");

    new TypeWriter(txtElement, words, wait)
}

