/* =========================================
   productos.data.js – Catálogo de productos
   ========================================= */

export const PRODUCTOS = [
    // TECNOLOGÍA
    { id:1,  nombre:'MacBook Air M3',       categoria:'tech',    precio:1299, desc:'Ultradelgado, potente y silencioso.',           imagen:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80', nuevo:true  },
    { id:2,  nombre:'iPhone 15 Pro',         categoria:'tech',    precio:999,  desc:'Titanio. El más avanzado de iPhone.',           imagen:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80', nuevo:true  },
    { id:3,  nombre:'AirPods Pro 2',         categoria:'tech',    precio:249,  desc:'Cancelación de ruido adaptativa.',              imagen:'https://images.unsplash.com/photo-1588423771073-b8903fabad85?w=600&q=80', nuevo:false },
    { id:4,  nombre:'iPad Pro M4',           categoria:'tech',    precio:1099, desc:'La pantalla más avanzada jamás en iPad.',       imagen:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80', nuevo:true  },
    { id:5,  nombre:'Apple Watch Ultra 2',   categoria:'tech',    precio:799,  desc:'Para quienes se atreven a más.',               imagen:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80', nuevo:false },
    { id:6,  nombre:'Monitor 4K 27"',        categoria:'tech',    precio:599,  desc:'Color perfecto, cada pixel importa.',           imagen:'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80', nuevo:false },
    { id:7,  nombre:'Teclado Mecánico Pro',  categoria:'tech',    precio:189,  desc:'Switches táctiles, retroiluminación RGB.',      imagen:'https://images.unsplash.com/photo-1561112078-7d24e04c3407?w=600&q=80', nuevo:false },
    { id:8,  nombre:'Mouse Ergonómico',      categoria:'tech',    precio:89,   desc:'Diseñado para largas jornadas.',                imagen:'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80', nuevo:false },
    { id:9,  nombre:'Webcam 4K',             categoria:'tech',    precio:149,  desc:'Streaming profesional desde casa.',             imagen:'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=600&q=80', nuevo:true  },
    { id:10, nombre:'Hub USB-C 12 en 1',     categoria:'tech',    precio:79,   desc:'Conectividad total en tu escritorio.',          imagen:'https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?w=600&q=80', nuevo:false },
    // ROPA
    { id:11, nombre:'Hoodie Minimal',        categoria:'ropa',    precio:89,   desc:'Algodón premium, corte oversized.',             imagen:'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80', nuevo:true  },
    { id:12, nombre:'Camiseta Técnica',      categoria:'ropa',    precio:45,   desc:'Tela que respira, estilo que perdura.',         imagen:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80', nuevo:false },
    { id:13, nombre:'Pantalón Cargo',        categoria:'ropa',    precio:129,  desc:'Funcional y urbano a la vez.',                  imagen:'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80', nuevo:false },
    { id:14, nombre:'Zapatillas Runner',     categoria:'ropa',    precio:159,  desc:'Amortiguación reactiva para cada paso.',        imagen:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80', nuevo:true  },
    { id:15, nombre:'Chaqueta Softshell',    categoria:'ropa',    precio:199,  desc:'Resistente al viento y ligera.',                imagen:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80', nuevo:false },
    { id:16, nombre:'Gorro Beanie',          categoria:'ropa',    precio:29,   desc:'Lana merino, calidez sin exceso.',              imagen:'https://images.unsplash.com/photo-1609873814058-a8928924184a?w=600&q=80', nuevo:false },
    { id:17, nombre:'Mochila Urban 25L',     categoria:'ropa',    precio:149,  desc:'Espacio para todo tu mundo digital.',           imagen:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80', nuevo:true  },
    // HOGAR
    { id:18, nombre:'Lámpara de Mesa LED',   categoria:'hogar',   precio:89,   desc:'Temperatura de color ajustable.',               imagen:'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80', nuevo:false },
    { id:19, nombre:'Planta Monstera',       categoria:'hogar',   precio:39,   desc:'Belleza tropical para tu espacio.',             imagen:'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80', nuevo:false },
    { id:20, nombre:'Cafetera de Émbolo',    categoria:'hogar',   precio:59,   desc:'El café que mereces cada mañana.',              imagen:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80', nuevo:true  },
    { id:21, nombre:'Altavoz Bluetooth',     categoria:'hogar',   precio:179,  desc:'Sonido 360° para cualquier ambiente.',          imagen:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80', nuevo:false },
    { id:22, nombre:'Marco Digital 10"',     categoria:'hogar',   precio:129,  desc:'Tus recuerdos, siempre vivos.',                 imagen:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', nuevo:false },
    { id:23, nombre:'Set de Escritorio',     categoria:'hogar',   precio:69,   desc:'Organización elegante en madera.',              imagen:'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=600&q=80', nuevo:true  },
    // DEPORTE
    { id:24, nombre:'Esterilla de Yoga',     categoria:'deporte', precio:49,   desc:'Antideslizante, 6mm de confort.',               imagen:'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80', nuevo:false },
    { id:25, nombre:'Mancuernas 10kg',       categoria:'deporte', precio:79,   desc:'Par ajustable para entrenamiento en casa.',     imagen:'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', nuevo:false },
    { id:26, nombre:'Cuerda de Saltar Pro',  categoria:'deporte', precio:29,   desc:'Rodamientos de precisión, velocidad máxima.',   imagen:'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=600&q=80', nuevo:false },
    { id:27, nombre:'Botella Térmica 750ml', categoria:'deporte', precio:39,   desc:'Frío 24h. Calor 12h. Acero inoxidable.',        imagen:'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=600&q=80', nuevo:true  },
    { id:28, nombre:'Banda Elástica Set',    categoria:'deporte', precio:35,   desc:'5 niveles de resistencia, full body.',          imagen:'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=600&q=80', nuevo:false },
    { id:29, nombre:'Guantes de Box',        categoria:'deporte', precio:59,   desc:'Cuero sintético de alta durabilidad.',          imagen:'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&q=80', nuevo:false },
    { id:30, nombre:'GPS Garmin Forerunner', categoria:'deporte', precio:349,  desc:'Métricas avanzadas para runners serios.',       imagen:'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80', nuevo:true  },
];
