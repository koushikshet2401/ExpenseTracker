let slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

document.querySelector(".prev").onclick = () => showSlide(--slideIndex);
document.querySelector(".next").onclick = () => showSlide(++slideIndex);

document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.onclick = () => showSlide(slideIndex = index);
});

setInterval(() => {
  showSlide(++slideIndex);
}, 5000);

// ---------------- SCREEN NAVIGATION ----------------
const welcomeScreen = document.getElementById("welcome-screen");
const homeScreen = document.getElementById("home-screen");
const statsScreen = document.getElementById("stats-screen");

const getStartedBtn = document.getElementById("get-started");
const backToWelcome = document.getElementById("back-to-welcome");
const homeBtn = document.getElementById("home-btn");
const statsBtn = document.getElementById("stats-btn");
const homeBtn2 = document.getElementById("home-btn-2");
const statsBtn2 = document.getElementById("stats-btn-2");

function showScreen(screen) {
  welcomeScreen.classList.add("hidden");
  homeScreen.classList.add("hidden");
  statsScreen.classList.add("hidden");
  screen.classList.remove("hidden");
}

getStartedBtn.addEventListener("click", () => showScreen(homeScreen));
backToWelcome.addEventListener("click", () => showScreen(welcomeScreen));
homeBtn.addEventListener("click", () => showScreen(homeScreen));
homeBtn2.addEventListener("click", () => showScreen(homeScreen));
statsBtn.addEventListener("click", () => showScreen(statsScreen));
statsBtn2.addEventListener("click", () => showScreen(statsScreen));
