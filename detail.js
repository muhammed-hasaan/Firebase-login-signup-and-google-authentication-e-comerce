
//from api//
//from api//
var img = JSON.parse(localStorage.getItem("obj2"))
var images = document.getElementById("image")
var headings = document.getElementById("heading")
var paragraphs = document.getElementById("paragraph")
console.log(img)
images.src = img.image
headings.innerHTML = img.title
paragraphs.innerHTML = img.price
//from api//
//from api//
// JavaScript code for handling interactions or fetching product data dynamically
// You can use AJAX or other techniques to load product data dynamically from a backend server

// Example function to handle adding a product to the cart
function addToCart() {
    // Implement your logic here
    alert("Product added to cart!");
}

// Example event listener for the "Add to Cart" button
var addToCartButton = document.querySelector('.add-to-cart');
addToCartButton.addEventListener('click', addToCart);