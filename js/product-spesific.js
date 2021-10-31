
// ----------------------------------------------
//           Product details
// ----------------------------------------------


const productContainer = document.querySelector(".product-spesifics");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const productUrl = "https://michellenarverud.no/rainydays_api/wp-json/wc/store/products/" + id;
const enableCors = "https://noroffcors.herokuapp.com/" + productUrl;

//console.log(enableCors);

async function getProduct() {

    try {
        const response = await fetch(enableCors);
        const product = await response.json();

        console.log(product);

        // productContainer.innerHTML = "";

        document.title = "Rainydays | " + `${product.name}`;

        for (let i = 0; i < product.images.length; i++) {
            console.log(product.images[i])

        productContainer.innerHTML = ` <section class="product-spesific-images">
                                            <img src="${product.images[i].src}" alt="Productpicture of rain jacket" class="product-image">
                                            <div class="product-image-thumbnails">
                                                <div>
                                                    <img src="${product.images[i].src}" alt="Productpicture of rain jacket" class="thumbnail">
                                                </div>
                                                <div>
                                                    <img src="${product.images[i].src}" alt="Productpicture of rain jacket" class="thumbnail">
                                                </div>
                                                <div>
                                                    <img src="${product.images[i].src}" alt="Productpicture of rain jacket" class="thumbnail">
                                                </div>
                                            </div>
                                        </section>
                                        <section class="product-spesific-details">
                                            <h1>${product.name}</h1>
                                            <p class="product-price">${product.price_html}</p>
                                            <p>${product.short_description}</p>
                                            <div class="size-color-selector">
                                                <fieldset>
                                                        <legend>Choose size:</legend>
                                                        <div class="size-selector">
                                                            <div>
                                                                <input type="radio" name="size" id="small" class="hide-radio">
                                                                <label for="small">S</label>
                                                            </div>
                                                            <div>
                                                                <input type="radio" name="size" id="medium" class="hide-radio" checked>
                                                                <label for="medium">M</label>
                                                            </div>
                                                            <div>
                                                                <input type="radio" name="size" id="large" class="hide-radio">
                                                                <label for="large">L</label>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <div class="add-to-cart">
                                                    <input type="button" value="Add to cart" class="cta cta-small cta-blue" id="addToCart"> 
                                                </div>
                                                <button class="add-to-wishlist"><img src="icons/heart-icon.png" alt="" class="wishlist-icon"> Add to wishlist</button>
                                            </section>
                                            <section class="product-specs">
                                                <div class="product-specs-header">
                                                    <h2>Details</h2>
                                                    <h2>Size & fit</h2>
                                                    <h2>Reviews</h2>
                                                </div>
                                                <div class="product-specs-text">
                                                ${product.description}
                                                </div>
                                            </section>
                                            `;
        }

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


    } catch (error) {
        console.log(error);
        productContainer.innerHTML = "Oh no! Something went wrong" + `<br> <br>` + "Error:" + `<br>` + error;
    }
}

getProduct();

