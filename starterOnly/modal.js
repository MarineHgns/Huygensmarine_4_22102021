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
const closeBtn = document.getElementsByClassName("close");
const inputs = document.querySelectorAll(
  'input[type="text"], [type="email"], [type="number"]'
);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}
closeBtn[0].addEventListener("click", closeModal);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
//fonction si erreur
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

// Form
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
      default:
        null;
    }
  });
});

// fonction Prénom et Nom: minimum 2 caractères.
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

// fonction Email: valide
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

const numberChecker = (value) => {
  if (value.length > 0) {
    errorDisplay("number", "", true);
    number = value;
  }
};

// fonction submit
const subForm = document.querySelector("form");

subForm.addEventListener("submit", (e) => {
  if (first && last && email && number) {
    const globalData = {
      first: first,
      last: last,
      email: email,
    };
  } else {
    alert("Veuillez remplir correctement les champs");
  }

  console.log(test);
});
