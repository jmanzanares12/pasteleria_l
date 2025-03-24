import React, { useEffect, useRef } from 'react';
import { FiMapPin, FiClock, FiCoffee, FiHeart } from 'react-icons/fi';
import { locations } from '../data/dataLocation.js';

const About = () => {
    const sliderRef = useRef(null);

    return (
        <div className='max-w-7xl mx-auto px-6 py-16 lg:px-8'>
            {/* Hero Section */}
            <section className='mb-16 text-center'>
                    <h1 className='text-4xl md:text-5xl font-bold text-rose-800 mb-6 font-[Playfair_Display]'>Nuestra Dulce Historia</h1>
                    <p className='max-w-3xl mx-auto text-xl text-gray-800 nb-9 leaading-relaxed'>
                        Desde 1993, en Pastelería Lilliam hemos transformado ingredientes simples en momentos extraordinarios.
                        Cada receta guarda el secreto de tres generaciones de reposteros apasionados, nuestro lema es...
                    </p>
                    <div className='bg-rose-100 rounded-2xl shadow-inner mt-6 p-4 inline-block'>
                        <p className='text-lg text-rose-800 italic font-bold'>
                            Calidad y responsabilidad siempre
                        </p>
                    </div>
            </section>
            
            {/* Locations */}
            <section className='mb-20'>
                <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center font-[Playfair_Display]'>
                    Encuentranos en nuestras siguientes tiendas...
                </h2>
                <div className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 items-center'>
                    {locations.map((location, index) => (
                        <div key={index} className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>

                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
};

export default About;