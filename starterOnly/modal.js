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

// Radio
function radioChecker() {
  const $locationRadio = document.querySelectorAll("#radio .checkbox-input");
  const $locationError = document.querySelector(".locationError");

  for (let i = 0; i < $locationRadio.length; i++) {
    if ($locationRadio[i].checked) {
      return radioChecker;
    } else {
      $locationError.style.display = "block";
    }
  }
}

const formValid = () =>
  firstChecker() &&
  lastChecker() &&
  emailChecker() &&
  // dateChecker() &&
  // numberChecker() &&
  radioChecker();
$signForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (formValid()) {
    window.alert("hey");
  }
});
