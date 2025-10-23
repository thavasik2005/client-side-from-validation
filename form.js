const form = document.getElementById("registrationForm");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const postalCodeError = document.getElementById("postalCodeError");
const emailError = document.getElementById("emailError");
const countryError = document.getElementById("countryError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

email.addEventListener("input", () => {
  if (email.validity.valid) {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    emailError.textContent = "";
  } else {
    showEmailError();
  }
});

function showEmailError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Email is required";
    email.classList.add("is-invalid");
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please enter a valid email address.";
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    emailError.textContent = "";
  }
}

country.addEventListener("input", () => {
  if (country.validity.valid) {
    country.classList.remove("is-invalid");
    country.classList.add("is-valid");
    countryError.textContent = "";
  } else {
    showCountryError();
  }
});

function showCountryError() {
  if (country.validity.valueMissing) {
    countryError.textContent = "Country is required.";
    country.classList.add("is-invalid");
  } else {
    country.classList.remove("is-invalid");
    country.classList.add("is-valid");
    countryError.textContent = "";
  }
}

postalCode.addEventListener("input", () => {
  if (postalCode.validity.valid) {
    postalCode.classList.add("is-valid");
    postalCode.classList.remove("is-invalid");
    postalCodeError.textContent = "";
  } else {
    showPostalCodeError();
  }
});

function showPostalCodeError() {
  if (postalCode.validity.valueMissing) {
    postalCodeError.textContent = "Postal code is required.";
    postalCode.classList.add("is-invalid");
  } else if (postalCode.validity.patternMismatch) {
    postalCodeError.textContent =
      "Postal code must be 3-10 alphanumeric characters.";
    postalCode.classList.add("is-invalid");
  } else {
    postalCodeError.textContent = "";
    postalCode.classList.remove("is-valid");
    postalCode.classList.add("is-valid");
  }
}

password.addEventListener("input", () => {
  if (password.validity.valid) {
    passwordError.textContent = "";
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
  } else {
    showPasswordError();
  }
});

function showPasswordError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password";
    password.classList.add("is-invalid");
  } else if (password.validity.tooShort) {
    passwordError.textContent = `Password must be at least ${password.minLength} characters`;
    password.classList.add("is-invalid");
  } else {
    passwordError.textContent = "";
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
  }
}

confirmPassword.addEventListener("input", () => {
  if (confirmPassword.validity.valid) {
    if (confirmPassword.value !== password.value) {
      confirmPasswordError.textContent = "Passwords do not match";
      confirmPassword.classList.add("is-invalid");
    } else {
      confirmPasswordError.textContent = "";
      confirmPassword.classList.remove("is-invalid");
      confirmPassword.classList.add("is-valid");
    }
  } else {
    showConfirmPasswordError();
  }
});

function showConfirmPasswordError() {
  if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "Please confirm your password";
    confirmPassword.classList.add("is-invalid");
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    confirmPassword.classList.add("is-invalid");
  } else {
    confirmPasswordError.textContent = "";
    confirmPassword.classList.remove("is-invalid");
    confirmPassword.classList.add("is-valid");
  }
}

form.addEventListener("submit", (e) => {
  let isValid = true;

  if (!email.validity.valid) {
    showEmailError();
    isValid = false;
  }

  if (!country.validity.valid) {
    showCountryError();
    isValid = false;
  }

  if (!postalCode.validity.valid) {
    showPostalCodeError();
    isValid = false;
  }

  if (!password.validity.valid) {
    showPasswordError();
    isValid = false;
  }

  if (
    !confirmPassword.validity.valid ||
    confirmPassword.value !== password.value
  ) {
    showConfirmPasswordError();
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  }
});
