const products = [
    {
        name: "Pro Gaming Mouse",
        price: 59.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS41x6X-ubgfVDlVKJEbXoZGPWxO4UxiNZk1hlJnJhbmbN5xiR-_I7gRdg7&s=10",
        properties: {
            "DPI Limit": "25,1600 DPI",
            "Weight": "63 grams",
            "Sensor": "HERO 25K"
        }
    },
    {
        name: "Retro Keyboard",
        price: 109.99,
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRFUvZuCQk_JYw4fNtEzNxlhl9NyvJ5T2VEwwg7g8jgydvjLcV_V3C1m2xYpKWlIKWX7XSSebNkdbfU9Aw",
        properties: {
            "Layout": "TKL (80%)",
            "Switches": "Linear Red",
            "Connectivity": "Bluetooth / Type-C"
        }
    },
    {
        name: "ANC Headphones",
        price: 199.99,
        image: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQmvjAS7lbws6FVkMHpAJ4L_TIaLQNPBl81YIDxlHTsMkfGGpScw0zaygRGN2k9v-vgK-RG48V8tIR3wUM",
        properties: {
            "Battery": "30 Hours",
            "Noise Cancelling": "Active (Hybrid)",
            "Driver Size": "40 mm"
        }
    },
    {
        name: "Fitness Smart Watch",
        price: 79.99,
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9R_XgtzkQHNJGzlZSBgFPP73yuX8p5CMieeql68HaQdMzWqpIpQy_ibYs1QTh7qKPmYVwhV8nUdCP0-Pgs",
        properties: {
            "Display": "AMOLED Touch",
            "Waterproof": "IP68 Rating",
            "Heart Monitor": "24/7 Tracking"
        }
    }
];

const productImg = document.getElementById('product-img');
const productName = document.getElementById('product-name');
const productPrice = document.getElementById('product-price');
const productSpecs = document.getElementById('product-specs');
const refreshBtn = document.getElementById('refresh-btn');

let lastSelectedIndex = -1;

const productManager = {
    _activeProduct: null,

    get current() {
        return this._activeProduct;
    },

    set current(product) {
        this._activeProduct = product;

        productImg.src = product.image;
        productImg.alt = product.name;
        productName.textContent = product.name;
        productPrice.textContent = `$${product.price.toFixed(2)}`;

        productSpecs.innerHTML = '';

        Object.entries(product.properties).forEach(([label, value]) => {
            const specDiv = document.createElement('div');
            specDiv.className = 'spec-item';
            specDiv.innerHTML = `
                <span class="spec-label">${label}</span>
                <span class="spec-value">${value}</span>
            `;
            productSpecs.appendChild(specDiv);
        });
    }
};

function getNewProduct() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * products.length);
    } while (randomIndex === lastSelectedIndex);

    lastSelectedIndex = randomIndex;
    productManager.current = products[randomIndex];
}

refreshBtn.addEventListener('click', getNewProduct);
getNewProduct();