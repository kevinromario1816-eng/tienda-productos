/* =========================================
   ProductStore.js – Tienda con paginación
   Clase principal que maneja:
   - Renderizado de productos
   - Filtro por categoría
   - Búsqueda en tiempo real
   - Paginación (10 por página)
   ========================================= */

export class ProductStore {
    static PER_PAGE = 10;

    /**
     * @param {Array}  productos  - Array de objetos producto
     * @param {string} gridId     - id del contenedor grid
     * @param {string} paginationId
     * @param {string} prevId
     * @param {string} nextId
     * @param {string} pageNumsId
     * @param {string} searchId
     * @param {string} countId
     */
    constructor({ productos, gridId, paginationId, prevId, nextId, pageNumsId, searchId, countId }) {
        this.allProducts    = productos;
        this.filtered       = [...productos];
        this.currentPage    = 1;
        this.currentCat     = 'all';
        this.searchQuery    = '';

        this.grid       = document.getElementById(gridId);
        this.pagination = document.getElementById(paginationId);
        this.btnPrev    = document.getElementById(prevId);
        this.btnNext    = document.getElementById(nextId);
        this.pageNums   = document.getElementById(pageNumsId);
        this.searchEl   = document.getElementById(searchId);
        this.countEl    = document.getElementById(countId);

        if (!this.grid) return;

        this.#initSearch();
        this.#initFilterBtns();
        this.#initPagination();
        this.render();
    }

    /* ---- Filtros ---- */
    #initFilterBtns() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentCat  = btn.dataset.category;
                this.currentPage = 1;
                this.#applyFilters();
            });
        });
    }

    /* ---- Búsqueda ---- */
    #initSearch() {
        if (!this.searchEl) return;
        this.searchEl.addEventListener('input', () => {
            this.searchQuery = this.searchEl.value.toLowerCase().trim();
            this.currentPage = 1;
            this.#applyFilters();
        });
    }

    #applyFilters() {
        this.filtered = this.allProducts.filter(p => {
            const matchCat  = this.currentCat === 'all' || p.categoria === this.currentCat;
            const matchSrch = p.nombre.toLowerCase().includes(this.searchQuery)
                           || p.desc.toLowerCase().includes(this.searchQuery);
            return matchCat && matchSrch;
        });
        this.render();
    }

    /* ---- Paginación ---- */
    #initPagination() {
        this.btnPrev?.addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.render();
                this.grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        this.btnNext?.addEventListener('click', () => {
            if (this.currentPage < this.#totalPages()) {
                this.currentPage++;
                this.render();
                this.grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    #totalPages() {
        return Math.ceil(this.filtered.length / ProductStore.PER_PAGE);
    }

    #currentPageItems() {
        const start = (this.currentPage - 1) * ProductStore.PER_PAGE;
        return this.filtered.slice(start, start + ProductStore.PER_PAGE);
    }

    /* ---- Render ---- */
    render() {
        this.#renderProducts();
        this.#renderPagination();
        this.#renderCount();
    }

    #renderProducts() {
        const items = this.#currentPageItems();

        if (items.length === 0) {
            this.grid.innerHTML = `
                <div class="empty-state">
                    <p>🔍</p>
                    <span>No encontramos productos para tu búsqueda.</span>
                </div>`;
            return;
        }

        this.grid.innerHTML = items.map((p, i) => ProductStore.#cardHTML(p, i)).join('');
    }

    static #cardHTML(p, i) {
        const delay = (i % ProductStore.PER_PAGE) * 40;
        return `
        <div class="product-card" style="animation-delay:${delay}ms">
            <div class="product-img">
                <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
                ${p.nuevo ? '<span class="product-badge">Nuevo</span>' : ''}
            </div>
            <div class="product-body">
                <span class="product-category">${p.categoria}</span>
                <p class="product-name">${p.nombre}</p>
                <p class="product-desc">${p.desc}</p>
                <div class="product-footer">
                    <span class="product-price">$${p.precio.toLocaleString()}</span>
                    <button class="product-buy">Comprar</button>
                </div>
            </div>
        </div>`;
    }

    #renderPagination() {
        const total = this.#totalPages();

        if (!this.btnPrev || !this.btnNext || !this.pageNums) return;

        // Mostrar/ocultar bloque completo
        if (this.pagination) {
            this.pagination.style.display = total <= 1 ? 'none' : 'flex';
        }

        this.btnPrev.disabled = this.currentPage === 1;
        this.btnNext.disabled = this.currentPage === total;

        // Números de página (máx 7 visibles)
        this.pageNums.innerHTML = this.#pageRange(total)
            .map(n => n === '…'
                ? `<span style="color:var(--c-muted);padding:0 4px">…</span>`
                : `<button class="page-num ${n === this.currentPage ? 'active' : ''}"
                          data-page="${n}">${n}</button>`)
            .join('');

        this.pageNums.querySelectorAll('.page-num').forEach(btn => {
            btn.addEventListener('click', () => {
                this.currentPage = Number(btn.dataset.page);
                this.render();
                this.grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    #pageRange(total) {
        if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

        const cur = this.currentPage;
        const pages = [];

        if (cur <= 4) {
            pages.push(1, 2, 3, 4, 5, '…', total);
        } else if (cur >= total - 3) {
            pages.push(1, '…', total-4, total-3, total-2, total-1, total);
        } else {
            pages.push(1, '…', cur-1, cur, cur+1, '…', total);
        }

        return pages;
    }

    #renderCount() {
        if (!this.countEl) return;
        const start = (this.currentPage - 1) * ProductStore.PER_PAGE + 1;
        const end   = Math.min(this.currentPage * ProductStore.PER_PAGE, this.filtered.length);
        this.countEl.textContent = this.filtered.length === 0
            ? '0 productos'
            : `Mostrando ${start}–${end} de ${this.filtered.length} producto${this.filtered.length !== 1 ? 's' : ''}`;
    }
}
