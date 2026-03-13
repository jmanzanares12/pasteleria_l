import pastel from '../assets/images/pastel.avif'

export const dataProducts = {
    Pasteles: [
        {
            name: 'Tradicional de la casa',
            desc: 'Clásico pastel de vainilla original de Pastelería Lilliam.',
            specs: 'Disponible en: 2oz, 4oz, 1/4lb y 1lb',
            fillings: 'Rellenos de: dulce de leche, mermelada de fresa, crema pastelera, chocolate o piña.',
            note: 'Pedidos mayores a 1lb cuentan como pastel personalizado.',
            tag: 'El favorito de nuestros clientes',
            image: pastel
        },

        {
            name: 'Pastel Helado',
            desc: 'Delicioso pastel helado de vainilla o chocolate, ideal para celebraciones especiales.',
            specs: 'Disponible en: 1lb y 2lb',
            fillings: 'Rellenos de: dulce de leche.',
            note: 'Aplica para pedidos personalizados.',
            tag: 'Refrescante y delicioso'
        }

    ],
    Pan: [
        { name: "Pan de Molde", desc: "Variedad en forma cuadrada y redonda, ideal para sándwiches." },
        { name: "Pan de Cena & Bonetes", desc: "Suaves, frescos y horneados cada mañana." },
        { name: "Barras Artesanales", desc: "Crocantes por fuera, suaves por dentro." }
    ]
}