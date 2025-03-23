import React from 'react';
import Slider from 'react-slick';
import { sliderImages } from '../data/data.js';
import { FiAward, FiEye, FiHeart, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <prevArrow />,
        nextArrow: <nextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            }
        ]
    };

    const prevArrow = (props) => (
        <button
            {...props}
            className='absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:gb-white transition-all'
            aria-label='Previous'
        >
            <FiChevronLeft className='h-6 w-6 text-gray-800' />
        </button>
    );

    const nextArrow = (props) => (
        <button
            {...props}
            className='absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all'
            aria-label='Next'
        >
            <FiChevronRight className='h-6 w-6 text-gray-800' />
        </button>
    );


    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

            {/* Slider */}
            <section className='py-12 md:py-16 lg:py20'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    <div className='order-2 md:order-1'>
                        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                            Bienvenidos a Pastelería Lilliam
                        </h1>
                        <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                            Con más de 30 años endulzando momentos especiales.
                            Nuestra tradición familiar se combina con técnicas modernas para crear postres
                            que son verdaderas obras de arte.
                        </p>
                    </div>

                    <div className='order-1 md:order-2 relative rounded-xl overflow-hidden shadow-xl'>
                        <Slider {...sliderSettings}>
                            {sliderImages.map((image) => (
                                <div key={image.id} className='relative h-96 w-full'>
                                    <img
                                        src={image.image}
                                        alt={image.alt}
                                        className='w-full h-full object-cover'
                                        loading='lazy'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-r from-black/20 to-transparent' />
                                    <div className='absolute bottom-8 left-8 text-white z-10'>
                                        <h2 className='text-white text-2xl font-bold'>{image.caption}</h2>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            {/*Security */}
            <section className='py-12 mb-16'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>

                    <div className='bg-white p-8 rounded-lg shadow-md'>
                        <FiAward className='h-12 w-12 text-indigo-500 mb-4' />
                        <h3 className='text-3xl font-bold text-gray-800 mb-4'>Misión</h3>
                        <p className='text-xl text-gray-600'>
                            Crear experiencias memorables a través de la repostería de artesanal, manteniendo nuestros
                            estandares de calidad y servicio excepcional.
                        </p>
                    </div>

                    <div className='bg-white p-8 runded-lg shadow-md'>
                        <FiEye className='h-12 w-12 text-indigo-500 mb-4' />
                        <h3 className='text-3xl font-bold text-gray-800 mb-4'>Visión</h3>
                        <p className='text-xl text-gray-600'>
                            Ser reconocidos como la pastelería líder en innovación y calidad,
                            expandiendo nuestra tradición dulce a nuevas generaciones y fronteras.
                        </p>
                    </div>

                    <div className='bg-white p-8 rounded-lg shadow-md'>
                        <FiHeart className='h-12 w-12 text-indigo-500 mb-4' />
                        <h3 className='text-3xl font-bold text-gray-800 mb-4'>Compromiso</h3>
                        <p className='text-xl text-gray-600'>
                            Utilizar siempre ingredientes de primer calidad y procesos
                            artesanales que respeten el medio ambiente.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA  */}
            <section className='py-12 text-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-8'>¿Quieres conocer más sobre nosotros?</h2>
                <p className='text-xl text-gray-600 mb-8 max-w-2x1 mx-auto'>
                    Visita nuestra tienda o explora nuestro catálogo en línea para descubrir 
                    nuestras creaciones de temporada y clásicos favoritos.
                </p>
                <button className='bg-indigo-600 text-white px-8 py-3 rounded-lg 
                    hover:bg-indigo-700 transition-colors duration-300 text-lg
                    font-semibold shadow-lg'
                >
                    Ver Productos
                </button>
            </section>
        </div>
    );
};

export default Home;