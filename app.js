const products = [
    { id: 1, name: "ช้าง", price: 70, img: "assets/img/chang.png" },
    { id: 2, name: "สิงห์", price: 75, img: "assets/img/singha.png" },
    { id: 3, name: "โซดา", price: 15, img: "assets/img/soda.png" },
    { id: 4, name: "น้ำแข็ง", price: 10, img: "assets/img/ice.png" },
];

let cart = {};

const productGrid = document.getElementById("productGrid");
const cartList = document.getElementById("cartList");
const totalLabel = document.getElementById("total");

// Load products
function renderProducts() {
    productGrid.innerHTML = "";
    products.forEach(p => {
        productGrid.innerHTML += `
            <div class="product" onclick="addToCart(${p.id})">
                <img src="${p.img}">
                <h4>${p.name}</h4>
                <p>${p.price} บาท</p>
            </div>
        `;
    });
}

// Add to cart
function addToCart(id) {
    if (!cart[id]) cart[id] = { qty: 0 };
    cart[id].qty++;

    renderCart();
}

// Render cart
function renderCart() {
    cartList.innerHTML = "";
    let total = 0;

    Object.keys(cart).forEach(id => {
        const product = products.find(p => p.id == id);
        const qty = cart[id].qty;
        const sum = qty * product.price;

        total += sum;

        cartList.innerHTML += `
            <div class="cart-item">
                <span>${product.name} x ${qty}</span>
                <span>${sum} ฿</span>
            </div>
        `;
    });

    if (total === 0) {
        cartList.innerHTML = `<p class="empty">ยังไม่มีสินค้า</p>`;
    }

    totalLabel.innerText = total;
}

renderProducts();
