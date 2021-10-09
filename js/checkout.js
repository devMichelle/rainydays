const checkoutCount = document.querySelector(".checkout-count");
const orderDetailsCount = document.querySelector(".order-details-count");
const countTotal = localStorage.getItem("itemCount");

checkoutCount.innerHTML = `( ${countTotal} )`;
orderDetailsCount.innerHTML = `Items: ${countTotal}`;


const itemsTotal = document.querySelector(".items-total");
const total = localStorage.getItem("itemTotal");
itemsTotal.innerHTML = `<p>Items total</p><p>${total}</p>`; 


const orderTotal = document.querySelector(".total");
orderTotal.innerHTML =`<p>Total</p> <p>${total}</p>`;


// ------------------------------
//    Checkout form validation        Funker ikke/ikke ferdig
// ------------------------------

// const checkoutForm = document.querySelector("#checkoutForm");

// const checkoutEmail = document.querySelector("#checkout-email");
// const checkoutEmailError = document.querySelector("#checkout-email-error");


// function validateCheckoutForm() {
//     event.preventDefault();

//     if (validateEmail(checkoutEmail.value) === true) {
//         checkoutEmailError.style.display = "none";
//     } else {
//         checkoutEmailError.style.display = "block";
//         checkoutEmail.style.backgroundColor = "rgba(148, 4, 4, 0.2)";
//     };

// console.log("validated");
// }

// checkoutForm.addEventListener("submit", validateCheckoutForm);




// function checkLength(value, requiredLen) {
//     if (value.trim().length > requiredLen) {
//         return true;
//     } else {
//         return false;
//     };
// }

// function validateEmail(email) {
//     const regEx = /\S+@\S+\.\S+/;
//     const patternMatches = regEx.test(email);
//     return patternMatches;
// }