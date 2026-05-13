/* =========================================
   Header.js – Scroll y menú móvil
   ========================================= */

export class Header {
    constructor(headerId, toggleId, navId) {
        this.header = document.getElementById(headerId);
        this.toggle = document.getElementById(toggleId);
        this.nav    = document.getElementById(navId);

        if (this.header) this.#initScroll();
        if (this.toggle && this.nav) this.#initMobileMenu();
    }

    #initScroll() {
        window.addEventListener('scroll', () => {
            this.header.style.background = window.scrollY > 20
                ? 'rgba(0,0,0,0.92)'
                : 'rgba(0,0,0,0.72)';
        }, { passive: true });
    }

    #initMobileMenu() {
        this.toggle.addEventListener('click', () => {
            this.nav.classList.toggle('open');
        });

        // Cerrar al hacer clic en un enlace
        this.nav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => this.nav.classList.remove('open'));
        });
    }
}
