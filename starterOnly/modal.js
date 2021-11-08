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
const $signForm = document.querySelector("#signForm");
const modalBtnThank = document.querySelectorAll("closeThk");
const modalThank = document.getElementById("modalThank");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalBtnThank.forEach((btn) => btn.addEventListener("click", closeModalThank));

$signForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (formValid()) {
    modalDisplay("none");
    launchThank();
    $signForm.reset();
  }
});

function launchThank() {
  modalThank.style.display = "block";
}

// Fonction ouvrir / fermer la modal (inscription) 2 btns
function modalDisplay(displayStyle) {
  modal.style.display = displayStyle;
}

function launchModal() {
  modal.style.display = "block";
}

// Fermer modal "Thanks"

function closeModalThank() {
  modalThank.style.display = "none";
}

///////////////////////////////////////////////////////////////
/////////////////////////// Form /////////////////////////////
// Prénom : Nom - 2 caractères minimum
function nameChecker(classErreur, input) {
  const $nameError = document.querySelector(classErreur);

  if (document.getElementById(input).value.length < 2) {
    $nameError.style.display = "block";
  } else {
    $nameError.style.display = "none";
    return nameChecker;
  }
}

// Email - Non null + regEx contrôle email valide
function emailChecker() {
  let regexEmail =
    /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
  let email = document.getElementById("email");
  const $emailError = document.querySelector(".emailError");
  if (email.value.trim() === "" || regexEmail.test(email.value) === false) {
    $emailError.style.display = "block";
  } else {
    $emailError.style.display = "none";
    return emailChecker;
  }
}
// Date de naissance - Non null
function dateChecker() {
  const date = document.getElementById("date").value;
  const $dateError = document.querySelector(".dateError");

  if (date === null || date === "") {
    $dateError.style.display = "block";
    return false;
  } else {
    $dateError.style.display = "none";
    return dateChecker;
  }
}

// Nombre tournois - Non null
function numberChecker() {
  const number = document.getElementById("number").value;
  const $numberError = document.querySelector(".numberError");
  if (number === "") {
    $numberError.style.display = "block";
  } else {
    $numberError.style.display = "none";
    return numberChecker;
  }
}

// Location - une seule uniquement (radio) et obligatoire
function locationChecker() {
  const $locationRadio = document.querySelectorAll("#radio .checkbox-input");
  const $locationError = document.querySelector(".locationError");

  for (let i = 0; i < $locationRadio.length; i++) {
    if ($locationRadio[i].checked) {
      $locationError.style.display = "none";
      return locationChecker;
    } else {
      $locationError.style.display = "block";
    }
  }
}

// Cgv - cochée d'office (peut être décochée) -> doit obligatoirement être cochée

function cgvChecker() {
  const cgv = document.getElementById("cgvcase");
  const $cgvError = document.querySelector(".cgvError");
  if (cgv.checked === false) {
    $cgvError.style.display = "block";
  } else {
    $cgvError.style.display = "none";
    return cgvChecker;
  }
}

// Submit du formulaire, si ok ouvre la modal "Thanks" sinon reste sur la page en gardant le contenu du formulaire

const formValid = () => {
  nameChecker(".firstError", "first");
  nameChecker(".lastError", "last");
  emailChecker();
  dateChecker();
  numberChecker();
  locationChecker();
  cgvChecker();
  const isValid =
    nameChecker(".firstError", "first") &&
    nameChecker(".lastError", "last") &&
    emailChecker() &&
    dateChecker() &&
    numberChecker() &&
    locationChecker() &&
    cgvChecker();
  return isValid;
};
