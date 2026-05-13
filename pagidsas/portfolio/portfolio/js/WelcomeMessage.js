/* =========================================
   WelcomeMessage.js – Clase para el saludo
   ========================================= */

export class WelcomeMessage {
    /**
     * @param {string} btnId   - id del botón trigger
     * @param {string} msgId   - id del contenedor del mensaje
     */
    constructor(btnId, msgId) {
        this.btn = document.getElementById(btnId);
        this.msg = document.getElementById(msgId);
        this.visible = false;

        if (this.btn && this.msg) this.#init();
    }

    #init() {
        this.btn.addEventListener('click', () => this.#toggle());
    }

    #toggle() {
        this.visible = !this.visible;
        this.msg.style.display = this.visible ? 'block' : 'none';
        this.btn.textContent = this.visible ? 'Ocultar saludo' : '👋 ¡Salúdame!';
    }
}
