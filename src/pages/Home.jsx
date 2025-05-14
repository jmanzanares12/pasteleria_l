import { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { sliderImages } from '../data/data.js';
import { FiAward, FiEye, FiHeart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    };

    const values = [
        {
            icon: <FiAward className='h-8 w-8 text-rose-600 mb-4' />,
            title: 'Misión',
            text: 'Crear experiencias memorables a través de la repostería de artesanal, manteniendo nuestros estandares de calidad y servicio excepcional.'
        },
        {
            icon: <FiEye className='h-8 w-8 text-rose-600 mb-4' />,
            title: 'Visión',
            text: 'Ser reconocidos como la pastelería líder en innovación y calidad, expandiendo nuestra tradición dulce a nuevas generaciones y fronteras.'
        },
        {
            icon: <FiHeart className='h-8 w-8 text-rose-600 mb-4' />,
            title: 'Compromiso',
            text: 'Utilizar siempre ingredientes de primer calidad y procesos artesanales que respeten el medio ambiente.'
        }
    ];

    return (
        <div className='min-h-screen mx-auto px-4 sm:px6 lg:px-8 py-12'>
            {/* Slider */}
            <section className='relative w-full h-[80vh] md:h-[90vh] overflow-hidden'>
                <Slider ref={sliderRef} {...sliderSettings}>
                    {sliderImages.map((images) => (
                        <div key={images.id} className='relative w-full h-[80vh] md:h-[90vh]'>
                            <img
                                src={images.image}
                                alt={images.alt}
                                className='w-full h-full object-cover'
                                loading='lazy'
                            />
                            <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent z-10' />
                            <div className='absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16 lg:px-32 text-white'>
                                <motion.h1
                                    initial={{ opacity: 0, y: -40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className='text-4xl md:text-5xl mb-4 text-center'
                                >
                                    Bienvenidos a <br /> Pastelería Lilliam
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    className='text-2xl md:text-2xl max-w-3xl leading-relaxed drop-shadow-md border-l-4 pl-4 border-rose-400'
                                >
                                    Con más de 30 años de experiencia endulzando los momentos más especiales, en Pastelería Lilliam
                                    convertimos cada creación en una obra de arte. Nuestra tradición familiar, combinada con técnicas
                                    modernas, nos permite ofrecer postres exquisitos, elaborados con ingredientes de la más alta
                                    calidad y un toque de amor en cada receta.
                                </motion.p>
                            </div>
                            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 bg-black/50 px-6 py-3 rounded-xl text-white text-center shadow-lg max-w-[90%]'>
                                <p className='text-lg md:text-xl font-medium'>
                                    {images.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>

            {/* Values */}
            <section className='py-40 mb-16 '>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8'>
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className='bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-rose-300'
                        >
                            <div className='bg-rose-100 w-fit p-4 rounded-2xl mb-6'>
                                {value.icon}
                            </div>
                            <h3 className='text-3xl font-bold text-gray-800 hover:text-rose-600 transition-colors duration-300 font-[Playfair_Display] mb-4'>
                                {value.title}
                            </h3>
                            <p className='text-xl text-gray-600 leading-relaxed'>{value.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA  */}
            <section className='py-14 text-center bg-gradient-to-r from-rose-50 to-rose-100 rounded-2xl shadow-inner'>
                <div className='max-w-2xl mx-auto px-6'>
                    <h2 className='text-4xl font-bold text-gray-800 mb-6 font-[Playfair_Display]'>
                        🎂 <span className='text-rose-600'>¿Quieres conocer más sobre nosotros?</span>
                    </h2>
                    <p className='text-xl text-gray-700 mb-8'>
                        Visita nuestra tienda o explora nuestro catálogo en línea para descubrir nuestras creaciones más deliciosas.
                    </p>
                    <button
                        className='bg-rose-600 text-white px-10 py-4 rounded-xl hover:bg-rose-700 hover:scale-105 transition-all duration-300 text-lg font-semibold shadow-lg flex items-center gap-2 mx-auto'
                        onClick={() => navigate('/about')}
                    >
                        Ver Sobre Nosotros
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;