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
const formData = document.querySelectorAll(".formData");
const modal = document.getElementById("modal");
const modalthank = document.querySelector(".bgroundthank");
// Form - Sélection de tout les inputs de type texte, email & number
const inputs = document.querySelectorAll(
  'input[type="text"], [type="email"], [type="number"], [type="radio"], [type="checkbox"]'
);

// Fonction ouvrir / fermer la modal des 2 btns
function modalDisplay(displayStyle) {
  modal.style.display = displayStyle;
}
function launchModal() {
  modal.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Form - création d'un évènement pour tout les inputs
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        firstChecker(e.target.value);
        break;
      case "last":
        lastChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "number":
        numberChecker(e.target.value);
        break;
      case "radio":
        radioChecker(e.target.value);
        break;
      case "checkbox":
        checkboxChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

// Form - Fonction si erreur
const errorDisplay = (tag, message, valid) => {
  const formData = document.querySelector("." + tag + "-formData");
  const span = document.querySelector("." + tag + "-formData > span");

  if (!valid) {
    formData.classList.add("error");
    span.textContent = message;
  } else {
    formData.classList.remove("error");
    span.textContent = message;
  }
};

// Form - Fonction Prénom et Nom: minimum 2 caractères.
const firstChecker = (value) => {
  if (value.length < 2) {
    errorDisplay("first", "Le prénom doit faire plus de 2 caractères");
    first = null;
  } else {
    errorDisplay("first", "", true);
    first = value;
  }
};

const lastChecker = (value) => {
  if (value.length < 2) {
    errorDisplay("last", "Le nom doit faire plus de 2 caractères");
    last = null;
  } else {
    errorDisplay("last", "", true);
    last = value;
  }
};

// Form - Fonction Email: valide
const emailChecker = (value) => {
  if (
    !value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    errorDisplay("email", "L'adresse mail est incorrecte");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

// Form - Fonction nombre tournois (nombres uniquement)
const numberChecker = (value) => {
  if (value.length > 0) {
    errorDisplay("number", "", true);
    number = value;
  }
};

// Form - Fonction radio (obligatoire)
function radioChecker() {
  const $location = document.querySelectorAll("#radioCity .checkbox-input");
  const $radioNotValid = document.querySelector("radio-error");
  let locationRadioInvalid = false;

  for (let i = 0; i < $location.length; i++) {
    if ($location[i].checked) {
      locationRadioInvalid = true;
    } else {
      $radioNotValid.style.display = "block";
      return locationRadioInvalid;
    }
  }
}

// Form - Fonction CGV (obligatoire)
function checkboxChecker(cgv) {
  if (cgv.checkbox1.checked == false) {
    alert("Merci de confirmer les CGV");
    return false;
  } else {
    return true;
  }
}

// Form - Fontion ouverture page remerciement

function launchThank() {
  modalthank.style.display = "block";
}

function validate() {
  launchThank;
}

function validate() {
  thankBtn.forEach((btn) => btn.addEventListener("click", launchThank));
  function launchThank() {
    thankBg.style.display = "block";
  }
}
