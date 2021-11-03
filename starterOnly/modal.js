// Topnav bar
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modal = document.getElementById("modal");
//
const formData = document.querySelectorAll(".formData");
const $signForm = document.querySelector("#signForm");

// Fonction ouvrir / fermer la modal des 2 btns
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function modalDisplay(displayStyle) {
  modal.style.display = displayStyle;
}
function launchModal() {
  modal.style.display = "block";
}
///////////////////////////////////////////////////////////////
// Prénom
function firstChecker() {
  const $firstError = document.querySelector(".firstError");

  if (document.getElementById("first").value.length < 2) {
    $firstError.style.display = "block";
  } else {
    return firstChecker;
  }
}
// Nom
function lastChecker() {
  const $lastError = document.querySelector(".lastError");

  if (document.getElementById("last").value.length < 2) {
    $lastError.style.display = "block";
  } else {
    return lastChecker;
  }
}

// Email
function emailChecker() {
  let regexEmail =
    /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  let email = document.getElementById("email");
  const $emailError = document.querySelector(".emailError");
  if (email.value.trim() == "" || regexEmail.test(email.value) == false) {
    $emailError.style.display = "block";
  } else {
    return emailChecker;
  }
}
// Date
function dateChecker() {
  const date = document.getElementById("date").value;
  const $dateError = document.querySelector(".dateError");

  if (date == null || date == "") {
    $dateError.style.display = "block";
    return false;
  } else {
    return dateChecker;
  }
}

// Nombre tournois
function numberChecker() {
  const number = document.getElementById("number").value;
  const $numberError = document.querySelector(".numberError");
  if (number == "") {
    $numberError.style.display = "block";
  } else {
    return numberChecker;
  }
}

// Radio
function locationChecker() {
  const $locationRadio = document.querySelectorAll("#radio .checkbox-input");
  const $locationError = document.querySelector(".locationError");

  for (let i = 0; i < $locationRadio.length; i++) {
    if ($locationRadio[i].checked) {
      return locationChecker;
    } else {
      $locationError.style.display = "block";
    }
  }
}

// Cgv

const cgv = document.getElementById("cgvcase");
const $cgvError = document.querySelector(".cgvError");
function cgvChecker() {
  if (cgv.checked == false) {
    $cgvError.style.display = "block";
  } else {
    return cgvChecker;
  }
}

// Submit
const modalthank = document.querySelector(".bgroundthank");
const thankBtn = document.querySelectorAll(".buttonthank");

function launchThank() {
  modalthank.style.display = "block";
}
const formValid = () =>
  firstChecker() &&
  lastChecker() &&
  emailChecker() &&
  dateChecker() &&
  numberChecker() &&
  locationChecker() &&
  cgvChecker();
$signForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (formValid()) {
    modalDisplay("none");
    launchThank();
  }
});
