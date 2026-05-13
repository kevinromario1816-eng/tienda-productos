/* =========================================
   app.js – Entry point (ES Modules)
   Importa y arranca todos los módulos
   según la página actual
   ========================================= */

import { Header }       from './Header.js';
import { WelcomeMessage } from './WelcomeMessage.js';
import { TextToggle }   from './TextToggle.js';
import { ContactForm }  from './ContactForm.js';
import { ProductStore } from './ProductStore.js';
import { PRODUCTOS }    from './productos.data.js';

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Siempre activo ---- */
    new Header('main-header', 'menu-toggle', 'main-nav');

    /* ---- Página principal (index.html) ---- */
    if (document.getElementById('btn-bienvenida')) {
        new WelcomeMessage('btn-bienvenida', 'welcome-msg');
    }

    if (document.getElementById('btn-toggle-about')) {
        new TextToggle(
            'btn-toggle-about',
            'about-text',
            '¡Hola! Me llamo Kevin. Estoy aprendiendo desarrollo web con HTML, CSS y JavaScript. ' +
            'Este portafolio muestra mi progreso semana a semana. ¡Gracias por visitarlo! 🚀'
        );
    }

    if (document.getElementById('contact-form')) {
        new ContactForm('contact-form', 'btn-toggle-contact');
    }

    /* ---- Página de productos ---- */
    if (document.getElementById('products-grid')) {
        new ProductStore({
            productos:    PRODUCTOS,
            gridId:       'products-grid',
            paginationId: 'pagination',
            prevId:       'btn-prev',
            nextId:       'btn-next',
            pageNumsId:   'page-numbers',
            searchId:     'search-input',
            countId:      'results-count',
        });
    }

});
