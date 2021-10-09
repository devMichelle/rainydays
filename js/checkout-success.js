const totalItems = document.querySelector(".total-items");
const totalPrice = document.querySelector(".total-price");
const total = localStorage.getItem("itemTotal");
const countTotal = localStorage.getItem("itemCount");

totalItems.innerHTML = `Items: ${countTotal}`;
totalPrice.innerHTML = `Price total: ${total}`;