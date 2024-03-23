"use strict";
const listContainer = document.querySelector(".after");
const fullName = document.querySelector("#fill1");
const visitYear = document.querySelector("#fill2");
const visitDate = document.querySelector("#fill3");
const bookBtn = document.querySelector("#btn1");
const login = document.querySelector(".first");
const loginForm = document.querySelector(".login");
const description = document.querySelector(".description");
const loginBtn = document.querySelector("#btn0");
const registerForm = document.querySelector(".register");
const register = document.querySelector("#btn2");
const registerBtn = document.querySelector("#btn4");

bookBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (fullName.value /*&& visitDate.value && visitYear.value*/ === "") {
    alert("Please fill the form");
  } else if (visitDate.value === "") {
    alert("Please fill the form");
  } else if (visitYear.value === "") {
    alert("Please fill the form");
  } else {
    const li = document.createElement("li");
    const description = document.createTextNode(
      `${fullName.value} your appointment is scheduled on June ${visitDate.value},${visitYear.value}`
    );
    li.appendChild(description);
    listContainer.appendChild(li);
    listContainer.style.display = "block";
    alert("Appointment booked");
    alert("Scroll down to see your appointment date");
    fullName.value = visitDate.value = visitYear.value = "";
  }
});
login.addEventListener("click", function () {
  loginForm.style.opacity = "1";
  description.style.opacity = "0";
  registerBtn.disabled = "true";
});
loginBtn.addEventListener("click", function () {
  loginForm.style.opacity = "0";
  description.style.opacity = "1";
  alert("Logged in");
});
registerBtn.addEventListener("click", function () {
  registerForm.style.display = "block";
  login.disabled = "true";
});
register.addEventListener("click", function () {
  registerForm.style.display = "none";
  alert("Registration completed");
});
