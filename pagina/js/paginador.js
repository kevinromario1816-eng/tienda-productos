export class Paginator {
    constructor(items, itemsPerPage = 10) {
        this.items = items;
        this.itemsPerPage = itemsPerPage;
        this.currentPage = 1;
    }

    get totalPages() {
        return Math.ceil(this.items.length / this.itemsPerPage);
    }

    getPaginatedItems() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;

        return this.items.slice(start, end);
    }

    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
        }
    }
}