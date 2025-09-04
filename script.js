// ---------------- SLIDESHOW ----------------
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

// Prev / Next
document.querySelector(".prev").onclick = () => {
  showSlide(--slideIndex);
};
document.querySelector(".next").onclick = () => {
  showSlide(++slideIndex);
};

// Dots click
document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.onclick = () => {
    slideIndex = index;
    showSlide(slideIndex);
  };
});

// Auto slideshow
setInterval(() => {
  showSlide(++slideIndex);
}, 5000);

// ---------------- SCREEN NAVIGATION ----------------
const welcomeScreen = document.getElementById("welcome-screen");
const homeScreen = document.getElementById("home-screen");
const statsScreen = document.getElementById("stats-screen");
const addTransactionScreen = document.getElementById("add-transaction-screen");
const profileScreen = document.getElementById("profile-screen");

const getStartedBtn = document.getElementById("get-started");
const backToWelcome = document.getElementById("back-to-welcome");
const homeBtn = document.getElementById("home-btn");
const statsBtn = document.getElementById("stats-btn");
const homeBtn2 = document.getElementById("home-btn-2");
const statsBtn2 = document.getElementById("stats-btn-2");
const plusIcon = document.getElementById("plusIcon");
const profileIcon = document.getElementById("profileIcon");
const closeAdd = document.getElementById("close-add");
const closeProfile = document.getElementById("close-profile");

function showScreen(screen) {
  // Hide all screens first
  [welcomeScreen, homeScreen, statsScreen, addTransactionScreen, profileScreen]
    .forEach(s => s.classList.add("hidden"));

  // Show the selected screen
  screen.classList.remove("hidden");
}

// Navigation events
getStartedBtn.addEventListener("click", () => showScreen(homeScreen));
backToWelcome.addEventListener("click", () => showScreen(welcomeScreen));

homeBtn.addEventListener("click", () => showScreen(homeScreen));
homeBtn2.addEventListener("click", () => showScreen(homeScreen));

statsBtn.addEventListener("click", () => showScreen(statsScreen));
statsBtn2.addEventListener("click", () => showScreen(statsScreen));

plusIcon.addEventListener("click", () => showScreen(addTransactionScreen));
profileIcon.addEventListener("click", () => showScreen(profileScreen));

closeAdd.addEventListener("click", () => showScreen(homeScreen));
closeProfile.addEventListener("click", () => showScreen(homeScreen));

// ---------------- SAMPLE DATA (optional) ----------------
// Just to show that activity and stats work visually
document.getElementById("overall-balance").innerText = "₹12,000";
document.getElementById("debit-balance").innerText = "₹8,500";
document.getElementById("cash-balance").innerText = "₹3,500";

let activityList = document.getElementById("activity-list");
activityList.innerHTML = `
  <p>🛒 Shopping - ₹500</p>
  <p>🍔 Food - ₹200</p>
  <p>🚖 Travel - ₹300</p>
`;

document.getElementById("total-spent").innerText = "₹1,000";
document.getElementById("percent-change").innerText = "↑ 12% vs last week";

// Fill dummy chart
["mon","tue","wed","thu","fri","sat","sun"].forEach((day,i)=>{
  let bar = document.getElementById(day);
  bar.style.height = (20 + i*10) + "px"; // sample values
});
