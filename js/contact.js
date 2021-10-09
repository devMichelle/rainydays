const form = document.querySelector("#contactForm");
const formSuccess = document.querySelector("#formSuccess");

const firstName = document.querySelector("#fname");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lname");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email-cs");
const emailError = document.querySelector("#emailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");


function validateForm() {
    event.preventDefault();

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
        firstName.style.backgroundColor = "rgba(148, 4, 4, 0.2)";
    };

    if (checkLength(lastName.value, 0) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
        lastName.style.backgroundColor = "rgba(148, 4, 4, 0.2)";
    };

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        email.style.backgroundColor = "rgba(148, 4, 4, 0.2)";
    };

    if (checkLength(message.value, 5) === true) {
        messageError.style.display = "none";
        message.style.backgroundColor = "white";
    } else {
        messageError.style.display = "block";
        message.style.backgroundColor = "rgba(148, 4, 4, 0.2)";
    };

//console.log("ok");

    if ((checkLength(firstName.value, 0) === true) && 
    (checkLength(lastName.value, 0) === true) &&
    (validateEmail(email.value) === true) &&
    (checkLength(message.value, 5) === true)) {
        formSuccess.style.display = "block";
    } else {
        formSuccess.style.display = "none";
    };

}

form.addEventListener("submit", validateForm);



function checkLength(value, requiredLen) {
    if (value.trim().length > requiredLen) {
        return true;
    } else {
        return false;
    };
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}