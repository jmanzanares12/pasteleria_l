import masaya from '../assets/images/masaya.avif';
import homeGranada from '../assets/images/homeGranada.avif';
import homeDiriomo from '../assets/images/homeDiriomo.avif';

export const locations = [
    {
        name:'Masaya',
        address:'Mercado Municipal Ernesto Fernández, Mercado de Artesanias, Frente a Museo Camilo Ortega',
        hours: 'Lunes a Domingos de 6:00 am a 5:00 pm',
        closed: 'Miercoles: Cerrado',
        image: masaya
    },
    {
        name:'Granada',
        address:'Calle Atravesada, Frente a Financiera Fama',
        hours: 'Lunes a Domingos de 8:00 am a 5:00 pm',
        closed: 'Jueves: Cerrado',
        image: homeGranada
    },
    {
        name:'Diriomo',
        address:'Calle Comercial, Contiguo al Pali Diriomo',
        hours: 'Lunes a Domingos de 8:00 am a 5:00 pm',
        closed: 'Miercoles: Cerrado',
        image: homeDiriomo
    }
];