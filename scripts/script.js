// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");
const resetBtn = document.querySelector("#reset-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)
[firstNameInput, lastNameInput, emailInput, passwordInput, passwordConfirmInput].forEach(input => {
  input.addEventListener("input", () => clearValidation(input));
});

// add callback function for submit button.
submitBtn.onclick = () => {
  let isValid = true;

  // validate first name
  firstNameInput.classList.remove("is-valid", "is-invalid");
  if (firstNameInput.value.trim().length === 0) {
    firstNameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    firstNameInput.classList.add("is-valid");
  }

  // validate last name
  lastNameInput.classList.remove("is-valid", "is-invalid");
  if (lastNameInput.value.trim().length === 0) {
    lastNameInput.classList.add("is-invalid");
    isValid = false;
  } else {
    lastNameInput.classList.add("is-valid");
  }

  // validate email
  emailInput.classList.remove("is-valid", "is-invalid");
  if (!validateEmail(emailInput.value.trim())) {
  emailInput.classList.add("is-invalid");
  isValid = false;
} else {
  emailInput.classList.add("is-valid");
}

  // validate password
  passwordInput.classList.remove("is-valid", "is-invalid");
  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
    isValid = false;
  } else {
    passwordInput.classList.add("is-valid");
  }

  // validate confirm password
  passwordConfirmInput.classList.remove("is-valid", "is-invalid");
  if (
    passwordConfirmInput.value !== passwordInput.value ||
    passwordConfirmInput.value.length < 6
  ) {
    passwordConfirmInput.classList.add("is-invalid");
    isValid = false;
  } else {
    passwordConfirmInput.classList.add("is-valid");
  }
  if (isValid) alert("Registered successfully");
};

// add callback function for Reset button.
function clearValidation(input) {
  input.classList.remove("is-valid");
  input.classList.remove("is-invalid");
}

resetBtn.onclick = () => {
  [
    firstNameInput,
    lastNameInput,
    emailInput,
    passwordInput,
    passwordConfirmInput,
  ].forEach((input) => {
    clearValidation(input);
    input.value = "";
  });
};