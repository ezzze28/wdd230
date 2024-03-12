
document.querySelector('#confirmPassword').addEventListener('focusout', checkPasswordMatch)


function checkPasswordMatch() {
    var password = document.getElementById("password");
    var confirmPassword = document.getElementById("confirmPassword");
    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match. Please try again.");
        password.value = "";
        confirmPassword.value = "";
        password.focus();
    }
}

function updateRatingValue() {
    var ratingValue = document.getElementById("ratingValue");
    var pageRating = document.getElementById("pageRating");
    ratingValue.innerHTML = pageRating.value;
}


document.querySelector('#email').addEventListener('focusout', validateEmail)


function validateEmail() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');

    var byuiEmailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

    if (byuiEmailPattern.test(emailInput.value)) {
        emailError.textContent = '';
        alert('Email is valid!');
    } else {
        emailError.textContent = 'Please enter a valid BYUI email address.';
    }
}