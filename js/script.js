// const addToWishlist = document.querySelector(".add-to-wishlist,add-to-wishlist2");
// const wishlist = document.querySelector(".counter-wishlist");
// const wishlistTotal = document.querySelector(".wishlist-total");
// let wishlistCount = 0;


// addToWishlist.onclick = function(){
//     wishlistCount++;
//     wishlist.style.display = "inline-block";
//     wishlistTotal.innerHTML = `${wishlistCount}`; 
//     localStorage.setItem("itemsInWishlist", wishlistCount);
// }


// ----------------------------------------------
//           Newsletter email validation
// ----------------------------------------------

const subscribe = document.querySelector(".newsletter-textbox");
const newsletterSuccess = document.querySelector(".newsletter-subscribed");

const newsletterEmail = document.querySelector("#emailSub");
const newsletterError = document.querySelector(".newsletter-error");


function validateEmailSub() {
    event.preventDefault();


    if (validateEmail(newsletterEmail.value) === true) {
        newsletterError.style.display = "none";
        newsletterSuccess.innerHTML = `<p>Wohoo!</p><p>You will now be the first to get in on exclusive offers and latest news!</p>`;
        newsletterSuccess.style.display = "block";
        newsletterEmail.style.backgroundColor = "var(--white)";
        
    } else {
        newsletterError.innerHTML = `Please enter a valid email adress`;
        newsletterError.style.display = "block";
        newsletterEmail.style.backgroundColor = "rgba(148, 4, 4, 0.1)";
        newsletterSuccess.style.display = "none";
    }

}

subscribe.addEventListener("submit", validateEmailSub);
 

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}