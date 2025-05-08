import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { sliderImages } from '../data/data.js';
import { FiAward, FiEye, FiHeart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Home = () => {
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            sliderRef.current?.slickNext();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
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
        <div className='max-w-8xl mx-auto px-4 sm:px6 lg:px-8 py-12'>
            {/* Slider */}
            <section className='py-12 md:py-16 lg:py20'>
                <div className='grid md:grid-cols-2 gap-12 lg:gap-16 items-center'>
                    <div className='order-2 md:order-1'>
                        <h1 className='text-4xl md:text-5xl font-bold text-rose-800 md-4 font-[Playfair_Display]'>Bienvenidos a Pastelería Lilliam</h1>
                        <p className='text-xl text-gray-800 mt-4 md:mt-8 mb-8 leading-relaxed border-l-4 border-rose-400 pl-4'>
                            Con más de 30 años de experiencia endulzando los momentos más especiales, en Pastelería Lilliam
                            convertimos cada creación en una obra de arte. Nuestra tradición familiar, combinada con técnicas
                            modernas, nos permite ofrecer postres exquisitos, elaborados con ingredientes de la más alta
                            calidad y un toque de amor en cada receta. Desde clásicos irresistibles hasta innovaciones dulces,
                            cada bocado es una experiencia inolvidable. Nos apasiona hacer de cada celebración un recuerdo único,
                            porque sabemos que los mejores momentos siempre van acompañados de un buen postre.
                        </p>
                    </div>
                    <div className='order-1 md:order-2 relative rounded-2xl overflow-hidden shadow-2xl'>
                        <Slider ref={sliderRef} {...sliderSettings}>
                            {sliderImages.map((images) => (
                                <div key={images.id} className='relative h-[40vh] md:h-[50-hv] lg:h[60hv] w-full'>
                                    <img 
                                        src={images.image}
                                        alt={images.alt}
                                        className='w-full h-full object-cover '
                                        loading='lazy'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-r from-black/20 to-transparent' />
                                    <div className='absolute bottom-8 left-8 text-white z-10 space-y-2'>
                                        <h2 className='text-2xl font-bold font-[Playfair_Display] drop-shadow-2xl'>{images.caption}</h2>                                    
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className='py-12 mb-16 '>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8'>
                    {values.map((value, index) => (
                        <div key={index} className='bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'>
                            <div className='bg-rose-100 w-fit p-4 rounded-2xl mb-6'>
                                {value.icon}
                            </div>
                            <h3 className='text-3xl font-bold text-gray-900 mb-4 font-[Playfair_Display]'>{value.title}</h3>
                            <p className='text-2xl text-gray-600 leading-relaxed'>
                                {value.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA  */}
            <section className='py-10 text-center bg-gray-100 rounded-2xl shadow-inner'>
                <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-[Playfair_Display]'>
                        <span className='text-rose-600 font-bold'>¿Quieres conocer más sobre nosotros?</span>
                    </h2>
                </div>
                <p className='text-xl text-gray-800 mb-8 max-w-2x1 mx-auto'>
                    Visita nuestra tienda o explora nuestro catálogo en línea para descubrir
                    nuestras creaciones de temporada y clásicos favoritos.
                </p>
                <button 
                    className='bg-rose-600 text-white px-10 py-4 rounded-xl
                    hover:bg-rose-700 hover:scale-105 transition-all duration-300
                    text-lg font-semibold shadow-lg flex items-center gap-2 mx-auto'
                    onClick={() => navigate('/about')}
                >
                    Ver Sobre Nosotros
                </button>
            </section>      
        </div>
    );
};

export default Home;