// Declarations
const ham = document.querySelector(".hamburger"),
    ham3 = document.querySelector(".ham3"),
    ham2 = document.querySelector(".ham2"),
    ham1 = document.querySelector(".ham1"),
    navbar = document.querySelector(".menu"),
    skill1 = document.querySelector(".skill1"),
    skill2 = document.querySelector(".skill2"),
    skill3 = document.querySelector(".skill3"),
    skill4 = document.querySelector(".skill4"),
    elasticDiv = document.querySelector(".contactme"),
    menuStatic = document.querySelector(".menu-static"),
    aboutText = document.querySelector(".about-text"),
    project1 = document.querySelector(".desc1"),
    project1Img = document.querySelector(".img1"),
    project2 = document.querySelector(".desc2"),
    project2Img = document.querySelector(".img2"),
    project3 = document.querySelector(".desc3"),
    project3Img = document.querySelector(".img3"),
    Links = document.querySelectorAll(".menu-link");

// Links
[...Links].forEach((Link) => {
    Link.addEventListener('click', () => {
        navbar.classList.remove("nav-out");
        ham1.classList.remove("ham-tilt-right");
        ham2.classList.remove("ham-no-show");
        ham3.classList.remove("ham-tilt-left");
    });
});

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

const elasticDivFn = e => {
    if (window.scrollY >= elasticDiv.offsetTop - 100) {
        elasticDiv.classList.add("elastico");
    } else {
        elasticDiv.classList.remove("elastico");
    }
}

window.addEventListener("scroll", elasticDivFn);

// Nav bar JS
const menuStaticFn = e => {
    if (window.scrollY >= 1) {
        menuStatic.classList.add("menu-static-color")
    } else {
        menuStatic.classList.remove("menu-static-color");
    }
}

window.addEventListener("scroll", menuStaticFn);


// Hamburger JS
const menuOpen = e => {
    ham1.classList.toggle("ham-tilt-right");
    ham2.classList.toggle("ham-no-show");
    ham3.classList.toggle("ham-tilt-left");
    navbar.classList.toggle("nav-out");
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

// AOS
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});