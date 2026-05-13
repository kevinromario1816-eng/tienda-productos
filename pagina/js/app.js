import { products } from "./data.js";
import { ProductUI } from "./ui.js";
import { Paginator } from "./paginator.js";

class App {
    constructor() {
        this.productsContainer = document.getElementById("products-container");
        this.paginationContainer = document.getElementById("pagination");

        this.ui = new ProductUI(this.productsContainer);

        this.paginator = new Paginator(products, 10);

        this.render();
    }

    render() {
        const currentProducts = this.paginator.getPaginatedItems();

        this.ui.renderProducts(currentProducts);

        this.renderPaginationButtons();
    }

    renderPaginationButtons() {
        this.paginationContainer.innerHTML = "";

        for (let i = 1; i <= this.paginator.totalPages; i++) {
            const button = document.createElement("button");

            button.textContent = i;

            if (i === this.paginator.currentPage) {
                button.classList.add("active-page");
            }

            button.addEventListener("click", () => {
                this.paginator.goToPage(i);
                this.render();
            });

            this.paginationContainer.appendChild(button);
        }
    }
}

new App();