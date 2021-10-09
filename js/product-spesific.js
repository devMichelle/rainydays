
// ----------------------------------------------
//           Counter on shoppingcart
// ----------------------------------------------


const addToCartButton = document.querySelector("#addToCart");
const cart = document.querySelector(".counter-shoppingcart");
const cartTotal = document.querySelector(".cart-total");
let count = 0;
let total = 0;

addToCartButton.onclick = function(){
    count++;
    total += 1099;
    cart.style.display = "inline-block";
    cartTotal.innerHTML = `${count}`; 
    localStorage.setItem("itemCount", count);
    localStorage.setItem("itemTotal", total);
}


// ----------------------------------------------
//           Counter on wishlist
// ----------------------------------------------


const addToWishlist = document.querySelector(".add-to-wishlist,add-to-wishlist2");
const wishlist = document.querySelector(".counter-wishlist");
const wishlistTotal = document.querySelector(".wishlist-total");
let wishlistCount = 0;


addToWishlist.onclick = function(){
    wishlistCount++;
    wishlist.style.display = "inline-block";
    wishlistTotal.innerHTML = `${wishlistCount}`; 
    localStorage.setItem("itemsInWishlist", wishlistCount);
}