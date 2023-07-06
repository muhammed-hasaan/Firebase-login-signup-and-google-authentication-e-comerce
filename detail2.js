
//for input //
//for input //
var img3 = localStorage.getItem("imglink")
var text3 = localStorage.getItem("imgtext")
var desc3 = localStorage.getItem("imgdesc")
var images = document.getElementById("image")
var headings = document.getElementById("heading")
var paragraphs = document.getElementById("paragraph")
images.src = img3
headings.innerHTML = text3
paragraphs.innerHTML = desc3
//for input //
//for input //
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