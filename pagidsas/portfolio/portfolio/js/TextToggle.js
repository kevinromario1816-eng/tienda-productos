/* =========================================
   TextToggle.js – Alterna texto de un párrafo
   ========================================= */

export class TextToggle {
    /**
     * @param {string} btnId   - id del botón
     * @param {string} paraId  - id del párrafo
     * @param {string} newText - texto alternativo
     */
    constructor(btnId, paraId, newText) {
        this.btn  = document.getElementById(btnId);
        this.para = document.getElementById(paraId);
        this.newText  = newText;
        this.showingNew = false;

        if (this.btn && this.para) {
            this.originalText = this.para.textContent.trim();
            this.#init();
        }
    }

    #init() {
        this.btn.addEventListener('click', () => this.#toggle());
    }

    #toggle() {
        this.showingNew = !this.showingNew;
        this.para.textContent   = this.showingNew ? this.newText : this.originalText;
        this.btn.textContent    = this.showingNew ? '↩ Texto original' : '✏️ Actualizar texto';
    }
}
