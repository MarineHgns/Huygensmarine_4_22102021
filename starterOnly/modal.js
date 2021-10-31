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

// Fonction ouvrir / fermer la modal des 2 btns
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

function modalDisplay(displayStyle) {
  modal.style.display = displayStyle;
}
function launchModal() {
  modal.style.display = "block";
}

// Form - Sélection de tout les inputs de type texte, email & number
const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"], [type="email"], [type="number"], [type="radio"], [type="checkbox"], [type="date"]'
);

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

// Form - Fonction Birthdate: valide
const dateChecker = (value) => {
  if (!value.match(/[^0-9]/) || (value = null)) {
    errorDisplay("date", "La date de naissance est incorrecte");
    ate = null;
  } else {
    errorDisplay("date", "", true);
    date = value;
  }
};

// Form - Fonction nombre tournois (nombres uniquement)

const numberChecker = (value) => {
  if (!value.match(/^[0-9]+$/)) {
    errorDisplay("number", "Merci d'indiquer un nombre ou zéro.");
    number = null;
  } else {
    errorDisplay("number", "", true);
    number = value;
  }
};

// Form - Fonction location tournois (radio) (obligatoire)
const $location = document.querySelectorAll("input[name='location']");
let locationRadioValid = false;

const radioChecker = (value) => {
  for (let i = 0; i < $location.length; i++) {
    if ($location[i].checked) {
      locationRadioValid = true;
      errorDisplay("radio", "", true);
    } else {
      errorDisplay("radio", "Merci d'indiquer une ville");
      radio = null;
    }
  }
};

// Form - Fonction CGV (obligatoire)
const cgv = document.getElementsByClassName(".checkbox-input");
const checkboxChecker = (value) => {
  if (cgv.checkbox1.checked == false) {
    alert("Merci de confirmer les CGV");
    return false;
  } else {
    return true;
  }
};

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
      case "date":
        dateChecker(e.target.value);
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
  console.log(inputs);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    first == true &&
    last == true &&
    email == true &&
    date == true &&
    number == true &&
    radio == true &&
    checkbox == true
  ) {
    const data = {
      first,
      last,
      email,
      date,
      number,
      radio,
      checkbox,
    };
    console.log(data);

    inputs.forEach((input) => (input.value = ""));

    first = null;
    last = null;
    email = null;
    date = null;
    number = null;
    radio = null;
    checkbox = null;

    alert("Inscription validée !");
  } else {
    alert("veuillez remplir correctement les champs");
  }
});

//Modal Remerciement
const modalthank = document.querySelector(".bgroundthank");
const thankBtn = document.querySelectorAll(".buttonthank");

function launchThank() {
  modalthank.style.display = "block";
}

function validate() {
  thankBtn.forEach((btn) => btn.addEventListener("click", launchThank));
}

// // Stocker saisie Local Storage
// localStorage.setItem("firstName", document.querySelector("#first").value);
// localStorage.setItem("lastName", document.querySelector("#last").value);
// localStorage.setItem("Location Tournament", $location);
