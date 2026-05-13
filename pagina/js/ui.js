export class ProductUI {
    constructor(container) {
        this.container = container;
    }

    renderProducts(products) {
        this.container.innerHTML = "";

        products.forEach(product => {
            const card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.title}">
                </div>

                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3>${product.title}</h3>
                    <p>${product.price}</p>
                    <button>Comprar</button>
                </div>
            `;

            this.container.appendChild(card);
        });
    }
}