import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMapPin, FiClock, FiCoffee, FiHeart } from 'react-icons/fi';
import { locations } from '../data/dataLocation.js';

const About = () => {
    const navigate = useNavigate();

    return (
        <div className='max-w-7xl mx-auto px-6 py-16 lg:px-8'>
            {/* Hero Section */}
            <section className='mb-16 text-center'>
                <h1 className='text-4xl md:text-5xl font-bold text-rose-800 mb-6 font-[Playfair_Display]'>Un poco de Pastelería Lilliam</h1>
                <p className='max-w-3xl mx-auto text-2xl text-gray-800 nb-9 leaading-relaxed'>
                    Bienvenidos a Pastelería Lilliam, donde cada postre es una historia y cada historia 
                    tiene un toque dulce inolvidable. <br /><br />
                    Desde 1993, en Pastelería Lilliam hemos convertido ingredientes simples en momentos extraordinarios. 
                    Nuestra historia es el reflejo de tres generaciones de reposteros apasionados, dedicados a perfeccionar 
                    el arte de la pastelería con amor, tradición e innovación. Cada creación que sale de nuestro horno no solo es un postre, sino el resultado de años de experiencia, 
                    técnica y una inquebrantable pasión por la calidad. Nos inspira la satisfacción de quienes nos eligen 
                    para acompañar sus celebraciones, desde los momentos más íntimos hasta los eventos más especiales. <br /><br />

                    Nuestro lema es...


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
                            <img src={location.image} alt={location.name} className='h-48 w-full object-cover rounded-2xl mb-4' />
                            <div className='bg-rose-100 w-fit p-6 rounded-xl mb-4'>
                                <FiMapPin className='h-8 w-8 text-rose-600' />
                            </div>
                            <h3 className='text-2xl font-bold text-gray-800 mb-2'>{location.name}</h3>
                            <p className='text-gray-700 mb-4'>
                                {location.address}
                            </p>
                            <div className='flex items-center text-gray-700 gap-2'>
                                <FiClock className='text-rose-600 h-6 w-6' />
                                <span>{location.hours}</span>
                            </div>
                            <div className='flex items-center text-gray-700 gap-2 mt-2'>
                                <FiClock className='text-rose-600 h-6 w-6' />
                                <span>{location.closed}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className='mb-16 text-center'>
                <h2 className='text-3xl font-bold text-gray-800 mb-12 font-[Playfair_Display]'>
                    ¡Nos encanta ver a nuestro equipo!
                </h2>
                <p className='max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed'>
                Contamos con un equipo de profesionales altamente capacitados y comprometidos en brindar una experiencia 
                excepcional. Cada uno de nuestros colaboradores comparte la pasión por la repostería y la dedicación a la excelencia, 
                garantizando que cada creación refleje nuestra tradición y calidad. Gracias a su experiencia y talento, no solo
                ofrecemos productos irresistibles, sino también un servicio cálido y personalizado. En Pastelería Lilliam, 
                queremos que cada cliente se sienta parte de nuestra historia, disfrutando no solo del sabor, sino también de la 
                esencia y el cariño que ponemos en cada detalle.
                </p>
            </section>

            {/* CTA  */}
            <section className='py-10 text-center bg-gray-100 rounded-2xl shadow-inner'>
                <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-[Playfair_Display]'>¿Te gustaría contactar con nosotros?</h2>
                </div>
                <p className='text-xl text-gray-800 mb-8 max-w-2x1 mx-auto'>
                    Te esperamos en cualquiera de nuestras tiendas o en nuestro catálogo en línea para descubrir
                    nuestras creaciones de temporada y clásicos favoritos.
                </p>
                <button className='bg-rose-600 text-white px-10 py-4 rounded-xl 
                    hover:bg-rose-700 hover:scale-105 transition-all duration-300 
                    text-lg font-semibold shadow-lg flex items-center gap-2 mx-auto'
                    onClick={() => navigate('/contact')}
                >
                    Contactanos
                </button>
            </section>
        </div>
    )
};

export default About;