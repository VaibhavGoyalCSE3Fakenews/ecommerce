let products = [
    {name: "T-Shirt", price: 500},
    {name: "Shoes", price: 1500},
    {name: "Watch", price: 2000}
];

let cart = [];

function displayProducts() {
    let list = document.getElementById("product-list");
    list.innerHTML = "";

    products.forEach((p, index) => {
        list.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>Price: ₹${p.price}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
            </div>
        `;
    });
}

function addToCart(index) {
    cart.push(products[index]);
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    cart.forEach(item => {
        cartList.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
    });
}

// Load products
displayProducts();