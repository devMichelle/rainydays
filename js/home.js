const productsUrl = "https://michellenarverud.no/rainydays_api/wp-json/wc/store/products";
const enableCors = "https://noroffcors.herokuapp.com/" + productsUrl;

const featuredContainer = document.querySelector(".product-section");
// const featuredItem = document.querySelector("#featured");

async function getFeatured() {
    try {
        const response = await fetch(enableCors);
        const products = await response.json();

        //console.log(products);

        for (let i = 0; i < products.length; i++) {
            //console.log(products[i])
            for (let j = 0; j < products[i].images.length; j++) {
                //console.log(products[i].images[j]);
                for (let k = 0; k < products[i].categories.length; k++) {
                    //console.log(products[i].categories[k]);
                
                                            
                    if (products[i].categories[k].id === 41) {
                        //console.log("featured");
                        featuredContainer.innerHTML += `
                                                    <a href="product-spesifics.html?id=${products[i].id}" id="notFeatured">
                                                        <div class="products-img"
                                                        style="background-image: url(${products[i].images[j].src});"></div>
                                                        <div class="product-details">
                                                            <h3 class="product-name-link">${products[i].name}</h3>
                                                            <p>${products[i].price_html}</p>
                                                        </div>
                                                    </a>`;
                    } else {
                        console.log("not featured");
                    }


                }
            }
        }

    } catch (error) {
        console.log(error);
    }
}

getFeatured();


