const productsUrl = "https://michellenarverud.no/rainydays_api/wp-json/wc/store/products";
const enableCors = "https://noroffcors.herokuapp.com/" + productsUrl;

const productsContainer = document.querySelector(".jackets");

async function getProducts() {
    try {
        const response = await fetch(enableCors);
        const products = await response.json();

        console.log(products);

        productsContainer.innerHTML = "";


        for (let i = 0; i < products.length; i++) {

            //console.log(products[i]);

            for (let j = 0; j < products[i].images.length; j++) {

                //console.log(products[i].images[j]);
            

            
            productsContainer.innerHTML += ` 
                                            <a href="product-spesifics.html?id=${products[i].id}">
                                                <div class="products-img"
                                                style="background-image: url(${products[i].images[j].src});"></div>
                                                <div class="product-details">
                                                    <h4>${products[i].name}</h4>
                                                    <p>${products[i].price_html}</p>
                                                </div>
                                            </a>`
            }
        }


    } catch (error) {
        console.log(error);

        productsContainer.innerHTML = "Ooops! Something went wrong when uploading the new arrivals" + `<br><br>` + "Error:" + `<br>` + error;

    }

}

getProducts();