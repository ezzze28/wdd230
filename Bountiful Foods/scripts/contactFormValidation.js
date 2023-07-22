const firstNameInput = document.getElementById("firstName"); //Required
const lastNameInput = document.getElementById("lastName"); //Required
const emailInput = document.getElementById("email"); //Required
const phoneInput = document.getElementById("phone"); //Required
const comments = document.getElementById("comments"); //Optional

const submitButton = document.getElementById("submitBtn");

//Valid characters to the input
/* First Name */
const validatefirstName = (firstName) => {
  const patron = /^[a-zA-Z\s\-]{3,}$/;
  return patron.test(firstName);
};
firstNameInput.addEventListener("input", () => {
  const name = firstNameInput.value.trim();
  const isValid = validatefirstName(name);

  if (isValid || name.length === 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

/* Last Name */
const validateLastName = (lastName) => {
  const patron = /^[a-zA-Z\s\-]{3,}$/;
  return patron.test(lastName);
};
lastNameInput.addEventListener("input", () => {
  const lastName = lastNameInput.value.trim();
  const isValid = validatefirstName(lastName);

  if (isValid || lastName.length === 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

/* Email */
const validateEmail = (email) => {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(email);
};
emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  const isValid = validatefirstName(email);

  if (isValid || email.length === 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

/* Phone */
const validatePhone = (phone) => {
  const patron = /^[0-9\s\-]{7,}$/;
  return patron.test(phone);
};
phoneInput.addEventListener("input", () => {
  const phone = phoneInput.value.trim();
  const isValid = validatefirstName(phone);

  if (isValid || phone.length === 0) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

/* Submit button */
const firstName = firstNameInput.value.trim();
const lastName = lastNameInput.value.trim();
const email = emailInput.value.trim();
const phone = phoneInput.value.trim();

const completedFields =
  firstName !== "" &&
  lastName !== "" &&
  email !== "" &&
  phone !== "";

if (completedFields) {
  submitButton.disabled = false;
} else {
  submitButton.disabled = true;
}
/* Submit action */
submitButton.addEventListener("click", (e) => {
  /* Prevent default to prevernt the default behavior */
  e.preventDefault();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const commentsAdded = comments.value;

  /* Time */
  const currentDatetimeValue = new Date();

  // DD/MM/AAAA
  const day = currentDatetimeValue.getDate();
  const month = currentDatetimeValue.getMonth() + 1;
  const year = currentDatetimeValue.getFullYear();
  const formattedDate = `${year}/${month}/${day}`;

  //HH:MM
  const hours = currentDatetimeValue.getHours();
  const minutes = currentDatetimeValue.getMinutes();
  const formattedTime = `${hours}:${minutes}`;

  // Combine date and time
  const formattedDateTime = `${formattedDate} ${formattedTime}`;

  /* Send the URL */
  const url = `contactSuccess.html?firstName=${encodeURIComponent(
    firstName
  )}&lastName=${encodeURIComponent(
    lastName
  )}&email=${encodeURIComponent(
    email
  )}&phone=${encodeURIComponent(
    phone
  )}&commentsAdded=${encodeURIComponent(
    commentsAdded
  )}&currentDatetime=${encodeURIComponent(formattedDateTime)}`;

  window.location.href = url;
});
