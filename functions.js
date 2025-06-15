
// Checks if an email is actually an email using regex
function validateEmail(email){
    let isEmail = null;
    const pattern = /[^\s]+@[^\s].[^\s]/;

    if (pattern.test(email)) {
        return true;
    }

    else {
        return false;
    }

}

// Filters out prices according to a specified max price
function priceFilter (prices, max_price) {
    let prices_in_range = [];

    for (let price of prices){
        if (price <= max_price){
            prices_in_range.push(price);
        }
    }

    return prices_in_range;
}

let cart = [];

// Adds a product to a cart list and alerts the user about it
function addToCart(product) {
    cart.push(product);

    alert("${product} added to cart!");

    return cart;

}

// Returns the price with tax(+8.30%) and shipping($12)
const grandTotal = price => price * 1.083 + 12;