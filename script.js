let slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // if n is more than number of slides → reset
    if (n >= slides.length) {
        slideIndex = 0;
    }
    // if n is less than 0 → go to last slide
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // <-- fixed Style → style
    }

    // remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // show correct slide + dot
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// prev button
document.querySelector(".prev").onclick = function () {
    showSlide(--slideIndex);
};

// next button
document.querySelector(".next").onclick = function () {
    showSlide(++slideIndex);  // <-- fixed here
};

// dots click
let dots = document.querySelectorAll(".dot");
dots.forEach((dot, index) => {
    dot.onclick = function () {
        showSlide(slideIndex = index);
    };
});

// auto change slide every 5 seconds
setInterval(() => {
    showSlide(++slideIndex);
}, 5000);
