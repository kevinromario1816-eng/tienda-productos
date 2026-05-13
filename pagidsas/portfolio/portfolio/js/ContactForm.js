/* =========================================
   ContactForm.js – Manejo del formulario
   ========================================= */

export class ContactForm {
    /**
     * @param {string} formId       - id del formulario
     * @param {string} toggleBtnId  - id del botón ocultar/mostrar
     */
    constructor(formId, toggleBtnId) {
        this.form      = document.getElementById(formId);
        this.toggleBtn = document.getElementById(toggleBtnId);
        this.formVisible = true;

        if (this.form) this.#initForm();
        if (this.toggleBtn && this.form) this.#initToggle();
    }

    #initToggle() {
        this.toggleBtn.addEventListener('click', () => {
            this.formVisible = !this.formVisible;
            this.form.style.display      = this.formVisible ? 'flex' : 'none';
            this.toggleBtn.textContent   = this.formVisible ? '✖ Ocultar formulario' : '📬 Mostrar formulario';
        });
    }

    #initForm() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!this.#validate()) return;
            this.#showFeedback('✅ ¡Mensaje enviado con éxito! Gracias por contactarme.', 'success');
            this.form.reset();
        });
    }

    #validate() {
        const fields = this.form.querySelectorAll('input, textarea');
        const allFilled = [...fields].every(f => f.value.trim() !== '');
        if (!allFilled) {
            this.#showFeedback('⚠️ Por favor, completa todos los campos.', 'error');
        }
        return allFilled;
    }

    #showFeedback(message, type) {
        const prev = document.getElementById('form-feedback');
        if (prev) prev.remove();

        const div = document.createElement('div');
        div.id = 'form-feedback';
        div.textContent = message;
        Object.assign(div.style, {
            marginTop:    '0.75rem',
            padding:      '0.875rem 1.125rem',
            borderRadius: '12px',
            fontWeight:   '500',
            fontSize:     '0.875rem',
            background:   type === 'success' ? 'rgba(41,151,255,0.12)' : 'rgba(248,113,113,0.12)',
            border:       type === 'success' ? '1px solid rgba(41,151,255,0.3)' : '1px solid rgba(248,113,113,0.3)',
            color:        type === 'success' ? '#2997ff' : '#f87171',
        });

        this.form.after(div);
        setTimeout(() => div.remove(), 4000);
    }
}
