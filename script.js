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
document.querySelector(".prev").onclick = () => showSlide(--slideIndex);
document.querySelector(".next").onclick = () => showSlide(++slideIndex);

// Dots click
document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.onclick = () => {
    slideIndex = index;
    showSlide(slideIndex);
  };
});

// Auto slideshow
setInterval(() => showSlide(++slideIndex), 5000);

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
  [welcomeScreen, homeScreen, statsScreen, addTransactionScreen, profileScreen].forEach(s => s.classList.add("hidden"));
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
document.getElementById("overall-balance").innerText = "₹12,000";
document.getElementById("debit-balance").innerText = "₹8,500";
document.getElementById("cash-balance").innerText = "₹3,500";

const activityList = document.getElementById("activity-list");
activityList.innerHTML = `
  <p>🛒 Shopping - ₹500</p>
  <p>🍔 Food - ₹200</p>
  <p>🚖 Travel - ₹300</p>
`;

document.getElementById("total-spent").innerText = "₹1,000";
document.getElementById("percent-change").innerText = "↑ 12% vs last week";

// Dummy chart
["mon","tue","wed","thu","fri","sat","sun"].forEach((day,i)=>{
  let bar = document.getElementById(day);
  bar.style.height = (20 + i*10) + "px"; // sample values
});

// ---------------- DROPDOWNS ----------------
document.querySelectorAll(".dropdown").forEach(drop => {
  const trigger = drop.querySelector("span"); 
  const content = drop.querySelector(".dropdown-content");

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".dropdown-content").forEach(dc => { if(dc!==content) dc.style.display="none"; });
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-content").forEach(dc => dc.style.display="none");
});

// ---------------- TRANSACTION FORM ----------------
const transactionForm = document.getElementById("transaction-form");

transactionForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const category = document.getElementById("category").value;

  let title = "";
  let amount = "";
  let location = "";

  if(category === "food") {
    title = document.getElementById("foodName").value;
    amount = document.getElementById("foodPrice").value;
    location = document.getElementById("foodLocation").value;
  } else if(category === "travel") {
    title = document.getElementById("travelMode").value;
    amount = document.getElementById("travelPrice").value;
    location = document.getElementById("travelRoute").value + " (" + document.getElementById("travelDate").value + ")";
  } else if(category === "bills") {
    title = document.getElementById("billName").value;
    amount = document.getElementById("billAmount").value;
    location = document.getElementById("billPayment").value + " | " + document.getElementById("billDate").value;
  } else if(category === "shopping") {
    title = document.getElementById("itemName").value;
    amount = document.getElementById("itemPrice").value;
    location = document.getElementById("itemLocation").value + " | " + document.getElementById("itemPayment").value;
  } else if(category === "other") {
    title = document.getElementById("otherTitle").value;
    amount = document.getElementById("otherAmount").value;
    location = document.getElementById("otherNotes").value;
  }

  const expenseItem = document.createElement("div");
  expenseItem.classList.add("p-3","mb-2","border","rounded","bg-gray-50","flex","justify-between","items-center");

  expenseItem.innerHTML = `
    <div>
      <strong>${category.toUpperCase()}: ${title}</strong><br>
      ₹${amount}<br>
      <small>${location}</small>
    </div>
    <div>
      <button class="updateBtn bg-blue-500 text-white px-2 py-1 rounded mr-1">Update</button>
      <button class="deleteBtn bg-red-500 text-white px-2 py-1 rounded">Delete</button>
    </div>
  `;

  activityList.appendChild(expenseItem);

  transactionForm.reset();

  // DELETE
  expenseItem.querySelector(".deleteBtn").addEventListener("click", () => {
    expenseItem.remove();
  });

  // UPDATE
  expenseItem.querySelector(".updateBtn").addEventListener("click", () => {
    if(category === "food") {
      document.getElementById("foodName").value = title;
      document.getElementById("foodPrice").value = amount;
      document.getElementById("foodLocation").value = location;
    } else if(category === "travel") {
      document.getElementById("travelMode").value = title;
      document.getElementById("travelPrice").value = amount;
      const route = location.split(" (")[0];
      const date = location.split(" (")[1].replace(")","");
      document.getElementById("travelRoute").value = route;
      document.getElementById("travelDate").value = date;
    } else if(category === "bills") {
      document.getElementById("billName").value = title;
      document.getElementById("billAmount").value = amount;
      const parts = location.split(" | ");
      document.getElementById("billPayment").value = parts[0];
      document.getElementById("billDate").value = parts[1];
    } else if(category === "shopping") {
      document.getElementById("itemName").value = title;
      document.getElementById("itemPrice").value = amount;
      const parts = location.split(" | ");
      document.getElementById("itemLocation").value = parts[0];
      document.getElementById("itemPayment").value = parts[1];
    } else if(category === "other") {
      document.getElementById("otherTitle").value = title;
      document.getElementById("otherAmount").value = amount;
      document.getElementById("otherNotes").value = location;
    }

    expenseItem.remove();
    showScreen(addTransactionScreen); // go to form
  });
});
